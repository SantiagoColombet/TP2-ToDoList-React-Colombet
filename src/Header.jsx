import React from 'react'
import CrearTarea from './CrearTarea'

function Header({todoList, settodoList}) {

  return (
    <>
        <h2>To-do list</h2>
        <CrearTarea settodoList={settodoList} todoList = {todoList}/>
    </>
  )
}

export default Header