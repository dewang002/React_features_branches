import React, {  useRef, useState } from 'react'

const App = () => {
  const [,setNumber] = useState({})
  const number = useRef(0)
  const handleClick = () =>{
    number.current-=1;
    setNumber({})
  }
  const handleAdd = () =>{
    number.current+=1;
    setNumber({})
  }
  return (
    <div className='h-screen gap-4 flex items-center justify-center'>
    <span onClick={handleClick} className=' decrease text-xl'>-</span>
    <h1 className='number'>{number.current}</h1>
    <span onClick={handleAdd} className=' increase text-xl'>+</span>
    </div>
  )
}

export default App