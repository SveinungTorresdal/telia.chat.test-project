import Axios from 'axios';

const origin = Axios.create({
    baseUrl: 'https://edge.ace.teliacompany.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const requests = {
    
};

export default requests;
