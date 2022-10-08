/**
 * @brief   Подтверждение почты
 */

import { CreateProduct, FindCategoriesByIds, FindImagesByIds, FindRetailerBySessionKey } from "../../components/functions/PrismaCRUD";
import { RESPONSE_ERROR }                                           from "../../components/functions/Enums"
import { SuccessResponse, ErrorResponse }                           from "../../components/functions/ApiResponses"
import { CheckRequiredFields }                                      from "../../components/functions/Utils";
 
 
const REQUIRED_FIELDS = ["title", "amount", "price", "brand", "country", "expires", "wayToUse", "contain", "description", "storage", "note", "categoriesId", "imagesId"];
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


    // Ищем категории, содержащиеся в запросе
    var existCategories = await FindCategoriesByIds({
        categoriesIds: fields.categoriesId
    });

    // Массив айди категорий, найденных в предыдущем пункте
    var existCategoriesIds = [];
    for (const category of existCategories) {
        existCategoriesIds.push(category.id);
    }

    // Если кол-во найденных категорий не совпадает с количеством категорий в запросе 
    // Ошибка: Не существуют категории [n, ...]
    if (existCategoriesIds.length !== fields.categoriesId.length) {
        var response = fields.categoriesId.filter(x => !existCategoriesIds.includes(x));
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.CATEGORY_NOT_EXIST, response));
        return;
    }


    // Ищем изображения, содержащиейся в запросе
    var existImages = await FindImagesByIds({
        imagesIds: fields.imagesId
    });

    // Массив айди изображений, найденных в предыщуем пункте
    var existImagesIds = [];
    for (const image of existImages) {
        existImagesIds.push(image.id);
    }

    // Если кол-во найденных изображений не совпадает с количеством изображений в запросе 
    // Ошибка: Не существуют изображения [n, ...]
    if (existImagesIds.length !== fields.imagesId.length) {
        var response = fields.imagesId.filter(x => !existImagesIds.includes(x));
        res.status(400).json(ErrorResponse(RESPONSE_ERROR.IMAGE_NOT_EXIST, response));
        return;
    }

    var product = await CreateProduct({
        title:          fields.title,
        amount:         fields.amount,
        price:          fields.price,
        brand:          fields.brand,
        country:        fields.country,
        expires:        fields.expires,
        wayToUse:       fields.wayToUse,
        contain:        fields.contain,
        description:    fields.description,
        storage:        fields.storage,
        note:           fields.note,
        categoriesId:   fields.categoriesId,
        retailerId:     retailer.id,
        imagesId:       fields.imagesId
    });

    res.status(200).json(SuccessResponse(product));
}
 