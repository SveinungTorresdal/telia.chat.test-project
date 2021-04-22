import Axios from 'axios';

const origin = Axios.create({
    baseURL: 'https://payex.humany.net',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const requests = {
    categories: (source = '') => origin.get(`/${source}/categories`),
    guides: (source = '', query = '') => origin.get(`/${source}/guides?${query}`)
}

export default requests;
