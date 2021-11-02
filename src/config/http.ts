import axios from 'axios';

const urlDefault = 'https://e-commerce-leo.herokuapp.com';

export const http = axios.create({
    baseURL: urlDefault
});