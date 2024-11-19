import React, { useContext, useState } from 'react'
import { Datacontext } from './ContextPage'
import Display from './Display'
const Color = () => {
    const { color, setColor } = useContext(Datacontext)
    const handleSubmitRed = (e) => {
        setColor(e)
    }
    console.log(color)
    return (
        <div className='input'>
            <button className='color' onClick={() => handleSubmitRed("red")} >Red</button>
            <button className='color' onClick={() => handleSubmitRed("green")}>green</button>
            <button className='color' onClick={() => handleSubmitRed("yellow")}>yellow</button>
            <button className='color' onClick={() => handleSubmitRed("orange")}>orange</button>
            <button className='color'>hello</button>
        </div>
    )

}

export default Color