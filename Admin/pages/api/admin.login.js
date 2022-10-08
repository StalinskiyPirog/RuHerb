import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { ADMIN_ID_OFFSET, CheckRequiredFields, PasswordHash, RETAILER_ID_OFFSET }    from "../../components/functions/Utils";
import { GenerateSessionKey }                                       from "../../components/functions/SecurityKeys";
import { serialize } from 'cookie';

const REQUIRED_FIELDS = ["password"];

const ADMIN_ID = 1;


export default async function (req, res) {
    console.log("пришел запрос"+req.body);
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
    console.log("В нем "+fields.password);
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
    
    console.log("Ошибок не произошло ");
    // Генерируем ключ сессии
    var sessionKey = await GenerateSessionKey(ADMIN_ID_OFFSET - ADMIN_ID, fields.password);

    // Собираем ответ запроса
    var response = {
        sessionKey:     sessionKey
    }
    
    console.log("Ключ "+sessionKey);
    res.setHeader('Set-Cookie', serialize("session-key", sessionKey, {path:"/", expires : new Date(Date.now()+6000000)})).status(200).json(SuccessResponse(response));
}
