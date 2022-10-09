import styled from "styled-components";
import Link from "next/link";

export default function Card({ angebot }) {
  return (
    <>
      <Link href={`/angebote/${angebot.id}`}>
        <StyledLink>
          <StyledCard>
            <h3>{angebot.title}</h3>
            <p>{angebot.description}</p>
          </StyledCard>
        </StyledLink>
      </Link>
    </>
  );
}

const StyledCard = styled.article`
  padding: 15px;
  border: 2px solid black;
  border-radius: 0.5em;
  background-color: #fffdd0;
  margin: 10px auto;
  max-width: 400px;
`;
const StyledLink = styled.a`
&:hover{
    cursor: pointer;
}
`;