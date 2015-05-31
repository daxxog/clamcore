Clamcore
=======

[![NPM Package](https://img.shields.io/npm/v/clamcore.svg?style=flat-square)](https://www.npmjs.org/package/clamcore)
[![Build Status](https://img.shields.io/travis/daxxog/clamcore.svg?branch=dev-1&style=flat-square)](https://travis-ci.org/daxxog/clamcore)
[![Coverage Status](https://coveralls.io/repos/daxxog/clamcore/badge.svg?branch=dev-1)](https://coveralls.io/r/daxxog/clamcore?branch=dev-1)


A pure and powerful JavaScript CLAM library.

## Principles

CLAM is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the CLAM network allows for highly resilient clam infrastructure, and the developer community needs reliable, open-source tools to implement clam apps and services.

## Get Started

```
npm install clamcore
```

Using it in Node.js:

```javascript
var clamcore = require('clamcore');

assert(clamcore.Address.isValid('x9QZFeNUwhUprwp7owRZQDuYEYENKzfr8A'));
var simpleTx = new clamcore.Transaction();
var simpleTx.from(unspent).to(address, amount);
simpleTx.sign(privateKey);
```

## Examples

* [Generate a random address](https://github.com/daxxog/clamcore/blob/master/docs/examples.md#generate-a-random-address)
* [Generate a address from a SHA256 hash](https://github.com/daxxog/clamcore/blob/master/docs/examples.md#generate-a-address-from-a-sha256-hash)
* [Import an address via WIF](https://github.com/daxxog/clamcore/blob/master/docs/examples.md#import-an-address-via-wif)
* [Create a Transaction](https://github.com/daxxog/clamcore/blob/master/docs/examples.md#create-a-transaction)
* [Sign a CLAM message](https://github.com/daxxog/clamcore/blob/master/docs/examples.md#sign-a-clam-message)
* [Verify a CLAM message](https://github.com/daxxog/clamcore/blob/master/docs/examples.md#verify-a-clam-message)
* [Create an OP RETURN transaction](https://github.com/daxxog/clamcore/blob/master/docs/examples.md#create-an-op-return-transaction)
* [Create a 2-of-3 multisig P2SH address](https://github.com/daxxog/clamcore/blob/master/docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
* [Spend from a 2-of-2 multisig P2SH address](https://github.com/daxxog/clamcore/blob/master/docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)


## Modules
This module provides clam's core features. Other features and protocol extensions are built into separate modules. Here is a list of official clamcore modules:

Module | Version | Building | Coverage
-------|---------|----------|---------
<a href="http://github.com/daxxog/clamcore-payment-protocol"><img src="http://clamcore.io/css/images/clamcore-payment-protocol.svg" alt="clamcore-payment-protocol" height="28"></a> | [![NPM Package](https://img.shields.io/npm/v/clamcore-payment-protocol.svg?style=flat-square)](https://www.npmjs.org/package/clamcore-payment-protocol) | [![Build Status](https://img.shields.io/travis/daxxog/clamcore-payment-protocol.svg?branch=master&style=flat-square)](https://travis-ci.org/daxxog/clamcore-payment-protocol) | [![Coverage Status](https://img.shields.io/coveralls/daxxog/clamcore-payment-protocol.svg?style=flat-square)](https://coveralls.io/r/daxxog/clamcore-payment-protocol)
<a href="http://github.com/daxxog/clamcore-p2p"><img src="http://clamcore.io/css/images/clamcore-p2p.svg" alt="clamcore-p2p" height="28"></a> | [![NPM Package](https://img.shields.io/npm/v/clamcore-p2p.svg?style=flat-square)](https://www.npmjs.org/package/clamcore-p2p) | [![Build Status](https://img.shields.io/travis/daxxog/clamcore-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/daxxog/clamcore-p2p) | [![Coverage Status](https://img.shields.io/coveralls/daxxog/clamcore-p2p.svg?style=flat-square)](https://coveralls.io/r/daxxog/clamcore-p2p?branch=master)
<a href="http://github.com/daxxog/clamcore-mnemonic"><img src="http://clamcore.io/css/images/clamcore-mnemonic.svg" alt="clamcore-mnemonic" height="28"></a> | [![NPM Package](https://img.shields.io/npm/v/clamcore-mnemonic.svg?style=flat-square)](https://www.npmjs.org/package/clamcore-mnemonic) |  [![Build Status](https://img.shields.io/travis/daxxog/clamcore-mnemonic.svg?branch=master&style=flat-square)](https://travis-ci.org/daxxog/clamcore-mnemonic) | [![Coverage Status](https://img.shields.io/coveralls/daxxog/clamcore-mnemonic.svg?style=flat-square)](https://coveralls.io/r/daxxog/clamcore-mnemonic)
<a href="http://github.com/daxxog/clamcore-ecies"><img src="http://clamcore.io/css/images/clamcore-ecies.svg" alt="clamcore-ecies" height="25"></a> | [![NPM Package](https://img.shields.io/npm/v/clamcore-ecies.svg?style=flat-square)](https://www.npmjs.org/package/clamcore-ecies) | [![Build Status](https://img.shields.io/travis/daxxog/clamcore-ecies.svg?branch=master&style=flat-square)](https://travis-ci.org/daxxog/clamcore-ecies) | [![Coverage Status](https://img.shields.io/coveralls/daxxog/clamcore-ecies.svg?style=flat-square)](https://coveralls.io/r/daxxog/clamcore-ecies)
<a href="http://github.com/daxxog/clamcore-channel"><img src="http://clamcore.io/css/images/clamcore-channel.svg" alt="clamcore-channel" height="28"></a> | [![NPM Package](https://img.shields.io/npm/v/clamcore-channel.svg?style=flat-square)](https://www.npmjs.org/package/clamcore-channel) | [![Build Status](https://img.shields.io/travis/daxxog/clamcore-channel.svg?branch=master&style=flat-square)](https://travis-ci.org/daxxog/clamcore-channel) | [![Coverage Status](https://img.shields.io/coveralls/daxxog/clamcore-channel.svg?style=flat-square)](https://coveralls.io/r/daxxog/clamcore-channel)
<a href="http://github.com/daxxog/clamcore-explorers"><img src="http://clamcore.io/css/images/clamcore-explorers.svg" alt="clamcore-explorers" height="28"></a> | [![NPM Package](https://img.shields.io/npm/v/clamcore-explorers.svg?style=flat-square)](https://www.npmjs.org/package/clamcore-explorers) | [![Build Status](https://img.shields.io/travis/daxxog/clamcore-explorers.svg?branch=master&style=flat-square)](https://travis-ci.org/daxxog/clamcore-explorers) | [![Coverage Status](https://img.shields.io/coveralls/daxxog/clamcore-explorers.svg?style=flat-square)](https://coveralls.io/r/daxxog/clamcore-explorers)
<a href="http://github.com/daxxog/clamcore-message"><img src="http://clamcore.io/css/images/clamcore-message.svg" alt="clamcore-message" height="28"></a> | [![NPM Package](https://img.shields.io/npm/v/clamcore-message.svg?style=flat-square)](https://www.npmjs.org/package/clamcore-message) | [![Build Status](https://img.shields.io/travis/daxxog/clamcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/daxxog/clamcore-message) | [![Coverage Status](https://img.shields.io/coveralls/daxxog/clamcore-message.svg?style=flat-square)](https://coveralls.io/r/daxxog/clamcore-message)

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/daxxog/clamcore/blob/master/CONTRIBUTING.md) file. 

## Building the Browser Bundle

To build clamcore full bundle for the browser:

```sh
gulp browser
```

This will generate files named `clamcore.js` and `clamcore.min.js`.

You can also use our pre-generated files, provided for each release along with a PGP signature by one of the project's maintainers. To get them, checkout a release commit (for example, https://github.com/daxxog/clamcore/commit/e33b6e3ba6a1e5830a079e02d949fce69ea33546 for v0.12.6).

To verify signatures, use the following PGP keys:
- @braydonf: https://pgp.mit.edu/pks/lookup?op=get&search=0x9BBF07CAC07A276D
- @pnagurny: https://pgp.mit.edu/pks/lookup?op=get&search=0x0909B33F0AA53013

## Tests

Run all the tests:

```sh
gulp test
```

You can also run just the NodeJS tests with `gulp test:node`, just the browser tests with `gulp test:browser`
or create a test coverage report (you can open `coverage/lcov-report/index.html` to visualize it) with `gulp coverage`.

## License

Code released under [the MIT license](https://github.com/daxxog/clamcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
