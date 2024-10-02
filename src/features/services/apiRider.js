import axios from "axios"
import { getHeader } from "../../utils/headersUtils"

const base_url = "/api/admin/rider/"

export const getRiders = async () => {
    
    const options = getHeader()
    const res = await axios.get(base_url , options)
    return res.data
}

export const toggleRider = async (id) => {
    const obj = {user : id}
    const options = getHeader()
    const res = await axios.post(base_url + "toggle", obj, options)
    return res.data
}