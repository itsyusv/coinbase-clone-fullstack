const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/prices", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching crypto data" });
  }
});

module.exports = router;