import React from 'react'
import Tarea from './Tarea.jsx'

function Scroll({ todoList, tacharTarea }) {
  return (
    <ul className="scroll" id="scroll">
      {todoList.map((element) => (
        <Tarea 
          key={element.id} 
          element={element} 
          tacharTarea={tacharTarea}
        />
      ))}
    </ul>
  )
}

export default Scroll