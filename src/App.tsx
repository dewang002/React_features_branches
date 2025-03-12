import { memo, useCallback, useState } from "react"

const App = () => {
  const [fields, setFields] = useState([{ id: 1, value: '' }])

  const handleChange = useCallback((id:number,value:string) => {
  const updatedField =  fields.map(items => (
    items.id===id ? {...items, value:value} : items
  ))
  setFields(updatedField)
  }, [fields])

  const handleAdd = () => {
    const newFiled = {id: fields.length+1, value:''}
    setFields([...fields, newFiled])
  }

  const handleDelete = (id:number) => {
    const newdata = fields.filter(item => item.id !== id)
    if(newdata){
      setFields(newdata)
    }
  }

  return (
    <>
      {fields.map(text => (
        <div key={text.id}>
          <Input onchange={(e:any) => handleChange(text.id, e.target.value)} value={text.value} />
          <button onClick={()=>handleDelete(text.id)}>delete</button>
        </div>
      ))}
      <Button />
      <button onClick={handleAdd}>ADD</button>
    </>
  )
}

const Input = ({ onchange, value }) => {
  return (
    <>
      <input className="border" type="text" value={value} onChange={onchange} />
    </>
  )
}

const Button = memo(() => {
  console.log('btn compo')
  const [count, setCount] = useState(0)
  return (
    <button className="bg-red-300 p-3" onClick={() => setCount(prev => prev + 1)}>{count}</button>
  )
})

export default App