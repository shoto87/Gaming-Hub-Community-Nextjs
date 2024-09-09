import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("gaming-hub");

  if (req.method === "POST") {
    const { title, content } = req.body;
    const newThread = await db.collection("threads").insertOne({ title, content });
    res.status(200).json(newThread);
  } else {
    res.status(405).end();
  }
};
