/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ALCHEMY_API_KEY = process.env.API_KEY;
const GOERLI_PRIVATE_KEY = process.env.PRIV_KEY;

module.exports = {
  solidity: "0.8.9",
  
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545",
      accounts: [GOERLI_PRIVATE_KEY] 
    }
  },
  etherscan:{
    apiKey: ALCHEMY_API_KEY
  }
};
