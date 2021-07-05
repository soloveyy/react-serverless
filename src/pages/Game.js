import React, {useState, useEffect} from 'react'
import { StyledGame } from '../styled/StyledGame'

function Game() {
    const [score, setScore] = useState(0)
    let time

    useEffect(() => {
        time = new Date()
        const interval = setInterval(()=>{
            // setScore(score+1)
            let newTime = new Date()
            setScore(newTime-time)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [score])

    return (
        <StyledGame>
            <p>Score: {score}</p>
            <p>A</p>
            <p>{time}</p>
            <p>Time: 23.02.2020</p>
        </StyledGame>
    )
}

export default Game
