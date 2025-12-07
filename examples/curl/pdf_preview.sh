#!/bin/bash

curl -X POST "https://universal-pdf-screenshot-api.p.rapidapi.com/pdf/preview" \
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: universal-pdf-screenshot-api.p.rapidapi.com" \
  -F "file=@document.pdf" \
  --output preview.png
