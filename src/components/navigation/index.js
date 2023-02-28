import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './styled'
import { linkStyle } from './styled'

export const Navs = ({text,link}) => {
    return(
        <Nav>
            <Link to={link} style={linkStyle}>{text}</Link>
        </Nav>
    )
}
