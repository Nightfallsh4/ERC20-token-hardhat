/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("hardhat-deploy")
require("dotenv").config()
require("@nomiclabs/hardhat-waffle");


GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "hardhat",
  networks: {
    hardhat:{
      chainId:31337,
      blockConfirmations :1 
    },
    goerli: {
      chainId:5,
      blockConfirmations: 2,
      url: GOERLI_RPC_URL,
      accounts: [ACCOUNT_PRIVATE_KEY]
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};
