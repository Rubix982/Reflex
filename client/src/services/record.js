import API from '../API/API.js';
require('dotenv').config();

export const markAttendance = async (__objectBlob) => {
    if (!__objectBlob) {
        throw new Error('Required fields are empty')
    };

    try {
        return await API.postRequest(`${process.env.REACT_APP_API_URL}/attendance/`, {
            markingInformation: __objectBlob,
        });
    } catch (error) {
        throw new Error(`Error encountered while communication with server! Error is "${error.message}"`);
    }
};

export const getStudentAttendance = async (__id, __date) => {
    try {
        return await API.getRequest(`${process.env.REACT_APP_API_URL}/attendance/${__id}/${__date}`);
    } catch (error) {
        throw new Error(`Error encountered while communication with server! Error is "${error.message}"`)
    }
}