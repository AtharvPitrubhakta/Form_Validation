import React, { useState } from 'react'
import './Form.css';

const Form = () => {
   
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    
    const [error, setError] = useState({
        email: false,
        password: false,
    })

    function changeHandler(event) {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }
    
    function submitHandler(event) {
        event.preventDefault()
        console.log(formData)

        setError({
            email: false,
            password: false,
        })

        const email_address = formData.email;
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email_address)) 
        {
            setError((prev) => ({
                ...prev,
                email: true,
            }))
        }

        const password = formData.password;
        if(!/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(password))
        {
            setError((prev) => ({
                ...prev,
                password: true,
            }))
        }

        console.log(error); 
    }
    

  return (
    <div className='login-form'>
        <form className='form-data'>
          <label>Email Address<sup className='star'>*</sup></label>
          <input 
            type = "email"
            name='email'
            onChange={changeHandler}
            placeholder='Enter email address'
          />
          <span className='error'>{error.email && "Please enter valid email address"}</span>

          <label>Password <sup className='star'>*</sup></label>
          <input 
            type = "password"
            name='password'
            onChange={changeHandler}
            placeholder='Enter password'
          />
          <span className='error'>{error.password && "Please enter valid password"}</span>

            <button  
                className='sign-btn'
                onClick={submitHandler}
            >
                Sign In
            </button>
        </form>
    </div>
    
  )
}

export default Form