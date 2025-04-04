import { signUpService } from "../services/signupService"

export const useSignUp = () => {

    const signupHandler = async (e, signupData) => {
        console.log(" this is signup handler hook signuphandler")
        try {
            const response = await signUpService(signupData.firstName, signupData.lastName, signupData.email, signupData.password)
            console.log("response", response)

        }
        catch (e) {
            return console.log("error", e)
        }
    }

    return { signupHandler }
}