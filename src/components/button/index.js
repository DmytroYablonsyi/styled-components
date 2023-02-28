import React from "react";
import { Button } from "./styled";

const ButtonComponent = ({text,onSubmit}) => {
    return <Button onClick={onSubmit}>{text}</Button>;
};

export default ButtonComponent;
