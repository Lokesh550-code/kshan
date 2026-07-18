import axios from "axios";

export default axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        accept: `application/json`,
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}` 
    }
})