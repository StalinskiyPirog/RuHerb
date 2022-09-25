/**
 * @brief   Подтверждение почты
 */

import { CreateOrder, FindClientBySessionKey, FindProductById }     from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields }                                      from "../../components/functions/Utils";
 
 
const REQUIRED_FIELDS = ["address", "products"];
const REQUIRED_PRODUCTS_FIELDS = ["productId", "quantity"];
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

    // Ошибка: отсутствуют вложенные поля
    for (const orderProduct of fields.products) {
        if (!CheckRequiredFields(REQUIRED_PRODUCTS_FIELDS, orderProduct)) {
            res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_REQUEST_DATA));
            return;
        }
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


    for (const orderProduct of fields.products) {
        var product = await FindProductById({
            productId:  orderProduct.productId
        });

        // Товар не найден
        if (product === null) {
            res.status(400).json(ErrorResponse(RESPONSE_ERROR.PRODUCT_NOT_EXIST, {
                productId: orderProduct.productId
            }));
            return;
        }

        // Товар недоступен
        if (!product.visible) {
            res.status(400).json(ErrorResponse(RESPONSE_ERROR.PRODUCT_NOT_AVAILABLE));
            return;
        }

        // Недоступно выбранное количество товара
        if (product.amount < orderProduct.quantity) {
            res.status(400).json(ErrorResponse(RESPONSE_ERROR.PRODUCT_LARGE_AMOUNT, {
                productAmount: product.amount
            }));
            return;
        }
    }


    // TODO: Оплата


    var order = await CreateOrder({
        clientId: client.id,
        address: fields.address,
        products: fields.products
    })


    res.status(200).json(SuccessResponse(order));
}
 