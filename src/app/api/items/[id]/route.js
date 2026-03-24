import { ObjectId } from "mongodb";

const { dbConnect } = require("@/lib/dbConnect");

export const GET = async (req, { params }) => {
  const { id } = await params;
  const collection = await dbConnect();
  const data = await collection.findOne({
    id: Number(id),
  });
  return Response.json(data);
};

export const PATCH = async (req, { params }) => {
  const { id } = await params;
  const data = await req.json();
  const collection = await dbConnect();
  const filter = { _id: new ObjectId(id) };
  const updatedDoc = {
    $set: data,
  };
  const result = await collection.updateOne(filter, updatedDoc);
  return Response.json(result);
};

export const DELETE = async (req, { params }) => {
  const { id } = await params;
  const collection = await dbConnect();
  const result = await collection.deleteOne({ id: new ObjectId(id) });
  return Response.json(result);
};
