import axios from "axios"
import { useEffect } from "react"

const useLocal = () => {
    const fetchData = async() => {
        const res = await axios.get(`https://dummyjson.com/products`)
        const data = await res.data.products
        localStorage.setItem("data",JSON.stringify(data))
    } 
    useEffect(()=>{
        fetchData()
    },[])
}

export default useLocal