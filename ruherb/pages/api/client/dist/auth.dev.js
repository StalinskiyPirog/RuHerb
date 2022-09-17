"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Auth;

var _client = require("@prisma/client");

var prisma = new _client.PrismaClient();

function CreateClient(_ref) {
  var name, surname, mail, phone, password, client;
  return regeneratorRuntime.async(function CreateClient$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          name = _ref.name, surname = _ref.surname, mail = _ref.mail, phone = _ref.phone, password = _ref.password;
          _context.next = 3;
          return regeneratorRuntime.awrap(prisma.client.create({
            data: {
              name: name,
              surname: surname,
              mail: mail,
              phone: phone,
              password: password
            }
          }));

        case 3:
          client = _context.sent;
          return _context.abrupt("return", client);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function FindClientByPhoneAndPass(_ref2) {
  var phone, pass, client;
  return regeneratorRuntime.async(function FindClientByPhoneAndPass$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          phone = _ref2.phone, pass = _ref2.pass;
          _context2.next = 3;
          return regeneratorRuntime.awrap(prisma.client.findUnique({
            where: {
              phone: phone,
              password: pass
            }
          }));

        case 3:
          client = _context2.sent;
          return _context2.abrupt("return", client);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function FindClientByMailAndPass(_ref3) {
  var mail, pass, client;
  return regeneratorRuntime.async(function FindClientByMailAndPass$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          mail = _ref3.mail, pass = _ref3.pass;
          _context3.next = 3;
          return regeneratorRuntime.awrap(prisma.client.findUnique({
            where: {
              mail: mail,
              password: pass
            }
          }));

        case 3:
          client = _context3.sent;
          return _context3.abrupt("return", client);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function GetWishlistById(_ref4) {
  var id, wishlist;
  return regeneratorRuntime.async(function GetWishlistById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = _ref4.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap(prisma.client.findUnique({
            where: {
              id: id
            },
            select: {
              wishlist: true
            }
          }));

        case 3:
          wishlist = _context4.sent;
          return _context4.abrupt("return", wishlist);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function GetOrderslistById(_ref5) {
  var id, orderlist;
  return regeneratorRuntime.async(function GetOrderslistById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = _ref5.id;
          _context5.next = 3;
          return regeneratorRuntime.awrap(prisma.client.findUnique({
            where: {
              id: id
            },
            select: {
              orders: true
            }
          }));

        case 3:
          orderlist = _context5.sent;
          return _context5.abrupt("return", orderlist);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function UpdateClient(_ref6) {
  var id, pass, phone, data, client;
  return regeneratorRuntime.async(function UpdateClient$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          id = _ref6.id, pass = _ref6.pass, phone = _ref6.phone, data = _ref6.data;
          _context6.next = 3;
          return regeneratorRuntime.awrap(prisma.client.update({
            where: {
              id: id,
              phone: phone,
              password: pass
            },
            data: data
          }));

        case 3:
          client = _context6.sent;
          return _context6.abrupt("return", client);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
}

function DeleteClient(_ref7) {
  var id, phone, pass, email, client;
  return regeneratorRuntime.async(function DeleteClient$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          id = _ref7.id, phone = _ref7.phone, pass = _ref7.pass, email = _ref7.email;
          _context7.next = 3;
          return regeneratorRuntime.awrap(prisma.client["delete"]({
            where: {
              id: id,
              phone: phone,
              password: pass,
              email: email
            }
          }));

        case 3:
          client = _context7.sent;
          return _context7.abrupt("return", client);

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function Auth(_ref8) {
  var req = _ref8.req,
      res = _ref8.res;
}