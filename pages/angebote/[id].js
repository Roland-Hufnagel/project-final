import styled from "styled-components";
import { useRouter } from "next/router";
import { getAngebotById } from "../../services/angebotService";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const angebot = await getAngebotById(id);
  console.log("in SSR: ", angebot, id);
  return {
    props: { angebot: angebot },
  };
}

export default function Angebot({ angebot }) {
  console.log("!-!-!-->", angebot);
  return (
    <>
      <AngebotCard>
        <h2>{angebot.title}</h2><br/>
        <hr/><br/>
        <p>{angebot.description}</p><br/>
        <hr /><br/> 
        <p>Angebots-ID: {angebot.id}</p>
      </AngebotCard>
    </>
  );
}
const AngebotCard = styled.article`
  max-width: 400px;
  height: 300px;
  border: 2px solid black;
  background-color: #fffdd0;
  padding: 20px;
  text-align: center;
`;
