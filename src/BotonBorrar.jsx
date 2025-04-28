import React from 'react'

function BotonBorrar({borrarTodas}) {
  return (
    <button id="deleteButton" onClick={borrarTodas}>Delete All</button>

    )
}

export default BotonBorrar