import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  })
  const [formError, setFormError] = useState<Record<string,string>>({})
  const handleChange = ( e: React.ChangeEvent<HTMLInputElement>) :void =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const validateForm = ():boolean => {
    let isValid = true;
    const error: Record<string,string> = {};

    if(!formData.name || !formData.name.trim()){
      error.name = "name is not valid"
      isValid = false
    }
    const emailRejex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/ ;
    if(!formData.email || !emailRejex.test(formData.email)){
        error.email = "not a valid email"
        isValid = false 
    }

    if(!formData.password || formData.password.length<6){
      isValid = false
      error.password = "enter valid password"
    }

    setFormError(error)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
   if(validateForm()){
    console.log(formData)
   }
  }

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <input className='border' name={"name"} onChange={handleChange} type="text" />
      {formError.name && <p className="text-red-500">{formError.name}</p>}
      <input className='border' name={"email"} onChange={handleChange} type="email" />
      {formError.email && <p className="text-red-500">{formError.email}</p>}
      <input className='border' name={"password"} onChange={handleChange} type="password" />
      {formError.password && <p className="text-red-500">{formError.password}</p>}
      <button type='submit'>submit</button>
    </form>
  )
}

export default App