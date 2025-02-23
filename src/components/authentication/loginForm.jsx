 
 import { useState } from "react"
 import axios from "axios"
 export const LoginForm = () =>
 {
   const [formData,setFormData] = useState({
    email:"",
    password:""
   })

   const  changeHandler = (e)=>
   {
    const id = e.target.id;

    switch(id)
    {
        case "email":
            setFormData({...formData,email:e.target.value})
            break;
        case "password":
            setFormData({...formData,password:e.target.value})
            break;
        default:
            setFormData({...formData})          
    }

   }
    const loginHandler = () =>
    {
        console.log("button clicked")

        const url = "http://localhost:3000/auth/login"
        axios.post(url,formData).then(res => console.log(res.data)).catch(e =>{
            console.log("error happened")
            console.log(e)
        })

    }
    return <>
    {/* <div> this is a login form</div> */}
    <div className="form-input">
        <label htmlFor="email">Email</label>
        <input type="text" id="email"  onChange={changeHandler}/>
    </div>

    <div className="form-input">
        <label htmlFor="password">Password</label>
        <input type="text" id="password" onChange={changeHandler}/>
    </div>

    <button onClick={loginHandler}>Login</button>



    
    </>
 }