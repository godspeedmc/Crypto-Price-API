const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Define a route to fetch cryptocurrency stock prices
app.get('/crypto-price/:symbol', async (req, res) => {
  try {
    const symbol = req.params.symbol.toLowerCase();
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`;

    const response = await axios.get(apiUrl);
    const price = response.data[symbol].usd;

    res.json({ symbol, price });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
