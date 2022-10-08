/**
 * @brief   Подтверждение почты
 */

import { FindClientBySessionKey, FindOrdersByClientId }             from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields, FilterObject }                        from "../../components/functions/Utils";
 
 
const REQUIRED_FIELDS = [];
const NOT_REQUIRED_FIELDS = ["offset", "count"];
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

    fields = FilterObject(NOT_REQUIRED_FIELDS, fields);

    var offset = 0;
    var count = 0;

    if (fields.offset !== undefined) { offset = fields.offset}
    if (fields.count !== undefined)  { count = fields.count}

    var orders = await FindOrdersByClientId({
        clientId: client.id,
        skip: offset,
        take: count
    })

    res.status(200).json(SuccessResponse(orders));
}
 