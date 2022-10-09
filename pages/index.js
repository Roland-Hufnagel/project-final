import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Title>
        <h1>Gutes Geben</h1>
        <p>Eine Initiative von Roland Hufnagel und neue fische</p>
      </Title>
      <Background>
        <Image
          src="/assets/img/tangerine.jpg"
          alt="Schöne Fische"
          layout="responsive"
          width={3000}
          height={4000}
        />
      </Background>
    </>
  );
}

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;

  @media (max-width: 600px) {
    display: none;
  }
`;
const Title = styled.div`
  font-family: "Kalam";
  text-align: center;
  font-size: 1.3em;
`;
