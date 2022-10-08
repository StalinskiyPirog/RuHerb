/**
 * @brief   Подтверждение почты
 */

import { FindReviewsByProductId }                                   from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields, FilterObject }                        from "../../components/functions/Utils";
 
 
const REQUIRED_FIELDS = ["productId"];
const NOT_REQUIRED_FIELDS = ["offset", "count"];



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

    var productId = fields.productId;
    fields = FilterObject(NOT_REQUIRED_FIELDS, fields);

    var offset = 0;
    var count = 0;

    if (fields.offset !== undefined) { offset = fields.offset}
    if (fields.count !== undefined)  { count = fields.count}

    var reviews = await FindReviewsByProductId({
        productId:  productId,
        skip:       offset,
        take:       count
    });

    res.status(200).json(SuccessResponse(reviews));
}
