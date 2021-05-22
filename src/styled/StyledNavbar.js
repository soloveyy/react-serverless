import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    width: 100%;
    height: 50px;
    background-color: rosybrown;
`

export const StyledNavbarItems = styled.ul`
    display: flex;
    list-style-type: none;
    text-decoration: none;  
`

export const StyledNavbarItem = styled.li`
    padding-right: 20px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        color:red;
        transition: ease-in 100ms;
    }
`