const symbol = {
  BTC: "Bitcoin",
  ETH: "Ethereum",
  XRP: "Ripple",
  BCH: "Bitcoin-Cash",
  LTC: "Litecoin",
  EOS: "EOS",
  USDT: "Tether",
  XLM: "Stellar",
  ADA: "Cardano",
  TRX: "TRON",
  XMR: "Monero",
  DASH: "Dash",
  BSV: "Bitcoin-SV",
  MIOTA: "IOTA",
  ETC: "Ethereum-Classic",
  NEO: "NEO",
  XEM: "NEM",
  XTZ: "Tezos",
  ZEC: "Zcash",
  MKR: "Maker",
  DOGE: "Dogecoin",
  BTG: "Bitcoin-Gold",
  ONT: "Ontology",
  VET: "VeChain",
  BAT: "Basic-Attention-Token",
  QTUM: "Qtum",
};

function findKeyByValue(value) {
  for (const key in symbol) {
    if (symbol.hasOwnProperty(key) && symbol[key].toLowerCase() === value) {
      return key;
    }
  }
  return null;
}

const getSymbol = (coins) => {
  const options = coins.map((coin) => symbol[coin]);
  return options.join(",");
};

module.exports = { getSymbol, findKeyByValue };
