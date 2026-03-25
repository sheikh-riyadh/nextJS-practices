"use server";

import { dbConnect } from "@/lib/dbConnect";

export const getProducts = async () => {
  const collection = await dbConnect();
  const products = await collection.find({}).toArray();
  return products;
};
