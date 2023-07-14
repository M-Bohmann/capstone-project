import dbConnect from "@/db/connect";
import BalconyPlant from "@/db/models/BalconyPlant";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const balconyPlant = await BalconyPlant.findById(id);
    if (!balconyPlant) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(balconyPlant);
  }

  if (request.method === "PUT") {
    const newBalconyPlantData = request.body;
    await BalconyPlant.findByIdAndUpdate(id, newBalconyPlantData);
    response.status(200).json({ status: "Plant updated" });
  }

  if (request.method === "DELETE") {
    await BalconyPlant.findByIdAndDelete(id);
    response.status(200).json({ status: `Plant successfully deleted.` });
  }
}
