import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [upperCase,SetUpperCase] = useState(false)  
  const [lowerCase,SetLowerCase] = useState(false)  
  const [number,SetNumber] = useState(false)
  const [passLength,setPassLength] = useState(12)  
  const [random,setRandom] = useState('')

  const handleClick = () => {
    let validChar = ''
    const upperChar = 'ABCDEFGHIJKLMNOPQRSTVWXYZ'
    const lowerChar = 'abcdefghijklmnopqrstvwxyz'
    const numberChar = '0123456789'
    if(upperCase){
      validChar+=upperChar
    }
    if(lowerCase){
      validChar+=lowerChar
    }
    if(number){
      validChar+=numberChar
    }
    
   f
    let generatedChar = ''
    for(let i=0;i<passLength;i++){
      const randomIndex = Math.floor(Math.random()*validChar.length)
      generatedChar += validChar[randomIndex]
    }
    setRandom(generatedChar)
  }

  return (
    <div className='w-full h-screen bg-amber-200 p-10'>
      generate Password
      <div className='h-10  w-xl bg-white rounded text-lg'>
        {random && random}
      </div>
      <div className='flex flex-col items-start'>

        <label htmlFor="">
          password Length
          <input onChange={(e)=>setPassLength(parseInt(e.target.value))} className='bg-white border' type="number" />
        </label>
      <label>
      upperCase
      <input onChange={()=>SetUpperCase(!upperCase)} className='' checked={upperCase} type="checkbox" />
      </label>

      <label>
      lowerCase
      <input onChange={()=>SetLowerCase(!lowerCase)} className='' checked={lowerCase} type="checkbox" />
      </label>

      <label>
      number
      <input onChange={()=>SetNumber(!number)} className='' checked={number} type="checkbox" />
      </label>
      <button onClick={handleClick} type='submit' className='bg-blue-500 rounded'>submit</button>
      </div>
    </div>
  )
}

export default App