import { CreateProduct } from "@/components/functions/PrismaCRUD";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const result = await CreateProduct({
    title: "title",
      price: 123,
      amount: 10,
      brand: "brand",
      country: "country",
      madeOf: "madeOf",
      expires: "expires",
      containmentCondition: "containmentCondition",
      wayToUse: "wayToUse",
      contain: "contain",
      about: "about",
      storage: "storage",
      notice: "notice",
      retailerId:1,
  });
  res.json(result);
}
