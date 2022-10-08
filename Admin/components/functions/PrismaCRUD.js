import { PrismaClient, Prisma } from "@prisma/client";
import { DecodeSessionKey, VerifySessionKey } from "./SecurityKeys";
import { RETAILER_ID_OFFSET } from "./Utils";

const prisma = new PrismaClient();

/* ==================================================================================== */
/* =================================== Пользователь =================================== */
/* ==================================================================================== */

/**
 * @brief   Создание новой пользовательской учётной записи
 * 
 * @returns Пользователь
 */
export async function CreateClient({ name, surname, email, phone, password }) {
  const client = await prisma.client.create({
    data: {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      password: password,
    },
  });
  return client;
}


/* -------------------------------- Поиск пользователя -------------------------------- */

/**
 * @brief   Поиск пользователя по айди
 * 
 * @returns Пользователь
 */
export async function GetClients({ }) {
  const client = await prisma.client.findMany({
  });
  return client;
}

/**
 * @brief   Поиск пользователя по айди
 * 
 * @returns Пользователь
 */
export async function FindClientById({ clientId }) {
  const client = await prisma.client.findUnique({
    where:  { id: clientId }
  });
  return client;
}

/**
 * @brief   Поиск пользователя по почте
 * 
 * @returns Пользователь
 */
export async function FindClientByEmail({ email }) {
  const client = await prisma.client.findUnique({
    where:  { email: email }
  });
  return client;
}

/**
 * @brief   Поиск пользователя по ключу сессии
 * 
 * @returns Пользователь
 */
export async function FindClientBySessionKey({ sessionKey }) {
  var decodedSessionData = await DecodeSessionKey(sessionKey);

  // Ошибка: Ошибка декодирования ключа => Битый ключ сессии
  if (decodedSessionData === null) {
    return null;
  }

  // Поиск пользователя по айди из ключа сессии
  var client = await prisma.client.findUnique({
    where:  { id: decodedSessionData.id }
  });

  // Ошибка: Пользователь не найден => Битый ключ сессии
  if (client === null) {
    return null;
  }

  var verifiedSessionData = await VerifySessionKey(sessionKey, client.password);

  // Ошибка: Ключ не прошёл проверку => Битый ключ сессии
  if (verifiedSessionData === null) {
      return null;
  }

  return client;
}


/* -------------------------- Изменение данных пользователя --------------------------- */

/**
 * @brief   Смена пароля пользователя
 * 
 * @returns Пользователь
 */
export async function ClientUpdatePassword({ clientId, newPassword }) {
  const client = await prisma.client.update({
    where:  { id: clientId },
    data:   { password: newPassword }
  })
  return client;
}

/**
 * @brief   Подтверждение почты пользователя
 * 
 * @returns Пользователь
 */
export async function ClientConfirmEmail({ clientId }) {
  const client = await prisma.client.update({
    where:  { id: clientId },
    data:   { emailConfirmed: true }
  })
  return client;
}

/**
 * @brief   Изменение данных пользователя
 * 
 * @returns Пользователь
 */
 export async function ClientEdit({ clientId, name, surname }) {
  const client = await prisma.client.update({
    where:  { id: clientId },
    data: {
      name: name,
      surname: surname
    }
  })
  return client;
}


/**
 * @brief   Подтверждение почты пользователя
 * 
 * @returns Пользователь
 */
export async function ClientDelete({ clientId }) {
  const client = await prisma.client.delete({
    where:  { id: clientId }
  })
  return client;
}





/* ==================================================================================== */
/* ===================================== Ритейлер ===================================== */
/* ==================================================================================== */

/**
 * @brief   Создание учётной записи ритейлера
 * 
 * @returns Ритейлер
 */
export async function CreateRetailer({ name, surname, patronymic, email, phone, companyName, city, mainCategoryId, password }) {
  const retailer = await prisma.retailer.create({
    data: {
      name:           name,
      surname:        surname,
      patrinymic:     patronymic,
      email:          email,
      phone:          phone,
      companyName:    companyName,
      city:           city,
      mainCategoryId: mainCategoryId,
      password:       password,
    },
  });
  return retailer;
}


/* --------------------------------- Поиск ритейлера ---------------------------------- */

/**
 * @brief   Поиск ритейлера по айди
 * 
 * @returns Ритейлер
 */
 export async function GetRetailers({ }) {
  const retailer = await prisma.retailer.findMany({ });
  return retailer;
}

/**
 * @brief   Поиск ритейлера по айди
 * 
 * @returns Ритейлер
 */
export async function FindRetailerById({ retailerId }) {
  const retailer = await prisma.retailer.findUnique({
    where: {
      id: retailerId,
    },
  });
  return retailer;
}

/**
 * @brief   Поиск ритейлера по почте
 * 
 * @returns Ритейлер
 */
export async function FindRetailerByEmail({ email }) {
  const retailer = await prisma.retailer.findUnique({
    where: {
      email: email,
    },
  });
  return retailer;
}

/**
 * @brief   Поиск ритейлера по компании
 * 
 * @returns Ритейлер
 */
export async function FindRetailerByCompany({ companyName }) {
  const retailer = await prisma.retailer.findUnique({
    where: {
      companyName: companyName,
    },
  });
  return retailer;
}

/**
 * @brief   Поиск ритейлера по номеру телефона
 * 
 * @returns Ритейлер
 */
export async function FindRetailerByPhone({ phone }) {
  const retailer = await prisma.retailer.findUnique({
    where: {
      phone: phone,
    },
  });
  return retailer;
}

/**
 * @brief   Поиск ритейлера по ключу сессии
 * 
 * @returns Ритейлер
 */
export async function FindRetailerBySessionKey({ sessionKey }) {
  var decodedSessionData = await DecodeSessionKey(sessionKey);

  // Ошибка: Ошибка декодирования ключа => Битый ключ сессии
  if (decodedSessionData === null) {
    return null;
  }

  // Поиск пользователя по айди из ключа сессии
  var retailer = await prisma.retailer.findUnique({
    where:  { id: decodedSessionData.id - RETAILER_ID_OFFSET }
  });

  // Ошибка: Пользователь не найден => Битый ключ сессии
  if (retailer === null) {
    return null;
  }

  var verifiedSessionData = await VerifySessionKey(sessionKey, retailer.password);

  // Ошибка: Ключ не прошёл проверку => Битый ключ сессии
  if (verifiedSessionData === null) {
      return null;
  }

  return retailer;
}

/**
 * @brief   Поиск ритейлера по айди
 * 
 * @returns Ритейлер
 */
 export async function EditRetailer({ retailerId, name, surname, patronymic, email, phone, companyName, city, mainCategoryId }) {
  const retailer = await prisma.retailer.delete({
    where: {
      id: retailerId
    },
    data: {
      name:           name,
      surname:        surname,
      patrinymic:     patronymic,
      email:          email,
      phone:          phone,
      companyName:    companyName,
      city:           city,
      mainCategoryId: mainCategoryId
    },
  });
  return retailer;
}

/* ---------------------------- Изменение данных ритейлера ---------------------------- */

/**
 * @brief   Смена пароля ритейлера
 * 
 * @returns Ритейлер
 */
export async function RetailerUpdatePassword({ retailerId, newPassword }) {
  const retailer = await prisma.retailer.update({
    where:  { id: retailerId },
    data:   { password: newPassword }
  })
  return retailer;
}

/**
 * @brief   Подтверждение почты ритейлера
 * 
 * @returns Ритейлер
 */
 export async function RetailerConfirmProfile({ retailerId }) {
  const retailer = await prisma.retailer.update({
    where:  { id: retailerId },
    data:   { confirmed: true }
  })
  return retailer;
}

/**
 * @brief   Подтверждение почты ритейлера
 * 
 * @returns Ритейлер
 */
export async function RetailerConfirmEmail({ retailerId }) {
  const retailer = await prisma.retailer.update({
    where:  { id: retailerId },
    data:   { emailConfirmed: true }
  })
  return retailer;
}

export async function DeleteRetailer({ retailerId }) {
  const deleteProducts = prisma.product.deleteMany({
    where: {
      retailerId: retailerId,
    },
  });

  const deleteRetailer = prisma.retailer.delete({
    where: {
      id: retailerId,
    },
  });

  const transaction = await prisma.$transaction([
    deleteProducts,
    deleteRetailer,
  ]);
  return transaction;
}



/* ==================================================================================== */
/* ====================================== Товар ======================================= */
/* ==================================================================================== */
const ProductInclude = {
  categories: true,
  images: true,
  _count: {
    select: {
      reviews: true,
      orders: true,
    }
  }
}


/**
 * @brief   Создание нового товара
 * 
 * @returns Товар
 */
export async function CreateProduct({
  title,
  amount,
  price,
  brand,
  country,
  expires,
  wayToUse,
  contain,
  description,
  storage,
  note,

  categoriesId,

  retailerId,

  imagesId
}) {
  let connectedCateroies = [];
  categoriesId.map((i) => {
    connectedCateroies.push({ id: i });
  });

  let connectedImages = [];
  imagesId.map((i) => {
    connectedImages.push({ id: i });
  });

  const product = await prisma.product.create({
    data: {
      title: title,
      price: price,
      amount: amount,
      brand: brand,
      country: country,
      categories: {
        connect: connectedCateroies,
      },
      retailer: {
        connect: { id: retailerId },
      },
      description: description,
      contain: contain,
      wayToUse: wayToUse,
      expires: expires,
      note: note,
      storage: storage,
      images: {
        connect: connectedImages,
      },
    },

    include: ProductInclude
  });
  return product;
}




/* ----------------------------------- Поиск товара ----------------------------------- */

export async function GetProducts({ }) {
  const product = await prisma.product.findMany({
    include: ProductInclude
  });
  return product;
}

/**
 * @brief   Поиск товара по айди
 * 
 * @returns Товар
 */
export async function FindProductById({ productId }) {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: ProductInclude
  });
  return product;
}

/**
 * @brief   Поиск товара по айди ритейлера
 * 
 * @returns Товар
 */
 export async function FindProductsByFilter({ filter, skip=0, take=0 }) {
  var req = {
    where: filter,
    include: ProductInclude
  }

  if (skip > 0) {
    req.skip = skip;
  }

  if (take > 0) {
    req.take = take;
  }

  const product = await prisma.product.findMany(req);
  return product;
}



/* ----------------------------- Изменение данных товара ------------------------------ */

/**
 * @brief   Редактирование товара
 * 
 * @returns Товар
 */
export async function EditProduct({ productId, data }) {
  data.visible = false;

  // На входе айди категорий, нужно преобразовать их в категории
  if (data.categoriesId !== undefined) {
    let connectedCateroies = [];
    data.categoriesId.map((i) => {
      connectedCateroies.push({ id: i });
    });

    data.categories = {set: connectedCateroies};
    delete data.categoriesId;
  }

  // На входе айди изображений, нужно преобразовать их в изображения
  if (data.imagesId !== undefined) {
    let connectedImages = [];
    data.imagesId.map((i) => {
      connectedImages.push({ id: i });
    });

    data.images = {set: connectedImages};
    delete data.imagesId;
  }

  const product = await prisma.product.update({
    where: {
      id: productId,
    },

    data: data,

    include: ProductInclude
  });
  return product;
}

/**
 * @brief   Изменение видимости товара
 * 
 * @returns Товар
 */
export async function SetProductVisible({ productId, visible }) {
  const product = await prisma.product.update({
    where: {
      id: productId,
    },

    data: {
      visible: visible
    },

    include: ProductInclude
  });
  return product;
}

export async function DecrementProductAmount({ productId, decrementN }) {
  const product = await prisma.product.update({
    where: {
      id: productId,
    },

    data: {
      amount: { decrement: decrementN }
    },

    include: ProductInclude
  });
  return product;
}

/**
 * @brief   Редактирование товара
 * 
 * @returns Товар
 */
export async function DeleteProduct({ productId }) {
  const product = await prisma.product.delete({
    where: {
      id: productId,
    }
  });
  return null;
}

/* ==================================================================================== */
/* ==================================== Категории ===================================== */
/* ==================================================================================== */


/* --------------------------------- Поиск категорий ---------------------------------- */

export async function CreateCategory({ name, keywords }) {
  const category = prisma.category.create({
    data: {
      name: name,
      keywords: keywords
    }
  });
  return category;
}

export async function GetCategories({ }) {
  const categories = prisma.category.findMany({
  });
  return categories;
}

export async function FindCategoriesByIds({ categoriesIds }) {
  const categories = prisma.category.findMany({
    where: {
      id: {in: categoriesIds}
    }
  });
  return categories;
}


export async function CategoryEdit({ categoryId, name, keywords }) {
  const categories = prisma.category.findMany({
    where: {
      id: categoryId
    },

    data: {
      name: name,
      keywords: keywords
    } 
  });
  return categories;
}

/* ==================================================================================== */
/* =================================== Изображения ==================================== */
/* ==================================================================================== */

export async function FindImagesByIds({ imagesIds }) {
  const images = prisma.productImage.findMany({
    where: {
      id: {in: imagesIds}
    }
  });
  return images;
}



/* ==================================================================================== */
/* ====================================== Отзывы ====================================== */
/* ==================================================================================== */
const ReviewInclude = {
  client: {
    select: {
      id: true,
      name: true,
      surname: true,
    }
  }
}

export async function CreateReview({ productId, clientId, title, text, rating }) {
  const review = await prisma.review.create({
    data: {
      productId:  productId,
      clientId:   clientId,
      title:      title,
      text:       text,
      rating:     rating
    },
    include: ReviewInclude
  });

  return review;
}




export async function FindReviewByReviewId({ reviewId }) {
  const reviews = prisma.review.findUnique({
    where: {
      id: reviewId
    },
    include: ReviewInclude
  });
  return reviews;
}

export async function FindReviewsByProductId({ productId, skip=0, take=0 }) {
  var req = {
    where: {
      productId: productId
    },
    include: ReviewInclude,
  }

  if (skip > 0) {
    req.skip = skip;
  }

  if (take > 0) {
    req.take = take;
  }

  const reviews = prisma.review.findMany(req);
  return reviews;
}



export async function UpdateReviewAnswer({ reviewId, answer }) {
  var date;
  if (answer !== null) {
    date = new Date;
  } else {
    date = null;
  }

  const review = await prisma.review.update({
    where: {
      id:   reviewId,
    },

    data: {
      retailerAnswer:   answer,
      answerCreatedAt:  date
    },

    include: ReviewInclude
  });

  return review;
}

export async function EditReview({ reviewId, title, text, rating }) {
  const review = await prisma.review.update({
    where: {
      id:   reviewId,
    },

    data: {
      title:        title,
      text:         text,
      rating:       rating,
      lastEditTime: new Date()
    },

    include: ReviewInclude
  });

  return review;
}

export async function DeleteReview({ reviewId }) {
  const review = await prisma.review.delete({
    where: {
      id:   reviewId,
    }
  });

  return review;
}




/* ==================================================================================== */
/* ====================================== Заказы ====================================== */
/* ==================================================================================== */
const OrderInclude = {
  products: {
    select: {
      productId: true,
      quantity: true,
      product: {
        select: {
          price: true
        }
      }
    }
  },
  delivery: {
    select: {
      address: true,
      statusCode: true
    }
  }
}


export async function CreateOrder({ clientId, address, products }) {
  let createProductsOnOrder = [];
  for (const product of products) {
    await DecrementProductAmount({
      productId:  product.productId,
      decrementN: product.quantity
    });

    createProductsOnOrder.push({
      productId:  product.productId,
      quantity:   product.quantity
    });
  }

  let createDelivery = {
    address: address
  }


  const order = await prisma.order.create({
    data: {
      clientId: clientId,
      products: { create: createProductsOnOrder },
      delivery: { create: createDelivery }
    },

    include: OrderInclude
  });
  return order;
}




export async function FindOrdersByClientId({ clientId, skip=0, take=0 }) {
  var req = {
    where: {
      clientId: clientId
    },

    include: OrderInclude
  }

  if (skip > 0) {
    req.skip = skip;
  }

  if (take > 0) {
    req.take = take;
  }

  const order = await prisma.order.findMany(req);
  return order;
}



/* ==================================================================================== */
/* ================================= Адреса доставки ================================== */
/* ==================================================================================== */


export async function CreateDeliveryAddress({ address, name }) {
  const delivery = await prisma.deliveryAddress.create({
    data: {
      address: address,
      name: name
    },
  });

  return delivery;
}



export async function GetDeliveryAddress({ }) {
  const delivery = await prisma.deliveryAddress.findMany({
  });

  return delivery;
}


export async function EditDeliveryAddress({ id, address, name }) {
  const delivery = await prisma.deliveryAddress.update({
    where: {
      id: id
    },
    data: {
      address: address,
      name: name
    }
  });

  return delivery;
}


export async function DeleteDeliveryAddress({ id }) {
  const delivery = await prisma.deliveryAddress.delete({
    where: {
      id: id
    }
  });

  return delivery;
}
































export async function FindClientByPhoneAndPass({ phone, pass }) {
  const client = await prisma.client.findUnique({
    where: {
      phone: phone,
      password: pass,
    },
  });
  return client;
}
export async function FindClientByMailAndPass({ mail, pass }) {
  const client = await prisma.client.findUnique({
    where: {
      mail: mail,
      password: pass,
    },
  });
  return client;
}

export async function GetWishlistById({ id }) {
  const wishlist = await prisma.client.findUnique({
    where: { id: id },
    select: { wishlist: true },
  });
  return wishlist;
}

export async function GetOrderslistById({ id }) {
  const orderlist = await prisma.client.findUnique({
    where: { id: id },
    select: { orders: true },
  });
  return orderlist;
}

export async function UpdateClient({ id, pass, phone, data }) {
  const client = await prisma.client.update({
    where: {
      id: id,
      phone: phone,
      password: pass,
    },
    data: data,
  });
  return client;
}
export async function DeleteClient({ id, phone, pass, email }) {
  const client = await prisma.client.delete({
    where: {
      id: id,
      phone: phone,
      password: pass,
      email: email,
    },
  });
  return client;
}

//!--------------------------------------------------------------

//?------------------------Часть товаров----------------


export async function DeleteProductById({ id }) {
  const product = prisma.product.delete({
    where: {
      id: id,
    },
  });
  return product;
}

export async function FindProductsByText({ text }) {
  const productList = await prisma.product.findMany({
    where: {
      OR: [
        {
          title: {
            search: text,
          },
          country: {
            search: text,
          },
          wayToUse: {
            search: text,
          },
          contain: {
            search: text,
          },
          brand: {
            search: text,
          },
          about: {
            search: text,
          },
        },
      ],
    },
    orderBy: {
      orders: {
        count: "asc",
      },
    },
  });
  return productList;
}

export async function FindProductsByFilters({
  text,
  onPage,
  page,
  priceGte,
  priceLte,
  brand,
  country,
  ratingLte,
  ratingGte,
  orderBy,
}) {
  let sort = {};
  switch (orderBy) {
    case "":
      sort = {
        _relevance: {
          fields: ["title", "about", "contain", "note"],
          search: "text",
          sort: "asc",
        },
      };
    case "title-asc":
      sort = { title: "asc" };
    case "title-desc":
      sort = { title: "desc" };
    case "price-asc":
      sort = { price: "asc" };
    case "price-desc":
      sort = { price: "desc" };
  }
  const product = await prisma.product.findMany({
    where: {
      OR: [
        {
          OR: [
            {
              title: {
                search: text,
              },
            },
            {
              contain: {
                search: text,
              },
            },
            {
              note: {
                search: text,
              },
            },
            {
              about: {
                search: text,
              },
            },
          ],
        },
        {
          price: {
            AND: [
              {
                lte: priceLte,
              },
              { gte: priceGte },
            ],
          },
        },
        { brand: brand },
        { country: country },
        { rating: { AND: [{ lte: ratingLte }, { gte: ratingGte }] } },
      ],
    },
    orderBy: sort,
    take: onPage,
    skip: page * onPage,
  });
  return product;
}

export async function UpdateProduct({ id, phone, pass, data }) {
  const product = await prisma.client.update({
    where: {
      id: id,
      retailer: {
        phone: phone,
        password: pass,
      },
    },
    data: data,
  });
  return product;
}

//!----------------------------------------------------------------------
//?-------------------Часть ритейлера-----------------------------------


export async function FindUniqueRetailerById({ uniqueField }) {
  const Retailer = await prisma.retailer.findUnique({
    where: {
      id: uniqueField,
    },
  });
  return Retailer;
}

export async function FindUniqueRetailerByMail({ mail, pass }) {
  const Retailer = await prisma.retailer.findUnique({
    where: {
      mail: mail,
      password: pass,
    },
  });
  return Retailer;
}

export async function UpdateUniqueRetailerById({ id, jsonObject }) {
  const updateRetailer = await prisma.retailer.update({
    where: {
      id: id,
    },
    data: jsonObject,
  });
  return updateRetailer;
}

//!-----------------Оформление покупки-----------------

export async function CreateOrder___({ clientId }) {
  const order = await prisma.order.create({
    data: {
      clientId: clientId,
      products: {
        create: {
          orderId: "viola@prisma.io",
          name: "Viola",
        },
      },
    },
  });
  return order;
}
