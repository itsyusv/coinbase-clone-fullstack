const express = require("express");
const axios = require("axios");

const router = express.Router();

// GET /api/crypto
router.get("/crypto", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1
        }
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching crypto data" });
  }
});

// GET /api/crypto/gainers
router.get("/crypto/gainers", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1
        }
      }
    );

    const sorted = response.data.sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
    );

    res.json(sorted);
  } catch (err) {
    res.status(500).json({ message: "Error fetching gainers" });
  }
});

// GET /api/crypto/new
router.get("/crypto/new", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/list"
    );

    res.json(response.data.slice(0, 10)); // simulate "new"
  } catch (err) {
    res.status(500).json({ message: "Error fetching new coins" });
  }
});

module.exports = router;