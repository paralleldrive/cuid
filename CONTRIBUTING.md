# Contributing to cuid

## Saucelabs setup

To run unit tests on Saucelabs, first create a Saucelabs account (if you don't
already have one) [here](https://saucelabs.com/opensource).

Create a `.zuulrc` file in the root of this project:

```
sauce_username: my_awesome_username
sauce_key: 550e8400-e29b-41d4-a716-446655440000
```

## Testing

To unit test the server implementation, run

```sh
npm run test:server
```

To unit test the client implementation, run

```sh
npm run test:client
```
