import axios from 'axios';

const appAxios = axios.create({
    baseURL: "https://kcs-backend.secplavory.page" ,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers' : '*',
    }
});

export default appAxios