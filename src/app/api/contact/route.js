import { dbConnect } from "@/lib/dbConnect";

export const POST = async (req) => {
  const data = await req.json();
  const collection = await dbConnect("user");
  const res = await collection.insertOne(data);
  return Response.json({ res });
};



