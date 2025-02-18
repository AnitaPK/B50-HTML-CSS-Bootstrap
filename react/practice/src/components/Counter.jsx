import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const [name, setName] = useState('wisdom')

function handleClickIncreament(){
    console.log(count)
    setCount((count)=>count = count+1)
    console.log(count)

}
const handleDecreament = () =>{
setCount((count)=>count = count-1)
}
  return (
    <div>
        <h3>{name}</h3>
        <button onClick={()=>setName('Wisdom Sprouts')}>Click me to change name</button>
      <p>counter:{count}</p>
      <button onClick={()=>{setCount(count+1)} }>Increament</button>
      <button onClick={handleClickIncreament}>By Function</button>
      <button onClick={()=>{setCount(count-1)}}>decreament</button>
      <button onClick={handleDecreament}>decreament By Function</button>

    </div>
  )
}

export default Counter
