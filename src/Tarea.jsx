import React from 'react'

function Tarea({element, isChecked, tacharTarea}) {
    return (
    <>
        <li id="todoList-${element.id}">
        <div className="todo-container">
        <p data-id="${element.id}">{element.nombre}</p>
        <input type="checkbox" className="todo-checkbox" id={'checkbox-' + element.id} onChange={() => tacharTarea(element.id)} checked={isChecked}/>    
        </div>
    </li>
    </>
  )
}

export default Tarea