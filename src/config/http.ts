import axios from 'axios';

const urlDefault = 'http://localhost:5000';

export const http = axios.create({
    baseURL: urlDefault
});