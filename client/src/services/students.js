import API from '../API/API.js';
require('dotenv').config();

export const getStudents = async (__classID) => {
    if (!__classID) {
        throw new Error('Required fields are empty')
    }

    try {
        return await API.getRequest(`${process.env.REACT_APP_API_URL}/people/${__classID}`)
    } catch (error) {
        throw new Error(`Error encountered while communication with server! Error is "${error.message}"`);
    }
};

export const postStudents = async (id, __name, __image) => {

    if (!id || !__name || !__image) {
        throw new Error(`Required fields are empty`);
    };

    try {
        return await API.postRequest(`${process.env.REACT_APP_API_URL}/people`, { id: id, name: __name, image: __image });
    } catch (error) {
        throw new Error(`Error encountered while communication with server! Error is "${error.message}"`);
    }
}