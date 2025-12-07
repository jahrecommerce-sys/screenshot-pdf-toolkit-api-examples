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

r = requests.post(f"{API}/pdf/merge", headers=headers, files=files)

open("merged.pdf", "wb").write(r.content)
