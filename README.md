# is-christmas-period
> Identify whether the current or given date is about Christmas period.

## Install
```
npm install -g is-christmas-period
```

## Use

### 1. Load the module
```javascript
var isChristmasPeriod = require('is-christmas-period');
```

### 2. Check if current date is about Christmas period
```javascript
console.log(isChristmasPeriod()); // true or false
```

### Other Examples
#### 20th of December is about Christmas period
```javascript
var twentiethOfDecember = new Date();
twentiethOfDecember.setDate(20);
twentiethOfDecember.setMonth(11);

isChristmasPeriod(twentiethOfDecember); // true
```

#### 8th of February is not about Christmas period
```javascript
var eightthOfFebruary = new Date();
eightthOfFebruary.setDate(8);
eightthOfFebruary.setMonth(1);

isChristmasPeriod(eightthOfFebruary); // false
```

## Test
To execute tests, first install the project dependencies:

```
$ npm install
```

Then, run the tests
```
$ npm test
```
