import { PrismaClient, Prisma } from "@prisma/client";
import Fuse from "fuse.js";

const prisma = new PrismaClient();
//!-------------------Часть покупателя---------------------------
export async function CreateClient({ name, surname, mail, phone, password }) {
  const client = await prisma.client.create({
    data: {
      name: name,
      surname: surname,
      mail: mail,
      phone: phone,
      password: password,
    },
  });
  return client;
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
export async function CreateProduct({
  title,
  price,
  amount,
  brand,
  country,
  categoriesId,
  retailerId,
  description,
  contain,
  wayToUse,
  expires,
  note,
  storage,
  images,
}) {
  let categoriesIds = [];
  categoriesId.map((i) => {
    categoriesIds.push({ id: i });
  });
  let imagesArray = [];
  images.map((i) => {
    imagesArray.push({ path: i.path, alt: i.alt });
  });
  const product = await prisma.product.create({
    data: {
      title: title,
      price: price,
      amount: amount,
      brand: brand,
      country: country,
      categories: {
        connect: categoriesIds,
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
        create: imagesArray,
      },
    },
  });
  return product;
}

export async function DeleteProductById({ id }) {
  const product = prisma.product.delete({
    where: {
      id: id,
    },
  });
  return product;
}

export async function FindProductById({ id }) {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      images: true,
      reviews: true,
    },
  });
  return product;
}

export async function EditProductById({ id, data }) {
  const product = await prisma.product.update({
    where: {
      id: id,
    },
    data: data,
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
          search: text,
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

export async function CreateRetailer({
  name,
  email,
  phone,
  logoPath,
  city,
  categoryListId,
  password,
}) {
  const Retailer = await prisma.retailer.create({
    data: {
      name: name,
      surname: surname,
      email: email,
      logo: logoPath,
      city: city,
      categoryList: categoryListId,
      phone: phone,
      password: password,
    },
  });
  return Retailer;
}

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
export async function DeleteRetailer({ id }) {
  const deleteProducts = prisma.product.deleteMany({
    where: {
      authorId: id,
    },
  });

  const deleteRetailer = prisma.retailer.delete({
    where: {
      id: id,
    },
  });

  const transaction = await prisma.$transaction([
    deleteProducts,
    deleteRetailer,
  ]);
  return transaction;
}
//!-----------------Оформление покупки-----------------

export async function CreateOrder({ clientId }) {
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
