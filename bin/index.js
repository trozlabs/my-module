#!/usr/bin/env node

const myModule = require('../src');

console.log('running: ' + __filename + ' version: ' + myModule.getVersion());

process.exit(0);