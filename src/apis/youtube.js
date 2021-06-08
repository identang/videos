import axios from "axios";

const KEY = "AIzaSyD56PTmbFW7ojWy1WwAHm2yOTmQStgc9mY";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:5,
        key: KEY,
        type: "videos"
    }
}); 