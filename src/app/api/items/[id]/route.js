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
  const filter = { id: Number(id) };
  const options = { upsert: true };
  const updatedDoc = {
    $set: { data },
  };
  return Response.json(result);
};
