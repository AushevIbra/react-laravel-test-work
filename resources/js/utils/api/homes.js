export default {
    get: (params = null) => axios.get('/api/homes', {params})
}
