const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    137: {
        name: "polygon",
        ethUsdPriceFeed: "0x19b0F0833C78c0848109E3842D34d2fDF2cA69BA", // address galat h
    },
    // 31337: {},
};

const DECIMAL = 8;
const INITIAL_ANSWER = 200000000000;

const developmentChains = ["hardhat", "localhost"];

module.exports = {
    networkConfig,
    developmentChains,
    DECIMAL,
    INITIAL_ANSWER,
};
