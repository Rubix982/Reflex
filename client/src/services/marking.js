import API from '../API/API.js';
require('dotenv').config();

export const markAttendance = async (__objectBlob) => {
    if (!__objectBlob) {
        throw new Error('Required fields are empty')
    };

    try {
        const data = await API.postRequest(`${process.env.REACT_APP_API_URL}/attendance/`, {
            markingInformation: __objectBlob,
        });
        console.log(data);
        return data;
    } catch (error) {
        throw new Error(`Error encountered while communication with server! Error is "${error.message}"`);
    }
};
