const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/CryptoAPI");
const colors = require("colors");

const check = {
  async price(cmd) {
    const coins = cmd.coin.split(", ");
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      const api = new CryptoAPI(key);

      const priceOutputData = await api.getPriceData(coins, cmd.cur);

      console.log(priceOutputData);
    } catch (error) {
      console.error(error.message.red);
    }
  },
};

module.exports = check;
