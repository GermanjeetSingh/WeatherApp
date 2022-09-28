require("dotenv").config();
const { Client } = require("@googlemaps/google-maps-services-js");

const GET_PLACE_REQ = (text) => {
  const client = new Client({});
  return client.textSearch({
    params: {
      key: process.env.GOOGLE_MAPS_API_KEY,
      query: text,
    },
  });
};

module.exports = {
  GET_PLACE_REQ,
};
