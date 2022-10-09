import dbConnect from "../../../lib/dbConnect";
import Offer from "../../../models/Offer";
import { getAllAngebote } from "../../../services/angebotService";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET":
      const angebote = await getAllAngebote();
      return response.status(200).json(angebote);
    case "POST":
      await dbConnect();
      const postData = JSON.parse(request.body);
      const newAngebot = await Offer.create(postData);
      return response
        .status(201)
        .json({ message: "Angebot erstellt", id: newAngebot.id });
    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}
