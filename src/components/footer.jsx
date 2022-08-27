import styled from "styled-components";

export const Footer = ()=>{

    return (
        <FooterDiv>
            <h5>Thomas Hankinson || <a href="https://github.com/thankinson">My GitHub repo</a></h5>
        </FooterDiv>
    )
}

const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 5vh;
`