import axios from "axios"

export const fetchThings = async () => {
    const responseData = (await axios.get("http://localhost:5000/api/Things")).data
    console.log(responseData)
}