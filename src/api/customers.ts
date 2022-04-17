import request from "./request"
import { Customer } from "../types"

export const fetchCustomers = async (): Promise<Customer[]> => {
    const responseData = (await request.get("Customers")).data
    return responseData
}