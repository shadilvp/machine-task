import React, { useContext, useState } from 'react'
import { Datacontext } from './ContextPage'
const Color = () => {
const {color , setColor} = useContext(Datacontext)
    const handleSubmitRed = (e) =>{
        setColor(e)
    }
console.log(color)
  return (
    <div>

      <button onClick={()=>handleSubmitRed("red")} >Red</button>
      <button onClick={()=>handleSubmitRed("green")}>green</button>
      <button onClick={()=>handleSubmitRed("yellow")}>yellow</button>
      <button onClick={()=>handleSubmitRed("orange")}>orange</button>
      <button>hello</button>
      
    </div>
  )

}

export default Color