/**
 * @brief   
 */

import { CategoryEdit, CreateDeliveryAddress}                                               from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields }                                      from "../../components/functions/Utils";
import { DecodeSessionKey, VerifySessionKey }                       from "../../components/functions/SecurityKeys";


const REQUIRED_FIELDS = ["address", "name"];
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

    // Декодируем ключ чтобы получить айди
    var sessionKeyData = DecodeSessionKey(sessionKey);
    // var adminId = 0 - sessionKeyData.id + ADMIN_ID_OFFSET

    // Если не получилось декодировать -> ???
    if (sessionKeyData === null) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_SESSION_KEY));
        return;
    }

    // Проверяем подлинность ключа
    sessionKeyData = VerifySessionKey(sessionKey, process.env.ADMIN_PASSWORD);

    // Ключ скомпроментирован
    if (sessionKeyData === null) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_SESSION_KEY));
        return;
    }


    var address = await CreateDeliveryAddress({
        address: fields.address,
        name: fields.name
    })

    res.status(200).json(SuccessResponse(address));
}
