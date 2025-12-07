#!/bin/bash

curl -X POST "https://universal-pdf-screenshot-api.p.rapidapi.com/pdf/merge" \
  -H "X-RapidAPI-Key: YOUR_RAPIDAPI_KEY" \
  -H "X-RapidAPI-Host: universal-pdf-screenshot-api.p.rapidapi.com" \
  -F "files=@file1.pdf" \
  -F "files=@file2.pdf" \
  --output merged.pdf
