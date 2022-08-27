import { React , useEffect  } from "react";
// import styled componants
import styled from "styled-components";

// imports for componants
import { Header } from "../components/header";
import { MainContent } from "../components/content";
import { Footer } from "../components/footer";

export const Home = () => {

    useEffect(() => {
        document.title = "Home";
      }, []);
    

    return (
        <MainContainerDiv>
            
            <Header />  {/* this is the nav and title import  */}
            
            
            <MainContent /> {/* Content will be here - login screen may bee added to allow for user settigs  */}
            
            
            <Footer /> {/* its a footer  */}



        </MainContainerDiv>
    )
}

const MainContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    `
