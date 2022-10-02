/**
 * @brief   Подтверждение почты
 */

import { CreateProduct, FindProductsByFilter, FindProductsByFilters, FindRetailerBySessionKey }                  from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields, FilterObject }                                      from "../../components/functions/Utils";
import { PrismaClient } from "@prisma/client";


const REQUIRED_FIELDS = [];
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

    var retailer = await FindRetailerBySessionKey({
        sessionKey: sessionKey
    });

    // Ошибка: Неправильный ключ сессии
    if (retailer === null) {
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_SESSION_KEY));
        return;
    }



    const products = await FindProductsByFilter({
        filter: {
            retailerId: retailer.id
        }
    })

    var productsIds = [];
    for (const product of products) {
        productsIds.push(product.id);
    } 

    const prisma = new PrismaClient();

    const productOnOrders = await prisma.productOnOrder.findMany({
        where: {
            productId: {
                in: productsIds
            }
        }
    })

    const ordersIds = new Set();
    for (const productOnOrder of productOnOrders) {
        ordersIds.add(productOnOrder.orderId);
    } 

    console.log(ordersIds)

    const orders = await prisma.productOnOrder.findMany({
        where: {
            productId: {
                in: productsIds
            }
        }
    })

    // console.log(JSON.stringify(result, null, "\t"));


 
    res.status(200).json(SuccessResponse(null));
}
  