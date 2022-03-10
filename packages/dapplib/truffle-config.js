require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember coconut install basket success sudden'; 
let testAccounts = [
"0xa4d354af72aab80f2def935d85c564721f9bb046da9af6ae2d2736063df4e1c9",
"0x967ad23f6b7fe7395019af5b6dc87ebe6f9806a4ba272425bac6f501d37afb09",
"0xe12b4afd469ea619713747e0149641495ae96dfb2e472ed5c2618444effaf65b",
"0xa35cb353976588efe4db98d25b791c70ca23c4f83109fa26222b7c5d9e7f92aa",
"0x7f7b2cbb8f56dbc2acb8bf3a1a6b50c35ecf2825e1a5d7db5a0c3ab112b488b5",
"0x8369f282877eacf6e3beb78958b77fa58d7ebae7f82be1886099ea6a9264d4f0",
"0x9f00434be1a8db8d77892a60a75ce60a6b174056aae01a836d120d0880746344",
"0x10c141331d97b9c9f10f94cc39c5605f77383767df170f9926e46029dbcc0581",
"0x8481c5bb8815c56c5324b3a4492eebf35b5a9bc84910cb742e9a3e1e35ce6ced",
"0x383ceeabf0bfb9f29d2459713d5e6900b3d8db4d6304417164c6eb28068fae23"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


