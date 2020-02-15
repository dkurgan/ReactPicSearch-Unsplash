import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -f82aFK2D5AyiUn4EO1rvE0Ejm23UQIBmMExmMRJJ5s'
    }
});
