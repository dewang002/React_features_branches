import React, { useEffect } from 'react'

const App = () => {

  
  const fetchData = async() => {
      const res = await fetch(`https://dummyjson.com/users/5/posts`)
      const data = await res.json()
      console.log(data)
      return data
  }
  
  useEffect(()=>{ 
    fetchData()
  })
  return (
    <div>

    </div>
  )
}

export default App