const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const form = new FormData();
form.append("file", fs.createReadStream("document.pdf"));

axios.post(
  "https://universal-pdf-screenshot-api.p.rapidapi.com/pdf/preview",
  form,
  {
    responseType: "arraybuffer",
    headers: {
      ...form.getHeaders(),
      "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
      "X-RapidAPI-Host": "universal-pdf-screenshot-api.p.rapidapi.com",
    },
  }
).then(res => fs.writeFileSync("preview.png", res.data));
