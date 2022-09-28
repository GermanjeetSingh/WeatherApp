const express = require("express");
const { GET_PLACE_REQ } = require("./googlemaps");
const { GET_WEATHER_REQ } = require("./openweather");
const app = express();
app.use(express.json());

// Middleware to serve html
app.use("/index", express.static("views"));

// REST API ENDPOINTS
app.post("/api/v1/weather", async (req, res) => {
  const { lat, lng } = req.body;
  if (!lat || !lng) return res.sendStatus(400);
  try {
    const response = await GET_WEATHER_REQ(lat, lng);
    res.send(response.data);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.post("/api/v1/search", async (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) return res.sendStatus(400);
  try {
    const response = await GET_PLACE_REQ(text);
    res.send(response.data);
  } catch (error) {
    res.sendStatus(500);
  }
});

app
  .listen(3000, () => console.log("Server Started"))
  .on("error", () => console.log("Unable to start the server."));
