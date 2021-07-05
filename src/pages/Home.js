import React from 'react'
import { Link } from 'react-router-dom'
import {StartGameButton} from "../styled/StyledHome"
import Game from './Game'

export default function Home() {
    return (
        <div>
            <h1>Hello from Home :)</h1>
            <StartGameButton to="/game">Start to playing!</StartGameButton>
        </div>
    )
}