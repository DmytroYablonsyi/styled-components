import React from "react";
import Header from './header';
import Inputs from './input';
import styled from 'styled-components';

const SignIn = () => {

const Container = styled.div`
    width: fit-content;
    margin:auto;
    border:1px solid black;
`
    return(
        <Container>
        <Header/>
        <Inputs/>
        </Container>
    )
}

export default SignIn