import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <Link href="/"  passHref>
        <StyledLink active={pathname==="/"}>Home</StyledLink>
      </Link>
      <Link href="/angebote" passHref >
        <StyledLink active={pathname==="/angebote"}>Angebote</StyledLink>
      </Link>
      <Link href="/inserieren" passHref>
        <StyledLink active={pathname==="/inserieren/create"}>Inserieren</StyledLink>
      </Link>
      <Link href="/agb" passHref>
        <StyledLink active={pathname==="/agb"}>AGB</StyledLink>
      </Link>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  background-color: lightblue;
  text-align: center;
  padding-top: 20px;
`;
const StyledLink = styled.a`
  all: unset;
  font-size: 1.5rem;
  font-family: monospace;
  padding: 10px;
  background-color: ${({ active }) => (active ? "white" : "lightblue")};
  margin: 5px;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: white;
  }
`;
