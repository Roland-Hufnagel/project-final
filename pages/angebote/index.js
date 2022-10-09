import { getAllAngebote } from "../../services/angebotService";
import Card from "../../components/Card";


export async function getServerSideProps() {
  const angebote = await getAllAngebote();
  return {
    props: { angebote: angebote },
  };
}

export default function Angebote({ angebote }) {
  return (
    <>
      <h2>Hier gibts tolle Sachen</h2>
      {angebote.map((angebot) => {
        return <Card key={angebot.id} angebot={angebot} />;
      })}
    </>
  );
}
