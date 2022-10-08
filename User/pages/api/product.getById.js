/**
 * @brief   Подтверждение почты
 */

import { FindProductById, FindRetailerBySessionKey }                from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields }                                      from "../../components/functions/Utils";
 
 
const REQUIRED_FIELDS = ["productId"];



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

    var fields = req.body;

    // Ошибка: Отсутствуют необходимые поля
    if (!CheckRequiredFields(REQUIRED_FIELDS, fields)) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_REQUEST_DATA));
        return;
    }

    var product = await FindProductById({
        productId:  fields.productId
    });

    // Товар не найден
    if (product === null) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.PRODUCT_NOT_EXIST));
        return;
    }

    // Запрос с ключём ритейлера
    var retailer = null;
    if ("session-key" in req.headers) {
        var sessionKey = req.headers["session-key"];

        var retailer = await FindRetailerBySessionKey({
            sessionKey: sessionKey
        });
    }

    // Если владелец товара
    if (retailer !== null && retailer.id === product.retailerId)
    {
        res.status(200).json(SuccessResponse(product));
    }
    else
    {
        // Товар недоступен
        if (!product.visible) {
            res.status(400).json(ErrorResponse(RESPONSE_ERROR.PRODUCT_NOT_AVAILABLE));
            return;
        }

        res.status(200).json(SuccessResponse(product));
    }
}
 