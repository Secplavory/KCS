import axios from 'axios';

const appAxios = axios.create({
    baseURL: "https://kcs-backend.secplavory.page" ,
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers' : '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});

export default appAxios