import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StartGameButton = styled(Link)`
    background-color: red;
    color: white;
    text-decoration: none;
    padding: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    border-radius: 5px;
    transition: all .3s ease-in-out;

    &:hover {
        transform: scale(2);
        background-color: tomato;
    }
`