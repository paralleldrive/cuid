# Contributing to cuid

## Saucelabs setup

To run unit tests on Saucelabs, first create a Saucelabs account (if you don't
already have one) [here](https://saucelabs.com/opensource).

Create a `.zuulrc` file in the root of this project (replace username and key with your own credentials):

```
sauce_username: my_awesome_username
sauce_key: 123a1234-a12b-12d4-a123-123456780000
```

## Testing

To unit test the server version locally, run

```sh
npm run test:server
```

To unit test the browser version on Saucelabs, run

```sh
npm run test:browser
```
