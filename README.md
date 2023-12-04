# Crypto-Price-API
Overview




This simple Node.js API provides a convenient way to fetch cryptocurrency stock prices using the CoinGecko API. It's designed to be easy to set up and use, making it a valuable tool for developers who need quick access to cryptocurrency pricing information.

##Features



Single Endpoint: The API exposes a single endpoint to fetch the stock price of a specified cryptocurrency.

##How It Works



The API is built using Node.js and Express. It makes use of the CoinGecko API to retrieve real-time cryptocurrency price data.

##Installation



To get started, follow these simple steps:

1. Clone the Repository:
git clone https://github.com/godspeedmc/Crypto-Price-API.git

2. Navigate to the Project Directory:
   
cd Crypto-Price-API


3. Install Dependencies:

npm install



##Usage

1.Run the API:



node app.js

The server will start on http://localhost:3000.

2. Fetch Cryptocurrency Price:

Open your browser or use a tool like cURL or Postman to make a GET request to:
http://localhost:3000/crypto-price/{symbol}
Replace {symbol} with the cryptocurrency symbol you want to fetch (e.g., bitcoin).

##Example:



http://localhost:3000/crypto-price/bitcoin

The API will respond with a JSON object containing the cryptocurrency symbol and its corresponding price in USD.

Example Response
{
  "symbol": "bitcoin",
  "price": 50000
}


Important Note



Ensure that you have Node.js and npm installed on your machine before running the API. Additionally, be mindful of the API usage limits imposed by the CoinGecko API.


