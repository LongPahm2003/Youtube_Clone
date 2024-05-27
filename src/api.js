import axios from "axios";
console.log(process.env.YT_API_KEY);
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key:'AIzaSyCS9gMl3Gxuvpp0qy8SkmDuuB133O1tTTw'
    },
    // withCredentials: true,
})

export default request