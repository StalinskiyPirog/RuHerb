
export const ADMIN_ID_OFFSET    = process.env.ADMIN_ID_OFFSET
export const RETAILER_ID_OFFSET = process.env.RETAILER_ID_OFFSET


/**
 * @brief   Проверка на наличие необходимых полей в объекте
 * 
 * @param   {Array} requireFields - Массив с необходимыми полями
 * @param   {Object} data         - Объект
 * 
 * @returns {Boolean} Все необходимые поля присутствуют
 */
export function CheckRequiredFields(requireFields, data) {
    for (const field of requireFields) {
        if (!(field in data)) {
            return false;
        }
    }

    return true;
}


/**
 * @brief   Отфильтровать объект по указанным ключам
 * 
 * @param   {Array}  keys   - Массив ключей
 * @param   {Object} object - Объект
 * 
 * @returns Отфильтрованный объект
 */
export function FilterObject(keys, object) {
    return keys.reduce((obj, key) => ({ ...obj, [key]: object[key] }), {});
}


/**
 * @brief   Хэширование пароля
 * 
 * @param   {Integer} id        - Айди
 * @param   {String}  password  - Пароль
 * 
 * @returns {String} Хэшированный пароль
 */
export function PasswordHash(id, password) {
    const { createHash } = require('crypto');

    return createHash('sha256').update(id + password + ~(id**2)).digest('hex')
}



export function IntTime() {
    return Math.floor((new Date().getTime()) / 1000);
}

