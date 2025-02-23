import { useState } from "react"

export const SignupForm = () =>
{
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",

    })

    const changeHandler = (e) =>
    {
       const id = e.target.id;
       switch(id)
       {
        case "firstname":
            setFormData({...formData,firstName:e.target.value})
            break;
        case "lastname":
            setFormData({...formData,lastName:e.target.value})
            break;
         case "email":
            setFormData({...formData,email :e.target.value});
            break;
         case "password":
            setFormData({...formData,password:e.target.value});
            break;
          default:
            setFormData({...formData})


       }
    }
    const SignupHandler = () =>
    {
        console.log("signup button clicked")

        const url = "";
        axios.post(url,formData).then(res => console.log("response-->",res.data)).catch(e =>{
            console.log("error occured",e)
        })
    }
    return <>
    <div>This is a signup form</div>
    <div className="form-input">
        <label htmlFor="first-name">Firstname</label>
        <input type="text" id="firstname" placeholder="Enter Firstname" onChange={changeHandler}/>

    </div>
    <div className="form-input">
        <label>lastName</label>
        <input type="text" id="lastname" placeholder="Enter Lastname" onChange={changeHandler} />

    </div>
    <div className="form-input">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Enter email" onChange={changeHandler}/>
    </div>
    <div className="form-input">
        <label htmlFor="">password</label>
        <input typeof="text" id="password" placeholder="enter password" onChange={changeHandler}/>
    </div>
    
    <div>
        <button onClick={SignupHandler}>Signup</button>
    </div>
    
    </>
}