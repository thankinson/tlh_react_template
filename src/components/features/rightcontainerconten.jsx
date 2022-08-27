import styled from "styled-components";


export const RightContent = () =>{
    const testlist = [1,2,3,4,5,6,7,8,9,10]
    return(
        <ConatinerDiv>
            {testlist.map((list, index) => <TestBox key={index}><p>{list}</p></TestBox>)}
        </ConatinerDiv>
    )
}

const ConatinerDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 75vw ;
    height: 100%;
    border: solid 1px white;
`
const TestBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border: white solid 1px;
`