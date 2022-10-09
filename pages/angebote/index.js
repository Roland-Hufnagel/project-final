import { getAllAngebote } from "../../services/angebotService";
import Card from "../../components/Card";
import styled from "styled-components";

export async function getServerSideProps() {
  const angebote = await getAllAngebote();
  console.log("-->", angebote);
  return {
    props: { angebote: angebote },
  };
}

export default function Angebote({ angebote }) {
  return (
    <>
      <Head>Hier gibts tolle Sachen</Head>
      {angebote.map((angebot) => {
        return <Card key={angebot.id} angebot={angebot} />;
      })}
    </>
  );
}
const Head = styled.h2`
  text-align: center;
`;
