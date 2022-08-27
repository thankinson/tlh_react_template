import styled from "styled-components";

import { Login } from "./features/login";
import { LeftContent } from "./features/leftconentcontainer";
import { RightContent } from "./features/rightcontainerconten";

export const MainContent = () =>{

    return (

        <PageContent>

            {/* <Login /> */}
            <LeftContent />
            <RightContent />

        </PageContent>
    )
}

const PageContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 85vh;
`