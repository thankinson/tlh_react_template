import styled from "styled-components";

export const Header =()=>{

    return (
        <HeaderDiv>
            <TitleDiv><h2>A title here</h2></TitleDiv>

            <NavBar><h3>nav here</h3></NavBar>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 10vh;
`
const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 5vh;
`
const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 5vh;
`