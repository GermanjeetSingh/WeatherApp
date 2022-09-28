require("dotenv").config();
const axios = require("axios").default;

const GET_WEATHER_REQ = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`;
  return axios.get(url);
};

module.exports = {
  GET_WEATHER_REQ,
};
