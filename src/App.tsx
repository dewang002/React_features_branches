import React, { useEffect, useState } from 'react'

const App = () => {
  const [val,setVal] = useState("Hello World")
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setVal("goodBuy world")
    },5000)
    return ()=> clearTimeout(timer)
  },[val])
  return (
    <div>{val}</div>
  )
}

export default App