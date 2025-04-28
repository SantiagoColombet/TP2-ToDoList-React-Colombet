import React from 'react'
import BotonBorrar from './BotonBorrar.jsx'
import BotonMinTarea from './BotonMinTarea.jsx'

function ContenedorBotones({borrarTodas, encontrarTareaMasrapida}) {
  return (
    <>
      <hr className="counter" />
      <div className="counter-container">
      <BotonBorrar  borrarTodas = {borrarTodas}/>
      <BotonMinTarea encontrarTareaMasrapida = {encontrarTareaMasrapida}/>
      </div>
    </>
    )
}

export default ContenedorBotones