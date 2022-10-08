"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _callee;

var _Enums = require("../../components/functions/Enums");

var _ApiResponses = require("../../components/functions/ApiResponses");

var _Utils = require("../../components/functions/Utils");

var _SecurityKeys = require("../../components/functions/SecurityKeys");

var _cookie = require("cookie");

var REQUIRED_FIELDS = ["password"];
var ADMIN_ID = 1;

function _callee(req, res) {
  var fields, sessionKey, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("пришел запрос" + req.body); // Ошибка: Не POST запрос

          if (!(req.method !== 'POST')) {
            _context.next = 4;
            break;
          }

          res.status(400).json((0, _ApiResponses.ErrorResponse)(_Enums.RESPONSE_ERROR.WRONG_REQUEST_METHOD));
          return _context.abrupt("return");

        case 4:
          // // Ошибка: Тело запроса не JSON
          // if (typeof(req.body) !== "object") {
          //     res.status(400).json(ErrorResponse(RESPONSE_ERROR.INVALID_REQUEST_DATA));
          //     return;
          // }
          fields = req.body;
          console.log("В нем " + fields.password); // Ошибка: Отсутствуют необходимые поля

          if ((0, _Utils.CheckRequiredFields)(REQUIRED_FIELDS, fields)) {
            _context.next = 9;
            break;
          }

          res.status(400).json((0, _ApiResponses.ErrorResponse)(_Enums.RESPONSE_ERROR.INVALID_REQUEST_DATA));
          return _context.abrupt("return");

        case 9:
          if (!(fields.password !== process.env.ADMIN_PASSWORD)) {
            _context.next = 12;
            break;
          }

          res.status(400).json((0, _ApiResponses.ErrorResponse)(_Enums.RESPONSE_ERROR.WRONG_AUTH_DATA));
          return _context.abrupt("return");

        case 12:
          console.log("Ошибок не произошло "); // Генерируем ключ сессии

          _context.next = 15;
          return regeneratorRuntime.awrap((0, _SecurityKeys.GenerateSessionKey)(_Utils.ADMIN_ID_OFFSET - ADMIN_ID, fields.password));

        case 15:
          sessionKey = _context.sent;
          // Собираем ответ запроса
          response = {
            sessionKey: sessionKey
          };
          console.log("Ключ " + sessionKey);
          res.setHeader('Set-Cookie', (0, _cookie.serialize)("session-key", sessionKey, {
            path: "/",
            expires: new Date(Date.now() + 6000000)
          })).status(200).json((0, _ApiResponses.SuccessResponse)(response));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
}