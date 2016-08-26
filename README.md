# bic
BIC (Business Identifier Code) format validator

[![Build status](https://travis-ci.org/nicolaspayot/bic.svg)](https://travis-ci.org/nicolaspayot/bic)

## Install

```bash
$ npm install bic --save
```

## Usage

```js
var bic = require('bic');
bic.isValid('12345678'); // false
bic.isValid('CHASUS33'); // true
```

## License

The MIT License (MIT)
