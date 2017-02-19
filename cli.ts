#!/usr/bin/env node

import * as commander from 'commander';
import * as console from 'console';

function action() {
    console.log('do something here');
}

commander
    .description('My Cli...')
    // .option('--name', 'description')
    .action(action)
    .parse(process.argv);
