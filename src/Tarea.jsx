import React from 'react'

function Tarea({ element, tacharTarea }) {
  const isChecked = !!element.fechaTachado;
  
  return (
    <>
      <li id={`todoList-${element.id}`}>
        <div className="todo-container">
          <p data-id={element.id} className={isChecked ? "disabled" : ""}>
            {element.nombre}
          </p>
          <input 
            type="checkbox" 
            className="todo-checkbox" 
            id={`checkbox-${element.id}`} 
            onChange={() => tacharTarea(element.id)} 
            checked={isChecked}
          />    
        </div>
      </li>
    </>
  )
}

export default Tarea