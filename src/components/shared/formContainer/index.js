import React from 'react';
import { Container } from './styled';
import Header from '../../header';
import Footer from '../../footer';

const FormContainer = ({children, title}) => {
    return (
        <Container>
            <Header title={title} />
            {children}
            <Footer />
        </Container>
    )
}

export default FormContainer;