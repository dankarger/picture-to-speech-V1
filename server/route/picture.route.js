const express = require('express');
const pictureRoute = express.Router();
const weatherController = require('../controller/weather.controller')

pictureRoute().get('/picture',weatherController.getWeather)
weatherRoute.get('/search',weatherController.getAutoComplete)

module.exports = weatherRoute;
