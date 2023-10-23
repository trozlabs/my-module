const myModule = require('../src');

const version = myModule.getVersion();

console.log(`
############################################
# myModule.version: ${version}
############################################
`);