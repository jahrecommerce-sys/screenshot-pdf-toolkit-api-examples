# 📸 Screenshot & PDF Toolkit API – Examples & Quick Start

This repository provides example code for the **Screenshot & PDF Toolkit API**, available on RapidAPI.

🔗 **API Hub Link:**  
https://rapidapi.com/mjahr96/api/universal-pdf-screenshot-api


The API offers:

- 📸 Full-page website screenshots  
- 📄 PDF merging (combine multiple PDF files)  
- 🖼 PDF preview (first page as PNG)  
- ⚡ Fast, reliable REST endpoints  
- 🔐 Fully secured using RapidAPI authentication  

---

# 🚀 Features

✔ Capture high-quality website screenshots  
✔ Merge multiple PDF documents  
✔ Generate a preview image from PDFs  
✔ Developer-friendly endpoints  
✔ Free plan available  
✔ Perfect for SaaS apps, automation & file processing workflows  

---

# 📦 Repository Structure

```
examples/
  curl/
    screenshot.sh
    pdf_preview.sh
    pdf_merge.sh
  python/
    screenshot.py
    pdf_preview.py
    pdf_merge.py
  node/
    screenshot.js
    pdf_preview.js
    pdf_merge.js
```

Each folder contains working examples for a specific language.

---

# 🔧 Usage

Before running any example, replace:

```
YOUR_RAPIDAPI_KEY
```

with your own API key from the RapidAPI dashboard.

---

# 🟦 cURL Examples

## 📸 Screenshot

```bash
curl -G "https://universal-pdf-screenshot-api.p.rapidapi.com/screenshot"   -d "url=https://example.com"   -d "full_page=true"   -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY"   -H "X-RapidAPI-Host: universal-pdf-screenshot-api.p.rapidapi.com"   --output screenshot.png
```

## 🖼 PDF Preview

```bash
curl -X POST "https://universal-pdf-screenshot-api.p.rapidapi.com/pdf/preview"   -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY"   -H "X-RapidAPI-Host: universal-pdf-screenshot-api.p.rapidapi.com"   -F "file=@document.pdf"   --output preview.png
```

## 📄 PDF Merge

```bash
curl -X POST "https://universal-pdf-screenshot-api.p.rapidapi.com/pdf/merge"   -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY"   -H "X-RapidAPI-Host: universal-pdf-screenshot-api.p.rapidapi.com"   -F "files=@file1.pdf"   -F "files=@file2.pdf"   --output merged.pdf
```

---

# 🐍 Python Examples

## Screenshot (screenshot.py)

```python
import requests

API = "https://universal-pdf-screenshot-api.p.rapidapi.com"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "universal-pdf-screenshot-api.p.rapidapi.com"
}

params = {"url": "https://example.com", "full_page": "true"}
r = requests.get(f"{API}/screenshot", headers=headers, params=params)

open("screenshot.png", "wb").write(r.content)
```

## PDF Preview (pdf_preview.py)

```python
import requests

API = "https://universal-pdf-screenshot-api.p.rapidapi.com"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "universal-pdf-screenshot-api.p.rapidapi.com"
}

files = {"file": open("document.pdf", "rb")}
r = requests.post(f"{API}/pdf/preview", headers=headers, files=files)

open("preview.png", "wb").write(r.content)
```

## PDF Merge (pdf_merge.py)

```python
import requests

API = "https://universal-pdf-screenshot-api.p.rapidapi.com"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "universal-pdf-screenshot-api.p.rapidapi.com"
}

files = [
    ("files", open("file1.pdf", "rb")),
    ("files", open("file2.pdf", "rb"))
]

r = requests.post(f"{API}/pdf/merge", files=files, headers=headers)
open("merged.pdf", "wb").write(r.content)
```

---

# 🧑‍💻 Node.js (Axios) Examples

## Screenshot (screenshot.js)

```js
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
```

## PDF Preview (pdf_preview.js)

```js
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
```

## PDF Merge (pdf_merge.js)

```js
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
```

---

# ⭐ Why This Repository Exists

This repository helps developers:

- Quickly integrate the API  
- Use ready-to-run examples  
- Build screenshot & PDF workflows  
- Understand multipart uploads and REST usage  

If you find this repo helpful, ⭐ star it on GitHub!

---

# 📬 Support

For help or questions, contact the API creator via the RapidAPI Messaging System.

