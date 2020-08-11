import axios from 'axios'

const apiClient = axios.create({
    baseURL: "http://sefaun.com/api",
    withCredentials: false,

})

export default {
    getziyaretci() {
        return apiClient.get('/ziyaretci/ziyaretci_info')
    }
}