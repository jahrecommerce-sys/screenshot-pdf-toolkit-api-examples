const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const form = new FormData();
form.append("files", fs.createReadStream("file1.pdf"));
form.append("files", fs.createReadStream("file2.pdf"));

axios.post(
  "https://universal-pdf-screenshot-api.p.rapidapi.com/pdf/merge",
  form,
  {
    responseType: "arraybuffer",
        headers: {
      ...form.getHeaders(),
      "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
      "X-RapidAPI-Host": "universal-pdf-screenshot-api.p.rapidapi.com",
    },
  }
).then(res => fs.writeFileSync("merged.pdf", res.data));
