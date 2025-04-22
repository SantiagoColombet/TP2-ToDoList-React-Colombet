import React from 'react'
import Tarea from './Tarea.jsx'

function Scroll({todoList}) {
    console.log(todoList)
    return (
    <ul className="scroll" id="scroll">
        {   
            todoList.map((element) => <Tarea element={element}/>)
        }
    </ul>
  )
}

export default Scroll