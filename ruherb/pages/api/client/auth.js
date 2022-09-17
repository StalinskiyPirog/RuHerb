import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function CreateClient({ name, surname, mail, phone, password }) {
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

async function FindClientByPhoneAndPass({ phone, pass }) {
  const client = await prisma.client.findUnique({
    where: {
      phone: phone,
      password: pass,
    },
  });
  return client;
}
async function FindClientByMailAndPass({ mail, pass }) {
  const client = await prisma.client.findUnique({
    where: {
      mail: mail,
      password: pass,
    },
  });
  return client;
}

async function GetWishlistById({ id }) {
  const wishlist = await prisma.client.findUnique({
    where: { id: id },
    select: { wishlist: true },
  });
  return wishlist;
}

async function GetOrderslistById({ id }) {
  const orderlist = await prisma.client.findUnique({
    where: { id: id },
    select: { orders: true },
  });
  return orderlist;
}

async function UpdateClient({ id, pass, phone, data }) {
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
async function DeleteClient({ id, phone, pass, email }) {
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

export default function Auth({req,res}){
  
}