# ts-node-starter

### A starter for Node projects written with Typescript

## Quick start

#### Install dependencies

    npm install

### Compile Typescript

    npm run build

### Tests

Write your Jasmine tests in the folder `tests` and then run:

    npm test

### CLI

Edit the file `cli.ts` to run your custom commands using [https://github.com/tj/commander.js/](Commander). Then:

    npm run build
    npm link

    // now you can run your custom command
    my-custom-command ...

