import axios from "axios"



export default {
    user: {
        login: (data) => {
            return axios.post("/api/anmelden", {data: data}).then((x) => x.data);
        }
    }
}