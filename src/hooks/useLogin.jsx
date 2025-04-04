import { useAuth } from "../contexts/auth.context"
import { loginService } from "../services/loginService";

export const useLogin = (e,loginData) =>
{
    const {setAuthToken} = useAuth();
    
    const loginHandler = async (e,loginData) =>
    {
        console.log("inside login handler")
        console.log("login data",loginData)
        
        try{
            const response = await loginService(loginData.email,loginData.password)
            console.log("response",response)
        }
        catch(e)
        {
             return console.log("error",e)
        }
    }
    return {loginHandler}
}

