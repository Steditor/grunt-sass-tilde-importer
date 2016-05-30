path = require('path');

module.exports = function (url, prev, done) {
    if (url[0] === '~') url = path.resolve(process.cwd(), 'node_modules', url.substr(1));
    return {file: url};
};
