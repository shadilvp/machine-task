import React, { useContext } from 'react'
import { Datacontext } from './ContextPage'

const Display = () => {
  const { color } = useContext(Datacontext)


  return (
    <div className='output'>
      <div style={{ width: "100px", height: "100px", background: color == 'red' ? 'red' : color == 'green' ? 'green' : color == 'yellow' ? 'yellow' : color == 'orange' ? 'orange' : 'white' }}></div>
    </div>
  )
}

export default Display