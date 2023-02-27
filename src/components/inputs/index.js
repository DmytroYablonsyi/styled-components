import React from "react";
import styled from "styled-components";

const Inputs = () => {
    const Form = styled.form`
        display:flex;
        align-items:flex-start;
        margin-left:8%;
        flex-direction:column;
    `
    const Input = styled.input`
        width:80%;
        margin-bottom: 20px;
        height:35px;
    `
    const Checkbox = styled.input`

    `
    const Label = styled.label`
    
    `
    return(
        <div>
           <Form>
                <Input type="email" placeholder ="email"></Input>
                <Input type="password" placeholder ="password"></Input>
                <Label><Checkbox type={"checkbox"}></Checkbox>Remember Me</Label>
           </Form>
        </div>
    )
}

export default Inputs