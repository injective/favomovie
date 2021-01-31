import axios from "axios";

export default axios.create({
    baseURL: "http://www.omdbapi.com",
    responseType: "json"
});
//    imgURL: "http://img.omdbapi.com/?apikey=4433273e&"
