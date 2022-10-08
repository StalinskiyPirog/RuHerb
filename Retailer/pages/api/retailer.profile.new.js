/**
 * @brief   Регистрация нового пользователя
 */

import { FindRetailerByEmail, CreateRetailer, RetailerUpdatePassword } from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields, PasswordHash, RETAILER_ID_OFFSET }    from "../../components/functions/Utils";
import { SendMail_EmailConfirm }                                    from "../../components/functions/Email";
import { GenerateEmailConfirmKey }                                  from "../../components/functions/SecurityKeys";


const REQUIRED_FIELDS = ["name", "surname", "patronymic", "companyName", "categoryId", "email", "password", "city", "phone"];


export default async function (req, res) {
    // Ошибка: Не POST запрос
    if (req.method !== 'POST') {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.WRONG_REQUEST_METHOD));
        return;
    }

    // // Ошибка: Тело запроса не JSON
    // if (typeof(req.body) !== "object") {
    //     res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_REQUEST_DATA));
    //     return;
    // }

    var fields = req.body

    // Ошибка: Отсутствуют необходимые поля
    if (!CheckRequiredFields(REQUIRED_FIELDS, fields)) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_REQUEST_DATA));
        return;
    }

    // Поиск ритейлеров с данной почтой
    var existRetailer = await FindRetailerByEmail({
        email: fields.email
    })

    // Ошибка: Ритейлер с данной почтой уже зарегистрирован
    if (existRetailer !== null) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.EMAIL_ALREADY_REGISTRED));
        return;
    }

    //TODO: Проверка по телефону и по названию компании


    // Создаём пользователя в БД
    var retailer = await CreateRetailer({
        name:               fields.name, 
        surname:            fields.surname, 
        patronymic:         fields.patronymic, 
        email:              fields.email, 
        phone:              fields.phone, 
        companyName:        fields.companyName,
        city:               fields.city, 
        mainCategoryId:     fields.categoryId, 
        password:           "none"
    })

    // Хэшируем пароль
    var hashedPassword = PasswordHash(retailer.id + RETAILER_ID_OFFSET, fields.password);

    // Установка пароля
    await RetailerUpdatePassword({
        retailerId: retailer.id,
        newPassword: hashedPassword
    });

    // Генерация ключа подтверждения почты
    var emailConfirmKey = await GenerateEmailConfirmKey(retailer.id + RETAILER_ID_OFFSET);

    // Отправка письма на почту с ключём подтверждения
    var mailSent = await SendMail_EmailConfirm(fields.email, fields.name, fields.surname, emailConfirmKey);

    // Письмо не было отправлено (Ошибка?)
    // TODO: Нужно пересмотреть реакцию на ошибку отправки письма
    if (!mailSent) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.FAILED_TO_SEND_EMAIL));
        return;
    }

    res.status(200).json(SuccessResponse(null));
}
