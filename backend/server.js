const express = require('express');
const path = require('path');
const axios = require('axios');
const API_KEY = require('../config');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/weather', async(req, res) => {
  const { city } = req.query;
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`)
    .then(data => {
      data.data.main.name = city;
      res.send(data.data.main);
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = app;