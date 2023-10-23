const packageJson = require('../package.json');

exports.getVersion = function() {
    // console.log(packageJson);
    return packageJson.version;
}