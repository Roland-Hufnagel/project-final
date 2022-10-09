import { data } from "../components/data";

async function getAllAngebote() {
  return data;
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
