/**
 * @brief   Подтверждение почты
 */

import { FindClientByEmail, FindClientBySessionKey }                from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { GenerateChangePasswordKey }                                from "../../components/functions/SecurityKeys";
import { SendMail_ChangePass }                                      from "../../components/functions/Email";


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
    if (!("session-key" in req.headers) && !("email" in fields)) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_REQUEST_DATA));
        return;
    }

    if ("session-key" in req.headers) 
    {
        var sessionKey = req.headers["session-key"];

        var client = await FindClientBySessionKey({
            sessionKey: sessionKey
        });

        // Ошибка: Неправильный ключ сессии
        if (client === null) {
            res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_SESSION_KEY));
            return;
        }
    }
    else
    {
        var client = await FindClientByEmail({
            email: fields.email
        });

        // Ошибка: Неверная почта
        if (client === null) {
            res.status(400).json(ErrorResponse(RESPONSE_ERROR.WRONG_AUTH_DATA));
            return;
        }

        // Ошибка: Почта не подтверждена
        if (!client.emailConfirmed) {
            res.status(400).json(ErrorResponse(RESPONSE_ERROR.EMAIL_NOT_CONFIRMED));
            return;
        }
    }

    var changePassKey = await GenerateChangePasswordKey(client.id);

    var mailSent = await SendMail_ChangePass(client.email, client.name, client.surname, changePassKey)

    // Письмо не было отправлено (Ошибка?)
    // TODO: Нужно пересмотреть реакцию на ошибку отправки письма
    if (!mailSent) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.FAILED_TO_SEND_EMAIL));
        return;
    }

    res.status(200).json(SuccessResponse(null));
}
