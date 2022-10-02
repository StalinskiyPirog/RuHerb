/**
 * @brief   Подтверждение почты
 */

import { FindClientByEmail }                                        from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields, PasswordHash }                        from "../../components/functions/Utils";
import { GenerateSessionKey }                                       from "../../components/functions/SecurityKeys";
 
 
const REQUIRED_FIELDS = ["email", "password"];

 
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

    // Ищем пользователя по почте
    var client = await FindClientByEmail({
        email: fields.email
    });

    // Пользователь не найден
    if (client === null) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.WRONG_AUTH_DATA));
        return;
    }

    // Хэшируем пароль
    var hashedPassword = PasswordHash(client.id, fields.password);

    // Неверный пароль
    if (hashedPassword !== client.password) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.WRONG_AUTH_DATA));
        return;
    }

    // Генерируем ключ сессии
    var sessionKey = await GenerateSessionKey(client.id, client.password);

    // Собираем ответ запроса
    var response = {
        clientId:   client.id,
        name:       client.name,
        surname:    client.surname,
        sessionKey: sessionKey,
        email:      client.email,
        wishList:   client.wishlist
    }

    res.status(200).json(SuccessResponse(response));
}
 