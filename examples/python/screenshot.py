import requests

API = "https://universal-pdf-screenshot-api.p.rapidapi.com"
headers = {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    "X-RapidAPI-Host": "universal-pdf-screenshot-api.p.rapidapi.com"
}

params = {"url": "https://example.com", "full_page": "true"}
r = requests.get(f"{API}/screenshot", headers=headers, params=params)

open("screenshot.png", "wb").write(r.content)
