import styled from "styled-components";


export const LeftContent = () =>{
    const testlist = [1,2,3,4,5,6,7,8]
    return(
        <ConatinerDiv>
            {testlist.map((list, index) => <TestBox key={index}><p>{list}</p></TestBox>)}
        </ConatinerDiv>
    )
}

const ConatinerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 20vw ;
    height: 100%;
    border: solid 1px white;
`
const TestBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 50px;
    border: white solid 1px;
`