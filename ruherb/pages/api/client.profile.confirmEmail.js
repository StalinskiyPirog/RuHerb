/**
 * @brief   Подтверждение почты
 */

import { ClientConfirmEmail }                                       from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields, IntTime }                             from "../../components/functions/Utils";
import { GenerateSessionKey, VerifyEmailConfirmKey }                from "../../components/functions/SecurityKeys";
 
 
const REQUIRED_FIELDS = ["confirmEmailKey"];
const CONFIRM_EMAIL_KEY_LIFETIME = 60*30;

 
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

    var confirmEmailData = await VerifyEmailConfirmKey(fields.confirmEmailKey);

    // Ошибка: Ключ подтверждения почты повреждён
    if (confirmEmailData === null) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_CONFIRM_EMAIL_KEY));
        return;
    }

    // Ошибка: Время действия ключа истекло
    if (confirmEmailData.iat + CONFIRM_EMAIL_KEY_LIFETIME < IntTime()) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_CONFIRM_EMAIL_KEY));
        return;
    }
    
    // Подтверждаем почту у пользователя
    var client = await ClientConfirmEmail({
        clientId: confirmEmailData.id
    });

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
 