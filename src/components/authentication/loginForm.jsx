
import { useState } from "react"
import "./auth.css"
import { useLogin } from "../../hooks/useLogin"
export const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const { loginHandler } = useLogin();
    console.log("formData", formData)
    const changeHandler = (e) => {
        const id = e.target.id;
        switch (id) {
            case "email":
                setFormData({ ...formData, email: e.target.value })
                break;
            case "password":
                setFormData({ ...formData, password: e.target.value })
                break;
            default:
                setFormData({ ...formData })
        }

    }
    return <>
        <div className="auth-container">
            <div className="form-header">Login</div>
            <div className="form-subheader">Please enter your email and password</div>
            <div className="form-input">
                <input type="text" id="email" onChange={changeHandler} placeholder="Email" className="input-field" />
            </div>
            <div className="form-input">
                <input type="text" id="password" onChange={changeHandler} placeholder="Password" className="input-field" />
            </div>
            <div className="buttons">
                <button onClick={(e) => loginHandler(e, formData)} className="login-button">Continue</button>
            </div>
            <div>
                <span>Dont have an account? <button className="signup-button">Signup</button></span>
            </div>
            <div className="guest-credentials">
                <button className="guest-credentials-button">Use Guest Credentials</button>
            </div>
        </div>
    </>
}