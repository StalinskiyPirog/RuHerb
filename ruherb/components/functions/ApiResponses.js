import { RESPONSE_STATUS, RESPONSE_ERROR } from "./Enums"

/**
 * @brief   Ответ API: Успешно
 * 
 * @param   {object} a_payload - Полезная нагрузка
 * @returns object
 */
export function SuccessResponse(a_payload) {
    return {
        status: RESPONSE_STATUS.OK,
        payload: a_payload
    };
};


/**
 * @brief   Ответ API: Ошибка
 * 
 * @param   {RESPONSE_ERROR} a_error - Ошибка
 * @returns object
 */
export function ErrorResponse(a_error) {
    return {
        status: RESPONSE_STATUS.ERROR,
        error: a_error
    };
};
