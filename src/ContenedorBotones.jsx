import React from 'react'
import BotonBorrar from './BotonBorrar.jsx'
import BotonMinTarea from './BotonMinTarea.jsx'

function ContenedorBotones() {
  return (
    <>
      <hr className="counter" />
      <div className="counter-container">
      <BotonBorrar />
      <BotonMinTarea />
      </div>
    </>
    )
}

export default ContenedorBotones