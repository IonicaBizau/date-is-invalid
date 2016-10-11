
# date-is-invalid

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/date-is-invalid.svg)](https://travis-ci.org/IonicaBizau/date-is-invalid/) [![Version](https://img.shields.io/npm/v/date-is-invalid.svg)](https://www.npmjs.com/package/date-is-invalid) [![Downloads](https://img.shields.io/npm/dt/date-is-invalid.svg)](https://www.npmjs.com/package/date-is-invalid) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Check if a date is invalid or not.

## :cloud: Installation

```sh
$ npm i --save date-is-invalid
```


## :clipboard: Example



```js
const dateIsInvalid = require("date-is-invalid");

console.log(dateIsInvalid(new Date()));
// => false

console.log(dateIsInvalid(new Date("foo")));
// => true
```

## :memo: Documentation


### `dateIsInvalid(d)`
Check if a date is invalid or not.

#### Params
- **Date** `d`: The input date.

#### Return
- **Boolean** `true` if the date is invalid, `false` otherwise.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`initial-commit-date`](https://github.com/IonicaBizau/initial-commit-date#readme)—Get the initial commit date of a git repository.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
