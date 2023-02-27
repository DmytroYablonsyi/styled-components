import React from "react";
import styled from "styled-components";

const Header = () => {
    const Head = styled.div`
        display:flex;
        flex-direction: column;
        align-items:center;
        width: 300px;
        margin:20px auto;
    `
    const Icon = styled.img` 
        width:30px;
        height:30px;
    `
    const Title = styled.h2`
        margin:5px;
    `
        return(
        <div>
            <Head>
                <Icon src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"></Icon>
                <Title>Sign in</Title>
            </Head>
        </div>
    )
}

export default Header