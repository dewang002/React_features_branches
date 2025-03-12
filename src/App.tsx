import axios from "axios"
import { useEffect, useRef, useState } from "react"

const App = () => {
  const [item, setItem] = useState('')
  const [data, setData] = useState([])
  const timerRef = useRef(null)

  const fetchData = async () => {
    const res = await axios.get('https://dummyjson.com/users')
    const data = await res.data.users

    const filtered = data?.filter(elem => elem.firstName.toLowerCase().includes(item.toLowerCase()))
    console.log(filtered)
    setData(filtered)
  }

  const handleChange = (e) => {
    let value = e.target.value
    setItem(value)
  }

  useEffect(() => {

    if (item.trim() !== "") {
      timerRef.current = setTimeout(() => {
        fetchData();
      }, 300);
    } else {
      setData([]);
    }

    // Cleanup function to clear the timer on unmount or before re-running the effect
    return () => clearTimeout(timerRef.current);
  }, [item]);

  return (
    <div className="min-h-screen w-full bg-black">
      <form className="max-w-md mx-auto flex">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input onChange={handleChange} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        </div>
        <button type="submit" className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </form>

      <div className="flex flex-wrap justify-center">
        {data?.map(elem => (
          <div className="h-96 w-60 bg-gray-300">
            <h1 className="text-center">{elem.firstName}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App