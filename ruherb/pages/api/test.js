/**
 * @brief   Подтверждение почты
 */

import { CreateProduct, FindRetailerBySessionKey }                  from "../../components/functions/PrismaCRUD";
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


    console.log(["title", "amount", "price", "brand", "country"].concat(["description", "storage", "note", "categoriesId", "imagesId"]));


    const prisma = new PrismaClient();

    var result = await prisma.retailer.findUnique({
        where: {
            id: retailer.id
        },
        include: {
            products: {
                include: {
                    categories: true,
                    images: true,
                    reviews: true,

                    _count: {
                        select: {
                            categories: true,
                            reviews: true,
                            orders: true
                        }
                    }
                }
            }
        }
    })

    // console.log(JSON.stringify(result, null, "\t"));


 
    res.status(200).json(SuccessResponse(null));
}
  