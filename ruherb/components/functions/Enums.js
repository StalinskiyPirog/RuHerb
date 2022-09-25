
/**
 * @brief   Статусы ответа API
 */
export const RESPONSE_STATUS = {
    OK:         "ok",
    WRANING:    "warning",
    ERROR:      "error"
};


/**
 * @brief   Ошибки API
 */
export const RESPONSE_ERROR = {
    WRONG_REQUEST_METHOD:               "wrong_request_method",             ///< Неправильный метод запроса     (прим: GET вместо POST)

    INVALID_REQUEST_DATA:               "invalid_request_data",             ///< Неправильные данные запроса    (Нет каких-то важных полей)
    EMAIL_ALREADY_REGISTRED:            "email_already_registred",          ///< Почта занята
    FAILED_TO_SEND_EMAIL:               "failded_to_send_email",            ///< Не удалось отправить письмо
    EMAIL_NOT_CONFIRMED:                "email_not_confirmed",              ///< Почта не была подтверждена
    WRONG_AUTH_DATA:                    "wrong_auth_data",                  ///< Неправильные данные авторизации

    INVALID_CONFIRM_EMAIL_KEY:          "invalid_confirm_email_key",        ///< Недействительный ключ подтверждения почты
    INVALID_SESSION_KEY:                "invalid_session_key",              ///< Недействительный ключ сессии
    INVALID_CHANGE_PASSWORD_KEY:        "invalid_change_password_key",      ///< Недействительный ключ смены пароля

    IMAGE_NOT_EXIST:                    "image_not_exist",                  ///< Изображение не существует
    CATEGORY_NOT_EXIST:                 "category_not_exist",               ///< Категория не существует
    ORDER_NOT_EXIST:                    "",                                 ///< Несуществующий заказ
    PRODUCT_NOT_EXIST:                  "product_not_exist",                ///< Несуществующий товар

    PRODUCT_LARGE_AMOUNT:               "",                                 ///< Большое количество товара
    PRODUCT_NO_RIGHTS_TO_EDIT:          "product_no_rights_to_edit",        ///< Нет прав на редактирование товара

    REVIEW_NOT_EXIST:                   "",                                 ///< Несуществующий отзыв
    REVIEW_EDIT_TIMEOUT:                "",                                 ///< Таймаут изменения отзыва (минут 30?)
    REVIEW_NO_RIGHTS_TO_EDIT:           "",                                 ///< Нет прав на изменение отзыва
    REVIEW_NO_RIGHTS_TO_ANSWER:         "",                                 ///< Нет прав на изменение отзыва
};


