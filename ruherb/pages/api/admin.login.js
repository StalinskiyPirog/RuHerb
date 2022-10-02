import { FindRetailerByEmail }                                      from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { ADMIN_ID_OFFSET, CheckRequiredFields, PasswordHash, RETAILER_ID_OFFSET }    from "../../components/functions/Utils";
import { GenerateSessionKey }                                       from "../../components/functions/SecurityKeys";


const REQUIRED_FIELDS = ["password"];

const ADMIN_ID = 1;


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

    // Неверный пароль
    if (fields.password !== process.env.ADMIN_PASSWORD) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.WRONG_AUTH_DATA));
        return;
    }

    // Генерируем ключ сессии
    var sessionKey = await GenerateSessionKey(ADMIN_ID_OFFSET - ADMIN_ID, fields.password);

    // Собираем ответ запроса
    var response = {
        sessionKey:     sessionKey
    }

    res.status(200).json(SuccessResponse(response));
}
