const axios = require("axios");
const fs = require("fs");

axios.get(
  "https://universal-pdf-screenshot-api.p.rapidapi.com/screenshot",
  {
    params: { url: "https://example.com", full_page: true },
    responseType: "arraybuffer",
    headers: {
      "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
      "X-RapidAPI-Host": "universal-pdf-screenshot-api.p.rapidapi.com",
    },
  }
).then(res => fs.writeFileSync("screenshot.png", res.data));
