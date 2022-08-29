const axios = require("axios");
const path = require("path");
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});

const subjects = ['sea','animals','people','cat','nature','city','fiction','transportation','birds','Group of people working','factory']


const getPictureService = async (keyWords) => {
    const randomIndex = Math.floor(Math.random()*subjects.length);
    keyWords = subjects[randomIndex]
    const options = {
        method: 'GET',
        url:  "https://api.pexels.com/v1/search"
        // url:  "https://api.pexels.com/v1/curated"

        ,
        params: {query: keyWords},
        headers: {
            "Authorization":process.env.API_KEY,

        }
    };
    return axios.request(options).then(function (response) {
        console.log('hello',response.data.photos)

        return response.data.photos
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = {getPictureService}