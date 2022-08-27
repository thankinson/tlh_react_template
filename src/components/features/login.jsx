import styled from "styled-components";


export const Login = () =>{

    return (

        <LoginContainer>
            
            <p>Login</p>
            <p>User Name</p>
            <TextInput  placeholder="Enter User Name" type="text"></TextInput>
            <p>Password</p>
            <TextInput  placeholder="Enter Password" type="password"></TextInput>
            <p>Click to login</p>
            <LoginButton>Login</LoginButton>


        </LoginContainer>
    )
}

const LoginContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 50vh;
    border: solid 1px white;
`
const TextInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 10%;
    text-align: center;
`
const LoginButton = styled.button`
    width: 50%;
    height: 10%;
    text-align: center;
`