import React, { createContext, useState } from 'react'

export const Datacontext = createContext()
const ContextPage = ({children}) => {
    const [color, setColor] = useState("white")
  return (
    <div>
      <Datacontext.Provider value={{color, setColor}}>
        {children}
      </Datacontext.Provider>
    </div>
  )
}

export default ContextPage
