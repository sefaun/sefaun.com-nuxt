import axios from 'axios'

const apiClient = axios.create({
    baseURL: "http://sefaun.com/api",
    withCredentials: false,

})

export default {
    addemail(obj) {
        return apiClient.post(`/email/addemail`, obj)
    },
    getemail() {
        return apiClient.get('/email/getemail')
    }
}