const axios = require("axios");
const colors = require("colors");
const { getSymbol, findKeyByValue } = require("../utils/symbol");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    if (this.apiKey === "noKey") {
      this.baseUrl = "https://api.coingecko.com/api/v3/simple/price";
      this.apiKey = "";
    } else {
      this.baseUrl = "https://pro-api.coingecko.com/api/v3/simple/price";
    }
  }
  async getPriceData(coinOption, curOption) {
    try {
      const res = await axios.get(
        `${this.baseUrl}?ids=${getSymbol(
          coinOption
        )}&vs_currencies=${curOption}`,
        {
          headers: {
            "X-CoinGecko-API-Key": this.apiKey,
          },
        }
      );
      let output = "";
      const entries = Object.entries(res.data);
      entries.forEach((coin) => {
        const sym = findKeyByValue(coin[0]);
        Object.entries(coin[1]).forEach(([currency, prc]) => {
          output += `Coin: ${coin[0].yellow} (${sym}) | Price: ${currency}:${prc} \n`;
        });
      });
      return output;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CryptoAPI;
