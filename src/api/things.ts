import request from "./request"
import { Thing } from "../Types"

export const fetchThings = async (): Promise<Thing[]> => {
    const responseData = (await request.get("Things")).data
    return responseData
}