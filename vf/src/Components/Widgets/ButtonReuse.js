import React from 'react'

function ButtonReuse({name, handleClick}) {
 
  return (
    <div>
        <button onClick={handleClick}>{name}</button>
      
    </div>
  )
}

export default ButtonReuse;
