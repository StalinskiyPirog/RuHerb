/**
 * @brief   Подтверждение почты
 */

import { FindRetailerByEmail }                                      from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields, PasswordHash, RETAILER_ID_OFFSET }    from "../../components/functions/Utils";
import { GenerateSessionKey }                                       from "../../components/functions/SecurityKeys";
 
 
const REQUIRED_FIELDS = ["email", "password"];

 
export default async function (req, res) {
    // Ошибка: Не POST запрос
    if (req.method !== 'POST') {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.WRONG_REQUEST_METHOD));
        return;
    }

    

    var fields = req.body

    // Ошибка: Отсутствуют необходимые поля
    if (!CheckRequiredFields(REQUIRED_FIELDS, fields)) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_REQUEST_DATA));
        return;
    }

    // Ищем пользователя по почте
    var retailer = await FindRetailerByEmail({
        email: fields.email
    });

    // Пользователь не найден
    if (retailer === null) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.WRONG_AUTH_DATA));
        return;
    }

    // Хэшируем пароль
    var hashedPassword = PasswordHash(retailer.id + RETAILER_ID_OFFSET, fields.password);

    // Неверный пароль
    if (hashedPassword !== retailer.password) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.WRONG_AUTH_DATA));
        return;
    }

    // Генерируем ключ сессии
    var sessionKey = await GenerateSessionKey(retailer.id + RETAILER_ID_OFFSET, retailer.password);

    // Собираем ответ запроса
    var response = {
        retailerId:     retailer.id,
        name:           retailer.name,
        surname:        retailer.surname,
        patronymic:     retailer.patrinymic,
        companyName:    retailer.companyName,
        categoryId:     retailer.categoryId,
        city:           retailer.city,
        phone:          retailer.phone,
        email:          retailer.email,
        sessionKey:     sessionKey,
        products:       []  // TODO
    }

    res.setHeader('Set-Cookie', [serialize("session-key", sessionKey, {path:"/", expires : new Date(Date.now()+6000000)}),serialize("retailer-id", retailer.id, {path:"/", expires : new Date(Date.now()+6000000)})]).status(200).json(SuccessResponse(response));
}
 