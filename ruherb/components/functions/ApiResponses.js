import { RESPONSE_STATUS, RESPONSE_ERROR } from "./Enums"

/**
 * @brief   Ответ API: Успешно
 * 
 * @param   {object} payload - Полезная нагрузка
 * @returns object
 */
export function SuccessResponse(payload=null) {
    return {
        status: RESPONSE_STATUS.OK,
        payload: payload
    };
};


/**
 * @brief   Ответ API: Предупреждение
 * 
 * @param   {RESPONSE_WARNING} warning - Предупреждение
 * @returns object
 */
 export function WarningResponse(warning, payload=null) {
    return {
        status: RESPONSE_STATUS.WRANING,
        error: warning,
        payload: payload
    };
};


/**
 * @brief   Ответ API: Ошибка
 * 
 * @param   {RESPONSE_ERROR} error - Ошибка
 * @returns object
 */
export function ErrorResponse(error, payload=null) {
    return {
        status: RESPONSE_STATUS.ERROR,
        error: error,
        payload: payload
    };
};
