import axios from 'axios';

const urlDefault = 'https://devnology.herokuapp.com';

export const http = axios.create({
    baseURL: urlDefault
});