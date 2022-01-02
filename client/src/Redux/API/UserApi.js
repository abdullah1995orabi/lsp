import axios from "axios"



export default {
    user: {
        login: (data) => {
            return axios.post("/api/anmelden", {data: data}).then((x) => x.data);
        },
        register: (data) => {
            return axios.post("/api/register", {data: data}).then((x) => x.data)
        }
    }
}