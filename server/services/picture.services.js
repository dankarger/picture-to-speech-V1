const axios = require("axios");
const path = require("path");
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});




const getPictureService = async (keyWords) => {
    const options = {
        method: 'GET',
        url: 'https://api.pexels.com/v1/',
        params: {q: keyWords},
        headers: {
            "Authorization: YOUR_API_KEY":process.env.API_KEY

        }
    };
    return axios.request(options).then(function (response) {
        return response.data
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = {getPictureService}