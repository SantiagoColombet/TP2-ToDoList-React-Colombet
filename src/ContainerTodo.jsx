import React, {useState} from 'react'
import ContenedorBotones from './ContenedorBotones.jsx'
import Header from './Header.jsx'
import Scroll from './Scroll.jsx'

function ContainerTodo() {
  const [todo, setTodo] = useState([]);

  const tacharTarea = (id) => {
    setTodo(todo.map(task => {
      if (task.id === id) {
        return {
          ...task,
          fechaTachado: task.fechaTachado ? 0 : new Date().getTime()
        };
      }
      return task;
    }));
  };

  const borrarTodas = () => {
    setTodo([]);
  };

  const encontrarTareaMasRapida = () => {
    if (todo.length != 0)
    {
      const tareasCompletadas = todo.filter(task => task.fechaTachado);
      if (tareasCompletadas.length != 0)
      {
        tareasCompletadas.sort((a, b) => {
          const tiempoA = a.fechaTachado - a.fechaCreacion;
          const tiempoB = b.fechaTachado - b.fechaCreacion;
          return tiempoA - tiempoB;
        });
        const tareaMasRapida = tareasCompletadas[0];
        const tiempoEnMs = tareaMasRapida.fechaTachado - tareaMasRapida.fechaCreacion;
        alert(`La tarea más rápida fue: "${tareasCompletadas[0].nombre}" y tardo ${tiempoEnMs}`);
      }
    }
  }

  return (
    <section className="todo">
        <Header todoList={todo} settodoList={setTodo}/>
        <Scroll todoList={todo} tacharTarea={tacharTarea} />
        <ContenedorBotones borrarTodas={borrarTodas} encontrarTareaMasRapida={encontrarTareaMasRapida}  />
    </section>
  )
}

export default ContainerTodo