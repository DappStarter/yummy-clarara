require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture stomach renew magic equip include another army gather'; 
let testAccounts = [
"0xe6ce860d99f488b3403a690aace1dade56fc824862025a55d95f7fbca9ddf3b2",
"0xecf46368a8576abfaf0acfa99572e9e632e39fee3b6bb98591ec880decf0cf2c",
"0x0fad1166ff308ffa80c4f7168637ade11f4578ed922ba8b0b7ec1d4fbcb3349f",
"0x392246077443f0374515ab1a8f52837bbcf3551c733c82115e297cf87d119cba",
"0xa522dc977f9c24acf70ce229e8005103c3e623c25a255483f8a72ca1b7877bb2",
"0x194c3400872439bcd7b797192ee4193e7d42a64f50a55260f23ebdf9d23afb88",
"0x26a59c55efd07f02dd383486e28bd755936cc393d3f1578d02e62ffe944fa1d8",
"0xf8c230f428d33b093643b52138fa8f6220f229f0dab8195c632a9a8dba24a608",
"0x16d67b281d1f8c5a04c0f1b4f7e4d897b1e2a377cac8d32adcd68b71dc890bb2",
"0xfec6e06b4ca1ab21765f0bdfd5976baf7bbb6ed4b9c484de5985444500b7affa"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
