import React, { useState } from 'react'
import ButtonReuse from '../Components/Widgets/ButtonReuse'

function Home() {
    const [count,setCount] = useState(0);

    const handleClick=()=>{
        setCount(count+1);

    }
  return (
    <div>
      <h1>Home</h1>
      <h2>{count}</h2>
     <ButtonReuse name={"Clicked in Home"} handleClick={handleClick}/>
    </div>
  )
}

export default Home
