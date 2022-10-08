import styled from "styled-components";

export default function Footer(){
    return(
        <StyledFooter>
            <h2>Dies ist eine tolle Website</h2>

        </StyledFooter>
    )
}
const StyledFooter = styled.footer`
width: 100%;
height: 4rem;
background-color: lightblue;
text-align: center;
`;