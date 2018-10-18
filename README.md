# datetime-utc-local
UTC or local time in YYYY/MM/DD-HH:mm:ss format

## Installation
```bash
npm install datetime-utc-local
```

## Usage
```js
var DateTimeUTC = require('./DateTime').utc;
var DateTimeLocal = require('./DateTime').local;

console.log(DateTimeUTC());     // current UTC time
console.log(DateTimeLocal());   // current local time   
console.log(DateTimeUTC(new Date(2018, 0, 1, 0, 0, 0)));    // 2017/12/31-23:00:00
console.log(DateTimeLocal(new Date(2018, 0, 1, 0, 0, 0)));  // 2018/01/01-00:00:00
```

## License
[MIT](LICENSE)