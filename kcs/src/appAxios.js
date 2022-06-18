import axios from 'axios';

const appAxios = axios.create({
  baseURL: 'https://kcs-backend.secplavory.page',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*',
  },
});

const multipartAxios = axios.create({
  baseURL: 'https://kcs-backend.secplavory.page',
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Headers': '*',
  },
});

export default appAxios;
export { multipartAxios };
