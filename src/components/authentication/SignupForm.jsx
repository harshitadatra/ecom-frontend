import { useState } from "react"
import "./auth.css"
import { useSignUp } from "../../hooks/useSignUp"

export const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",

    })
    const { signupHandler } = useSignUp();
    const changeHandler = (e) => {
        const id = e.target.id;
        switch (id) {
            case "firstname":
                setFormData({ ...formData, firstName: e.target.value })
                break;
            case "lastname":
                setFormData({ ...formData, lastName: e.target.value })
                break;
            case "email":
                setFormData({ ...formData, email: e.target.value });
                break;
            case "password":
                setFormData({ ...formData, password: e.target.value });
                break;
            default:
                setFormData({ ...formData })
        }
    }
    return <>
        <div className="auth-container">
            <div className="form-header">Signup</div>
            <div className="form-subheader">Please enter your details</div>
            <div className="form-input">
                <input className="input-field" type="text" id="firstname" placeholder="Enter Firstname" onChange={changeHandler} />
            </div>
            <div className="form-input">
                <input className="input-field" type="text" id="lastname" placeholder="Enter Lastname" onChange={changeHandler} />
            </div>
            <div className="form-input">
                <input className="input-field" type="text" id="email" placeholder="Enter email" onChange={changeHandler} />
            </div>
            <div className="form-input">
                <input className="input-field" typeof="text" id="password" placeholder="enter password" onChange={changeHandler} />
            </div>
            <div className="buttons">
                <button onClick={(e) => signupHandler(e, formData)} className="login-button">Signup</button>
            </div>
        </div>
    </>
}