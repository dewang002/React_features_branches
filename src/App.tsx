import React, { useEffect, useState } from 'react'

const category = [
  "Fruit",
  "Vegitable",
  "Sweets"
]

const items: Record<string, string[]> = {
  Fruit:["apple","orange","mango"],
  Vegitable:["broccli","cabage","pumpkin"],
  Sweets:["donuts","orio","ice-cream"]
}


function App() {

  const [categories, setCategories] = useState('')
  const [subcategories, setSubCategories] = useState('')
  const [isEnable, setIsEnable] = useState(false)
  useEffect(()=>{
    console.log(categories,subcategories)
  },[categories,subcategories])
  return (
   <>

   <select value={categories} onChange={(e)=>{
    setCategories(e.target.value)
    setSubCategories("")
    setIsEnable(true)
    }}>
     <option value="">value</option>
    {
      category.map((elem,index) => (
        <option key={index} value={elem} >{elem}</option>
      ))
    }
   </select>
    <br />

   <select id="" onChange={(e)=>setSubCategories(e.target.value)} value={subcategories} disabled={!isEnable}>
    <option value="">value</option>
    {isEnable && items[categories].map((item,index)=>(
      <option key={index} value={item}>{item}</option>
    ))}
   </select>
   </>
  )
}

export default App
