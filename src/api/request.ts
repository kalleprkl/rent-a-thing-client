import axios, {Axios} from "axios"

let request: Axios | null

const getRequest = () => {
    if (!request) {
        request = axios.create({
            baseURL: "http://localhost:5000/api/"
        })
    }
    return request
}

export default getRequest()