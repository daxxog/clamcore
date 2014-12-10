var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('03223515'),
  addressVersion: 0x89,
  privKeyVersion: 133,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('35DB6998FB0F967BDAA9B5AE669988ADA9EC9897A32452A323D8B3E63C0C0000'),
    merkle_root: hex('96FF1913BB893B918E53FA3DFE3AB4E9CB6A6C48B0BDB8EBA6E453FD2AB310EF'),
    height: 0,
    nonce: 2054231,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1397512438,
    bits: 486604799,
  },
  dnsSeeds: [
    ''
  ],
  defaultClientPort: 31174
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('c4f1c0df'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('41245567CA6B9539D148AE4E591295F6F3EB2CA507EBCAFE523672145B130000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 1279100,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    ''
  ],
  defaultClientPort: 25714
};
