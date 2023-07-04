import axios from 'axios'
const BaseURL = "http://localhost:5000/db-constructor"
const DBRequestService = {
    async getTables() {
        const response = await axios.get(`${BaseURL}/getTables`)
        return response.data;
    },
    async getColumns(tableName) {
        const response = await axios.get(`${BaseURL}/getColumns/${tableName}`)
        return response.data;
    },
    async getResTable(data) {
        const response = await axios.post(`${BaseURL}/makeResultTable`, data)
        return response.data;
    }
}

export default DBRequestService