import BalconyPlant from "@/db/models/BalconyPlant";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const balconyPlants = await BalconyPlant.find();
    response.status(200).json(balconyPlants);
  } else if (request.method === "POST") {
    try {
      const balconyPlantData = request.body;
      await BalconyPlant.create(balconyPlantData);

      response.status(201).json({ status: "Plant created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else {
    response.status(405).json({ message: "Method not allowed" });
  }
}
