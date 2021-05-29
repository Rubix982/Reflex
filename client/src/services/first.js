import API from '../API/API.js';
require('dotenv').config();

export const sendFirstLoginToBackend = async (__userInformationBlob) => {
    if (!__userInformationBlob.profilePicture) {
        throw new Error('Required fields are empty')
    }

    try {
        await API.postRequest(`${process.env.REACT_APP_API_URL}/first`,
            { userInformation: __userInformationBlob }
        )
    } catch (error) {
        throw new Error(`Error encountered while communication with server! Error is "${error.message}"`)
    }
};