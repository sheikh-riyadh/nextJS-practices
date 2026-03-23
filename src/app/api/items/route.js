import { dbConnect } from "@/lib/dbConnect";

export const GET = async () => {
  const collection = await dbConnect("practices");
  const data = await collection.find({}).toArray();
  return Response.json(data);
};

export const POST = async (req) => {
  const data = await req.json();
  const collection = await dbConnect("practices")
  const result = await collection.insertOne(data)
  return Response.json(result)
};



