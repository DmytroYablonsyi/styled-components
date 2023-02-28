import React from "react";
import { Box } from "./styled";

const CheckBox = ({text,value, handler}) => {
    return(
        <Box><input value={value} onChange={handler} type={"checkbox"}></input>{text}</Box>
    )
}

export default CheckBox