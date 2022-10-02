/**
 * @brief   Подтверждение почты
 */

import { FindRetailerById, RetailerUpdatePassword }                 from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields, IntTime, PasswordHash, RETAILER_ID_OFFSET } from "../../components/functions/Utils";
import { GenerateSessionKey, VerifyChangePasswordKey }              from "../../components/functions/SecurityKeys";


const REQUIRED_FIELDS = ["changePasswordKey", "password"];
const CHANGE_PASSORD_KEY_LIFETIME = 60*30;


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

    var changePassData = await VerifyChangePasswordKey(fields.changePasswordKey);

    // Ошибка: Ключ смены пароля повреждён
    if (changePassData === null) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_CHANGE_PASSWORD_KEY));
        return;
    }

    // Ошибка: Время действия ключа истекло
    if (changePassData.iat + CHANGE_PASSORD_KEY_LIFETIME < IntTime()) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_CHANGE_PASSWORD_KEY));
        return;
    }


    var retailer = await FindRetailerById({
        retailerId: changePassData.id - RETAILER_ID_OFFSET
    });

    // Хэшируем пароль
    var hashedPassword = PasswordHash(retailer.id + RETAILER_ID_OFFSET, fields.password);

    var retailer = await RetailerUpdatePassword({
        retailerId: changePassData.id - RETAILER_ID_OFFSET,
        newPassword: hashedPassword
    });

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

    res.status(200).json(SuccessResponse(response));
}
