import React, {useState} from 'react'
import ContenedorBotones from './ContenedorBotones.jsx'
import Header from './Header.jsx'
import Scroll from './Scroll.jsx'

function ContainerTodo() {
  const [todo, setTodo] = useState([]);
  return (
    <section className="todo">
        <Header todoList={todo} settodoList={setTodo}/>
        <Scroll todoList={todo}  />
        <ContenedorBotones />
    </section>
  )
}

export default ContainerTodo