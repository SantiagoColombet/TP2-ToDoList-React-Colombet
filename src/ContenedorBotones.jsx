import React from 'react'
import BotonBorrar from './BotonBorrar.jsx'
import BotonMinTarea from './BotonMinTarea.jsx'

function ContenedorBotones({borrarTodas, encontrarTareaMasRapida}) {
  return (
    <>
      <hr className="counter" />
      <div className="counter-container">
      <BotonBorrar  borrarTodas = {borrarTodas}/>
      <BotonMinTarea encontrarTareaMasRapida = {encontrarTareaMasRapida}/>
      </div>
    </>
    )
}

export default ContenedorBotones