require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
// require("./tasks/block-number");
require("dotenv").config();
// require("hardhat-gas-reporter");
// require("solidity-coverage");

const GEORLI_RPC_URL = process.env.GEORLI_RPC_URL || "https://eth-georli";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key";
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY || "key";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GEORLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
        localHost: {
            url: "http://127.0.0.1:8545/",
            // accounts: thanks hardhat,
            chainId: 31337,
        },
    },
    // solidity: "0.8.8",
    solidity: {
        compilers: [
            {
                version: "0.5.8",
            },
            {
                version: "0.8.8",
            },
            {
                version: "0.6.12",
            },
            {
                version: "0.6.0",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COIN_MARKET_CAP_API_KEY,
        // token: "MATIC",
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
};
