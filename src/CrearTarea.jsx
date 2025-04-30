import React, { useState } from 'react'

function CrearTarea({ settodoList, todoList }) {
  const [valorInput, setValorInput] = useState("")

  const mandarTarea = () => {
    if (valorInput !== "") {
      const tarea = {
        id: todoList.length !== 0 ? todoList.length : 0,
        nombre: valorInput,
        fechaCreacion: Date.now(),
        fechaTachado: 0
      }
      settodoList([...todoList, tarea])
    }
  }

  return (
    <>
      <div className="input">
        <input
          type="text"
          className="input-field"
          id="todoInput"
          placeholder="Add a new todo"
          value={valorInput} 
          onChange={(e) => setValorInput(e.target.value)} 
        />
        <button className="btn" id="btn" onClick={mandarTarea}>Add</button>
      </div>
    </>
  )
}

export default CrearTarea