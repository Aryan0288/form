import React, { useState } from 'react'
import './FormCreate.css'
export default function FormCreate() {
    const [formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:''
    })

    function onChange(event){
        const {name,type,value,checked}=event.target;

        setFormData((prevState)=>{
            return{
                ...prevState,
                [name]:type==='checkbox' ? checked : value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(formData);
    }
  return (
    <div>
        <form className='container' onSubmit={submitHandler}>
            <label>First Name</label>
            <input 
            type='text' 
            name='firstName' 
            value={FormData.firstName}
            onChange={onChange}
            />

            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}
