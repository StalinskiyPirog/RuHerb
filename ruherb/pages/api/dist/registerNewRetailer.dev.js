"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _callee;

var _client = require("@prisma/client");

// eslint-disable-next-line import/no-anonymous-default-export
function _callee(req, res) {
  var prisma, nodemailer, transporter, mailData, Retailer;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          prisma = new _client.PrismaClient();
          nodemailer = require('nodemailer');
          transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.mail.ru',
            auth: {
              user: 'ru.herb.bot@mail.ru',
              pass: 'vLS7yUitBNJcuptUWZXs'
            },
            secure: true
          });
          mailData = {
            from: 'ru.herb.bot@mail.ru',
            to: 'ru.herb.bot@mail.ru',
            subject: "Message From ".concat(req.body.name),
            text: req.body.phone + " | Sent from: " + req.body.category,
            html: "<div>".concat(req.body.name, "</div><p>Sent from: ").concat(req.body.email, "</p>")
          };
          transporter.sendMail(mailData, function (err, info) {
            if (err) console.log(err);else console.log(info);
          });
          _context.next = 7;
          return regeneratorRuntime.awrap(prisma.retailer.create({
            data: {
              name: req.body.name,
              surname: req.body.surname,
              email: req.body.email,
              logo: "/design_parts/logo",
              city: req.body.city,
              categoryList: req.body.categoryListId,
              phone: req.body.phone,
              password: "1234567890"
            }
          }));

        case 7:
          Retailer = _context.sent;
          console.log(Retailer);
          res.send('success');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}