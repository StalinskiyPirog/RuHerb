/**
 * @brief   Подтверждение почты
 */

import { FindRetailerByEmail, FindRetailerBySessionKey }            from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields, RETAILER_ID_OFFSET }                  from "../../components/functions/Utils";
import { GenerateChangePasswordKey }                                from "../../components/functions/SecurityKeys";
import { SendMail_ChangePass }                                      from "../../components/functions/Email";


const REQUIRED_FIELDS = ["email"];
// OR
const REQUIRED_COOKIES = ["session-key"];


export default async function (req, res) {
    // Ошибка: Не POST запрос
    if (req.method !== 'POST') {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.WRONG_REQUEST_METHOD));
        return;
    }

    // Ошибка: Тело запроса не JSON
    if (typeof(req.body) !== "object") {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_REQUEST_DATA));
        return;
    }

    var fields = req.body

    // Ошибка: Отсутствуют необходимые поля
    if (!CheckRequiredFields(REQUIRED_FIELDS, fields) && !CheckRequiredFields(REQUIRED_COOKIES, req.headers)) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_REQUEST_DATA));
        return;
    }

    if ("session-key" in req.headers) 
    {
        var sessionKey = req.headers["session-key"];

        var retailer = await FindRetailerBySessionKey({
            sessionKey: sessionKey
        });

        // Ошибка: Неправильный ключ сессии
        if (retailer === null) {
            res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_SESSION_KEY));
            return;
        }
    }
    else
    {
        var retailer = await FindRetailerByEmail({
            email: fields.email
        });

        // Ошибка: Неверная почта
        if (retailer === null) {
            res.status(400).json(ErrorResponse(RESPONSE_ERROR.WRONG_AUTH_DATA));
            return;
        }

        // Ошибка: Почта не подтверждена
        if (!retailer.emailConfirmed) {
            res.status(400).json(ErrorResponse(RESPONSE_ERROR.EMAIL_NOT_CONFIRMED));
            return;
        }
    }

    var changePassKey = await GenerateChangePasswordKey(retailer.id + RETAILER_ID_OFFSET);

    var mailSent = await SendMail_ChangePass(retailer.email, retailer.name, retailer.surname, changePassKey)

    // Письмо не было отправлено (Ошибка?)
    // TODO: Нужно пересмотреть реакцию на ошибку отправки письма
    if (!mailSent) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.FAILED_TO_SEND_EMAIL));
        return;
    }

    res.status(200).json(SuccessResponse(null));
}
