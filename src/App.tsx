import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, editTodo, toggleTodo } from "./store/todoSlice"

const App = () => {
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todo.data)
  
  const handlClick = () => {
    let id = Math.floor(Math.random() * 5000)
    dispatch(addTodo({ id, value, description, done:false }))
    setValue('')
    setDescription('')
  }

  const handleToggle = (id) => {
    dispatch(toggleTodo(id))
    console.log('clicked')
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleEdit = (id) => {
    dispatch(editTodo(id))
  }

  return (
    <div>
      <div>
        <Input onChange={(e) => setValue(e.target.value)} value={value} />
        <Input onChange={(e) => setDescription(e.target.value)} value={description} />
        <Button className="p-2 bg-sky-400 text-white rounded" onClick={handlClick} >submit</Button>
      </div>
      <div className="h-100 w-xl bg-sky-900 overflow-y-scroll rounded">
        {
          todo?.map(elem => {
            return <div key={elem} className="min-h-20 w-full my-4 bg-sky-300">
              <h1 className={`${elem.done && 'line-through'}`}>{elem.value}</h1>
              <h1 className={`${elem.done && 'line-through'}`}>{elem.description}</h1>
              <Button onClick={()=>handleToggle(elem.id)} className={`p-2 ${elem.done ? 'bg-green-700' : 'bg-red-700'} text-white mr-4`} >done</Button>
              <Button onClick={()=>handleEdit(elem.id)} className={`p-2 text-white mr-4`} >edit</Button>
              <Button onClick={()=>handleDelete(elem.id)} className={`p-2 bg-red-700 text-white`} >delete</Button>
            </div>
          })
        }
      </div>
    </div>
  )
}

const Input = ({ onChange, value }) => {
  return <input onChange={onChange} value={value} placeholder="add task . . . " className="border w-sm" type="text" />
}
const Button = ({ onClick, children, className }) => {
  return <button className={className} onClick={onClick}>{children}</button>
}

export default App