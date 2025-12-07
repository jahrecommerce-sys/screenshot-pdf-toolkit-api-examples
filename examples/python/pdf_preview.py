import requests

API = "https://universal-pdf-screenshot-api.p.rapidapi.com"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "universal-pdf-screenshot-api.p.rapidapi.com"
}

files = {"file": open("document.pdf", "rb")}
r = requests.post(f"{API}/pdf/preview", headers=headers, files=files)

open("preview.png", "wb").write(r.content)
