/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0x546d139a4a50588cf9d222979c8433f5ec80ae1365c67a0630f055f9bade1aff","balance":"1000000000000000000000"},{"privateKey":"0xbecb9c79ac6c2346affac5a7ff088306cddc13e38fc1c3bd5b152d1ac6704f9d","balance":"1000000000000000000000"},{"privateKey":"0x28791473b2c7d76d7022c28e2ba0adaeac243c687b762817adef0404e850611f","balance":"1000000000000000000000"},{"privateKey":"0xb82d3b9c8f969ba66d90fcd5caf6d0a74c0ee119fc845890ffc1a1c19d900d00","balance":"1000000000000000000000"},{"privateKey":"0x48a16c7cf158d5de8163b67964472488574f5097af93431e5094d9bb5aadea67","balance":"1000000000000000000000"},{"privateKey":"0x10acc131031b042b2974216d1c1f75c6f3075e098bd5e90064060e7d0e66e3bf","balance":"1000000000000000000000"},{"privateKey":"0x82fe6f87becfb56eace1446f2429bbfe1e1a07aa800aa664634b7557daf059c2","balance":"1000000000000000000000"},{"privateKey":"0x5bdcf89cbd791eb65aae4c05580f8fbf564dcbf29677f0a02b5cd2a789211137","balance":"1000000000000000000000"},{"privateKey":"0x2cfe994bafea2697ac248500e2e8caf03598286d6617b37b36d699e41bacdbbd","balance":"1000000000000000000000"},{"privateKey":"0x470d0aee8c0535a1fe58ad98c17c0af496458c3f9a7e58877a56b55a53d06541","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};