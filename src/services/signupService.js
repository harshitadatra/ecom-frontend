
import axios from "axios";
import { API_URL } from "../utilities/constants";

async function signUpService(firstName, lastName, email, password) {
    try {
        const response = await axios.post(`${API_URL}/auth/signup`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        if (response.status === 200) {
            return response.data
        }
        else {
            throw new Error();
        }
    }
    catch (e) {
        console.log("Signupservice: error in signup")
    }
}
export { signUpService }