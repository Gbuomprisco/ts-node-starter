# ts-node-starter

A starter for Node projects written with Typescript

## Quick start

#### Install dependencies

    npm install


### Compile Typescript

    npm run build


### Tests

Write your Jasmine tests in the folder `tests` and then run:

    npm test


To run the tests with coverage (using Istanbul), run:

    npm test:coverage


### CLI

Edit the file `cli.ts` to run your custom commands using [Commander](https://github.com/tj/commander.js). Then:

    npm run build
    npm link

    // now you can run your custom command
    my-custom-command ...

