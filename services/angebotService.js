import { data } from "../components/data";
import dbConnect from "../lib/dbConnect";
import Offer from "../models/Offer";

// async function getAllAngebote() {
//   return data;
// }
async function getAllAngebote() {
  await dbConnect();
  const angebote = await Offer.find();
  console.log("in getAllAngebote", angebote);
  const sanitizedAngebote = angebote.map((angebot) => ({
    id: angebot.id,
    title: angebot.title,
    description: angebot.description,
  }));
  return sanitizedAngebote;
}
async function getAngebotById(id) {
  let result;
  data.map((angebot) => {
    console.log("-->", angebot.id, id);
    if (angebot.id === id) {
      console.log("------->", { ...angebot });
      result = {
        ...angebot,
      };
    }
  });
  return result;
}

export { getAllAngebote, getAngebotById };
