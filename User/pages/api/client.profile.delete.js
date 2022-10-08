/**
 * @brief   Подтверждение почты
 */

import { ClientDelete, FindClientBySessionKey }                     from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields, PasswordHash }                        from "../../components/functions/Utils";
 
 
const REQUIRED_FIELDS = ["password"];
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
    if (!CheckRequiredFields(REQUIRED_FIELDS, fields)) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_REQUEST_DATA));
        return;
    }

    // Ошибка: Отсутствует необходимые cookie
    if (!CheckRequiredFields(REQUIRED_COOKIES, req.headers)) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_REQUEST_DATA));
        return;
    }

    var sessionKey = req.headers["session-key"];

    var client = await FindClientBySessionKey({
        sessionKey: sessionKey
    });

    // Ошибка: Неправильный ключ сессии
    if (client === null) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_SESSION_KEY));
        return;
    }

    // Хэшируем пароль
    var hashedPassword = PasswordHash(client.id, fields.password);

    // Если пароль не верный
    if (hashedPassword !== client.password) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.WRONG_AUTH_DATA));
        return;
    }

    await ClientDelete({
        clientId: client.id
    });

    res.status(200).json(SuccessResponse(null));
}
 