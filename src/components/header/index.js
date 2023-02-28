import React from "react";
import { Head, Icon, Title } from './styled';

const Header = ({title}) => {
        return(
        <div>
            <Head>
                <Icon src="https://cdn-icons-png.flaticon.com/512/9068/9068751.png"></Icon>
                <Title>{title}</Title>
            </Head>
        </div>
    )
}

export default Header