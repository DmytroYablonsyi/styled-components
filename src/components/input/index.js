import React from 'react';
import { Input } from './styled';

const InputComponent = ({type, placeholder, onChange, value}) => {
    return (
        <Input value={value} onChange={onChange} type={type} placeholder={placeholder} />
    )
}

export default InputComponent;