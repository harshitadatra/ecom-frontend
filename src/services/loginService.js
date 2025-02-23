import axios from "axios";
const url = ""
async function loginService(email, password) {
    try {
        const response = await axios.post(url, {
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
        console.log("LoginService: Error in Login", e)
    }
}
export { loginService }