"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateClient = CreateClient;
exports.FindClientByPhoneAndPass = FindClientByPhoneAndPass;
exports.FindClientByMailAndPass = FindClientByMailAndPass;
exports.GetWishlistById = GetWishlistById;
exports.GetOrderslistById = GetOrderslistById;
exports.UpdateClient = UpdateClient;
exports.DeleteClient = DeleteClient;
exports.CreateProduct = CreateProduct;
exports.DeleteProductById = DeleteProductById;
exports.FindProductById = FindProductById;
exports.EditProductById = EditProductById;
exports.FindProductsByText = FindProductsByText;
exports.FindProductsByFilters = FindProductsByFilters;
exports.UpdateProduct = UpdateProduct;
exports.CreateRetailer = CreateRetailer;
exports.FindUniqueRetailerById = FindUniqueRetailerById;
exports.FindUniqueRetailerByMail = FindUniqueRetailerByMail;
exports.UpdateUniqueRetailerById = UpdateUniqueRetailerById;
exports.DeleteRetailer = DeleteRetailer;
exports.CreateOrder = CreateOrder;

var _client = require("@prisma/client");

var _fuse = _interopRequireDefault(require("fuse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var prisma = new _client.PrismaClient(); //!-------------------Часть покупателя---------------------------

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
} //!--------------------------------------------------------------
//?------------------------Часть товаров----------------


function CreateProduct(_ref8) {
  var title, price, amount, brand, country, categoriesId, retailerId, description, contain, wayToUse, expires, note, storage, images, categoriesIds, imagesArray, product;
  return regeneratorRuntime.async(function CreateProduct$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          title = _ref8.title, price = _ref8.price, amount = _ref8.amount, brand = _ref8.brand, country = _ref8.country, categoriesId = _ref8.categoriesId, retailerId = _ref8.retailerId, description = _ref8.description, contain = _ref8.contain, wayToUse = _ref8.wayToUse, expires = _ref8.expires, note = _ref8.note, storage = _ref8.storage, images = _ref8.images;
          categoriesIds = [];
          categoriesId.map(function (i) {
            categoriesIds.push({
              id: i
            });
          });
          imagesArray = [];
          images.map(function (i) {
            imagesArray.push({
              path: i.path,
              alt: i.alt
            });
          });
          _context8.next = 7;
          return regeneratorRuntime.awrap(prisma.product.create({
            data: {
              title: title,
              price: price,
              amount: amount,
              brand: brand,
              country: country,
              categories: {
                connect: categoriesIds
              },
              retailer: {
                connect: {
                  id: retailerId
                }
              },
              description: description,
              contain: contain,
              wayToUse: wayToUse,
              expires: expires,
              note: note,
              storage: storage,
              images: {
                create: imagesArray
              }
            }
          }));

        case 7:
          product = _context8.sent;
          return _context8.abrupt("return", product);

        case 9:
        case "end":
          return _context8.stop();
      }
    }
  });
}

function DeleteProductById(_ref9) {
  var id, product;
  return regeneratorRuntime.async(function DeleteProductById$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          id = _ref9.id;
          product = prisma.product["delete"]({
            where: {
              id: id
            }
          });
          return _context9.abrupt("return", product);

        case 3:
        case "end":
          return _context9.stop();
      }
    }
  });
}

function FindProductById(_ref10) {
  var id, product;
  return regeneratorRuntime.async(function FindProductById$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          id = _ref10.id;
          _context10.next = 3;
          return regeneratorRuntime.awrap(prisma.product.findUnique({
            where: {
              id: id
            },
            include: {
              images: true,
              reviews: true
            }
          }));

        case 3:
          product = _context10.sent;
          return _context10.abrupt("return", product);

        case 5:
        case "end":
          return _context10.stop();
      }
    }
  });
}

function EditProductById(_ref11) {
  var id, data, product;
  return regeneratorRuntime.async(function EditProductById$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          id = _ref11.id, data = _ref11.data;
          _context11.next = 3;
          return regeneratorRuntime.awrap(prisma.product.update({
            where: {
              id: id
            },
            data: data
          }));

        case 3:
          product = _context11.sent;
          return _context11.abrupt("return", product);

        case 5:
        case "end":
          return _context11.stop();
      }
    }
  });
}

function FindProductsByText(_ref12) {
  var text, productList;
  return regeneratorRuntime.async(function FindProductsByText$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          text = _ref12.text;
          _context12.next = 3;
          return regeneratorRuntime.awrap(prisma.product.findMany({
            where: {
              OR: [{
                title: {
                  search: text
                },
                country: {
                  search: text
                },
                wayToUse: {
                  search: text
                },
                contain: {
                  search: text
                },
                brand: {
                  search: text
                },
                about: {
                  search: text
                }
              }]
            },
            orderBy: {
              orders: {
                count: "asc"
              }
            }
          }));

        case 3:
          productList = _context12.sent;
          return _context12.abrupt("return", productList);

        case 5:
        case "end":
          return _context12.stop();
      }
    }
  });
}

function FindProductsByFilters(_ref13) {
  var text, onPage, page, priceGte, priceLte, brand, country, ratingLte, ratingGte, orderBy, sort, product;
  return regeneratorRuntime.async(function FindProductsByFilters$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          text = _ref13.text, onPage = _ref13.onPage, page = _ref13.page, priceGte = _ref13.priceGte, priceLte = _ref13.priceLte, brand = _ref13.brand, country = _ref13.country, ratingLte = _ref13.ratingLte, ratingGte = _ref13.ratingGte, orderBy = _ref13.orderBy;
          sort = {};

          switch (orderBy) {
            case "":
              sort = {
                _relevance: {
                  fields: ["title", "about", "contain", "note"],
                  search: "text",
                  sort: "asc"
                }
              };

            case "title-asc":
              sort = {
                title: "asc"
              };

            case "title-desc":
              sort = {
                title: "desc"
              };

            case "price-asc":
              sort = {
                price: "asc"
              };

            case "price-desc":
              sort = {
                price: "desc"
              };
          }

          _context13.next = 5;
          return regeneratorRuntime.awrap(prisma.product.findMany({
            where: {
              OR: [{
                OR: [{
                  title: {
                    search: text
                  }
                }, {
                  contain: {
                    search: text
                  }
                }, {
                  note: {
                    search: text
                  }
                }, {
                  about: {
                    search: text
                  }
                }]
              }, {
                price: {
                  AND: [{
                    lte: priceLte
                  }, {
                    gte: priceGte
                  }]
                }
              }, {
                brand: brand
              }, {
                country: country
              }, {
                rating: {
                  AND: [{
                    lte: ratingLte
                  }, {
                    gte: ratingGte
                  }]
                }
              }]
            },
            orderBy: sort,
            take: onPage,
            skip: page * onPage
          }));

        case 5:
          product = _context13.sent;
          return _context13.abrupt("return", product);

        case 7:
        case "end":
          return _context13.stop();
      }
    }
  });
}

function UpdateProduct(_ref14) {
  var id, phone, pass, data, product;
  return regeneratorRuntime.async(function UpdateProduct$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          id = _ref14.id, phone = _ref14.phone, pass = _ref14.pass, data = _ref14.data;
          _context14.next = 3;
          return regeneratorRuntime.awrap(prisma.client.update({
            where: {
              id: id,
              retailer: {
                phone: phone,
                password: pass
              }
            },
            data: data
          }));

        case 3:
          product = _context14.sent;
          return _context14.abrupt("return", product);

        case 5:
        case "end":
          return _context14.stop();
      }
    }
  });
} //!----------------------------------------------------------------------
//?-------------------Часть ритейлера-----------------------------------


function CreateRetailer(_ref15) {
  var name, email, phone, logoPath, city, categoryListId, password, Retailer;
  return regeneratorRuntime.async(function CreateRetailer$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          name = _ref15.name, email = _ref15.email, phone = _ref15.phone, logoPath = _ref15.logoPath, city = _ref15.city, categoryListId = _ref15.categoryListId, password = _ref15.password;
          _context15.next = 3;
          return regeneratorRuntime.awrap(prisma.retailer.create({
            data: {
              name: name,
              surname: surname,
              email: email,
              logo: logoPath,
              city: city,
              categoryList: categoryListId,
              phone: phone,
              password: password
            }
          }));

        case 3:
          Retailer = _context15.sent;
          return _context15.abrupt("return", Retailer);

        case 5:
        case "end":
          return _context15.stop();
      }
    }
  });
}

function FindUniqueRetailerById(_ref16) {
  var uniqueField, Retailer;
  return regeneratorRuntime.async(function FindUniqueRetailerById$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          uniqueField = _ref16.uniqueField;
          _context16.next = 3;
          return regeneratorRuntime.awrap(prisma.retailer.findUnique({
            where: {
              id: uniqueField
            }
          }));

        case 3:
          Retailer = _context16.sent;
          return _context16.abrupt("return", Retailer);

        case 5:
        case "end":
          return _context16.stop();
      }
    }
  });
}

function FindUniqueRetailerByMail(_ref17) {
  var mail, pass, Retailer;
  return regeneratorRuntime.async(function FindUniqueRetailerByMail$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          mail = _ref17.mail, pass = _ref17.pass;
          _context17.next = 3;
          return regeneratorRuntime.awrap(prisma.retailer.findUnique({
            where: {
              mail: mail,
              password: pass
            }
          }));

        case 3:
          Retailer = _context17.sent;
          return _context17.abrupt("return", Retailer);

        case 5:
        case "end":
          return _context17.stop();
      }
    }
  });
}

function UpdateUniqueRetailerById(_ref18) {
  var id, jsonObject, updateRetailer;
  return regeneratorRuntime.async(function UpdateUniqueRetailerById$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          id = _ref18.id, jsonObject = _ref18.jsonObject;
          _context18.next = 3;
          return regeneratorRuntime.awrap(prisma.retailer.update({
            where: {
              id: id
            },
            data: jsonObject
          }));

        case 3:
          updateRetailer = _context18.sent;
          return _context18.abrupt("return", updateRetailer);

        case 5:
        case "end":
          return _context18.stop();
      }
    }
  });
}

function DeleteRetailer(_ref19) {
  var id, deleteProducts, deleteRetailer, transaction;
  return regeneratorRuntime.async(function DeleteRetailer$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          id = _ref19.id;
          deleteProducts = prisma.product.deleteMany({
            where: {
              authorId: id
            }
          });
          deleteRetailer = prisma.retailer["delete"]({
            where: {
              id: id
            }
          });
          _context19.next = 5;
          return regeneratorRuntime.awrap(prisma.$transaction([deleteProducts, deleteRetailer]));

        case 5:
          transaction = _context19.sent;
          return _context19.abrupt("return", transaction);

        case 7:
        case "end":
          return _context19.stop();
      }
    }
  });
} //!-----------------Оформление покупки-----------------


function CreateOrder(_ref20) {
  var clientId, order;
  return regeneratorRuntime.async(function CreateOrder$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          clientId = _ref20.clientId;
          _context20.next = 3;
          return regeneratorRuntime.awrap(prisma.order.create({
            data: {
              clientId: clientId,
              products: {
                create: {
                  orderId: "viola@prisma.io",
                  name: "Viola"
                }
              }
            }
          }));

        case 3:
          order = _context20.sent;
          return _context20.abrupt("return", order);

        case 5:
        case "end":
          return _context20.stop();
      }
    }
  });
}