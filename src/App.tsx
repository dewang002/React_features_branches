import { useState } from "react"



const App = () => {
  const [dark, setDark] = useState(false)
  return (
    <div className={dark&&'dark'}>
    <div  className="bg-white  h-screen w-full dark:bg-black  px-6 py-8 ring shadow-xl ring-gray-900/5">
  <div>
    <span onClick={() => setDark(prev=>!prev)}  className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
      <svg  className="h-6 w-6 stroke-white">
        </svg>
        </span>
  </div>
  <h3  className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
  <p  className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
        </div>
  )
}

export default App