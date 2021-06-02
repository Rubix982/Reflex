import API from './../API/API.js';
require('dotenv').config();

export const getProfile = async () => {
    try {
        return await API.getRequest(`${process.env.REACT_APP_API_URL}/teacher/`);
    } catch (error) {
        throw new Error(`Error encountered while communicating with server! Error is "${error.message}"`);
    }
};