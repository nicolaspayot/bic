# bic
BIC (Business Identifier Code) format validator

[![Build status](https://travis-ci.org/nicolaspayot/bic.svg)](https://travis-ci.org/nicolaspayot/bic)

## Install

```bash
$ npm install bic --save
# OR
$ yarn add bic
```

## Usage

### In Node.js

```javascript
const bic = require('bic');
bic.isValid('12345678'); // false
bic.isValid('CHASUS33'); // true

// OR

import bic from 'bic';
bic.isValid('12345678'); // false
bic.isValid('CHASUS33'); // true
```

### In browser

```html
<script src="https://cdn.jsdelivr.net/npm/bic@[VERSION_NUMBER]/dist/bic.umd.min.js"></script>

<script>
    bic.isValid('12345678'); // false
    bic.isValid('CHASUS33'); // true
</script>
```

## License

The MIT License (MIT)
