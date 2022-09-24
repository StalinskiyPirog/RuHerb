/**
 * @brief   Генерация и обработка ключей безопасности
 * 
 * @note    - Ключ сессии
 *          - Ключ подтверждения почты
 *          - Ключ подтверждения смены пароля
 */


const SECRET_KEY = "0123456789abcdef"



/**
 * @brief   Сгенерировать ключ сессии
 * 
 * @param   {Integer} id 
 * @param   {String}  passwordHash 
 * 
 * @returns Ключ сессии
 */
export async function GenerateSessionKey(id, passwordHash) {
    var jwt = require('jsonwebtoken');

    return jwt.sign({id: id}, `${passwordHash}.${SECRET_KEY}`);
}


/**
 * @brief   Декодировать ключ сессии
 * 
 * @param   {String} key 
 * 
 * @returns Данные ключа сессии: {id, iat}
 */
export async function DecodeSessionKey(key) {
    var jwt = require('jsonwebtoken');

    try {
        return jwt.decode(key);
    } catch(err) {
        return null;
    }
}


/**
 * @brief   Декодировать и верифицировать ключ сессии
 * 
 * @param   {String} key
 * @param   {String} passwordHash 
 * 
 * @returns Данные ключа сессии: {id, iat}
 */
export async function VerifySessionKey(key, passwordHash) {
    var jwt = require('jsonwebtoken');

    try {
        return jwt.verify(key, `${passwordHash}.${SECRET_KEY}`);
    } catch(err) {
        return null;
    }
}





/**
 * @brief   Сгенерировать ключ подтверждения почты
 * 
 * @param   {*} id
 *  
 * @returns Ключ подтверждения почты 
 */
export async function GenerateEmailConfirmKey(id) {
    var jwt = require('jsonwebtoken');

    return jwt.sign({id: id}, `email.${SECRET_KEY}`);
}


/**
 * @brief   Декодировать и верифицировать ключ подтверждения почты
 * 
 * @param   {String} key
 * 
 * @returns Данные ключа подтверждения почты: {id, iat}
 */
export async function VerifyEmailConfirmKey(key) {
    var jwt = require('jsonwebtoken');

    try {
        return jwt.verify(key, `email.${SECRET_KEY}`);
    } catch(err) {
        return null;
    }
}





/**
 * @brief   Сгенерировать ключ смены пароля
 * 
 * @param   {*} id
 *  
 * @returns Ключ смены пароля
 */
 export async function GenerateChangePasswordKey(id) {
    var jwt = require('jsonwebtoken');

    return jwt.sign({id: id}, `password.${SECRET_KEY}`);
}


/**
 * @brief   Декодировать и верифицировать ключ смены пароля
 * 
 * @param   {String} key
 * 
 * @returns Данные ключа подтверждения почты: {id, iat}
 */
export async function VerifyChangePasswordKey(key) {
    var jwt = require('jsonwebtoken');

    try {
        return jwt.verify(key, `password.${SECRET_KEY}`);
    } catch(err) {
        return null;
    }
}