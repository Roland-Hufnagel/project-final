import styled from "styled-components";

export default function Header(){
    return(
        <StyledHeader>
            <h2>Dies ist eine tolle Website</h2>

        </StyledHeader>
    )
}
const StyledHeader = styled.header`
width: 100%;
height: 4rem;
background-color: lightblue;
text-align: center;
`;