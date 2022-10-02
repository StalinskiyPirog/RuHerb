/**
 * @brief   Регистрация нового пользователя
 */

import { CreateClient, ClientUpdatePassword, FindClientByEmail }    from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields, PasswordHash }                        from "../../components/functions/Utils";
import { SendMail_EmailConfirm }                                    from "../../components/functions/Email";
import { GenerateEmailConfirmKey }                                  from "../../components/functions/SecurityKeys";


const REQUIRED_FIELDS = ["name", "surname", "email", "password"];


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

    // Поиск пользователей с данной почтой
    var existClient = await FindClientByEmail({
        email: fields.email
    })

    // Ошибка: Пользователь с данной почтой уже зарегистрирован
    if (existClient !== null) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.EMAIL_ALREADY_REGISTRED));
        return;
    }

    // Создаём пользователя в БД
    var client = await CreateClient({
        name: fields.name,
        surname: fields.surname,
        email: fields.email,
        phone: null,
        password: "none",
    })

    // Хэшируем пароль
    var hashedPassword = PasswordHash(client.id, fields.password);

    // Установка пароля
    await ClientUpdatePassword({
        clientId: client.id,
        newPassword: hashedPassword
    })

    // Генерация ключа подтверждения почты
    var emailConfirmKey = await GenerateEmailConfirmKey(client.id);

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
