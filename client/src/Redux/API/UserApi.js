import axios from "axios"



export default {
    user: {
        login: (data) => {
            return axios.post("/api/anmelden", {data: data}).then((x) => x.data);
        },
        register: (data) => {
            return axios.post("/api/register", {data: data}).then((x) => x.data)
        },
        forgetPassword: (data) => {
            return axios.post("/api/forgetpassword", {data: data}).then((x) => x.data)
        },
        resetPassword:(data) => {
            return axios.post("/api/resetpassword", {data: data}).then((x) => x.data)
        },
    }
}