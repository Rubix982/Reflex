import API from '../API/API.js';
require('dotenv').config();

export const getClassrooms = async () => {
    try {
        const data = await API.getRequest(`${process.env.REACT_APP_API_URL}/classrooms`);
        return data;
    } catch (error) {
        throw new Error(`Error encountered while communication with server! Error is "${error.message}"`)
    };
};

export const postClassroom = async (__dataBlob) => {
    try {
        return await API.postRequest(`${process.env.REACT_APP_API_URL}/classrooms`, __dataBlob );
    } catch (error) {
        throw new Error(`Error encountered while communication with server! Error is "${error.message}"`)
    };
};