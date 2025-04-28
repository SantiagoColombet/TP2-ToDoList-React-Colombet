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
          const tiempoA = a.fechaTachado - a.fechaCreacion.getTime();
          const tiempoB = b.fechaTachado - b.fechaCreacion.getTime();
          return tiempoA - tiempoB;
        });
        alert(`La tarea más rápida fue: "${tareasCompletadas[0].nombre}"`);
      }
      alert(`No hay tareas tachadas`);
    }
    alert(`No hay tareas`);
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