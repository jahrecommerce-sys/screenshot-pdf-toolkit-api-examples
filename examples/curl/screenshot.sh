#!/bin/bash

curl -G "https://universal-pdf-screenshot-api.p.rapidapi.com/screenshot" \
  -d "url=https://example.com" \
  -d "full_page=true" \
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: universal-pdf-screenshot-api.p.rapidapi.com" \
  --output screenshot.png
