import axios from "axios"



export default {
    sportArt: {
        sportArtHinzufugen: (data) => {
            return axios.post("/api/sportArtHinzufugen", {data: data}).then((x) => x.data);
        },
        //...
    }
}