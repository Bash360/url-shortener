# URL shortening service



- /encode - Encodes a URL to a shortened URL
- /decode/{url_path} - Decodes a shortened URL to its original URL
- /statistic/{url_path} - Return basic stat of a short URL path.
- /{url_path} - Redirects to Original URL


# creators Mark Bashir

contributors:
Mark Bashir

# GITHUB REPO

- <https://github.com/Bash360/url-shortener>





# API Base URL

- <http://localhost:3000>




- javascript
- express


# HOW TO Run locally

- open your terminal or cmd
- run git clone <https://github.com/Bash360/url-shortener>
- run npm install to install dependencies
- run test with: npm run test
- to start application : npm run dev, server listens on port 3000


# Endpoints
- http://localhost:3000/encode post request body  should contain URL
- http://localhost:3000/decode/{url_path} get request 
- http://localhost:3000/statistic/{url_path} get request
- http://localhost:3000/{url_path} get request redirects to original URL
