import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <Link href="/" passHref>
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/angebote" passHref>
        <StyledLink>Angebote</StyledLink>
      </Link>
      <Link href="/agb" passHref>
        <StyledLink>AGB</StyledLink>
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

  &.active {
    background-color: white;
  }
  &:hover {
    cursor: pointer;
    background-color: white;
  }
`;
