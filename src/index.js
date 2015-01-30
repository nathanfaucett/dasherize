var reInflect = require("re_inflect");


module.exports = function dasherize(string) {
    return string.match(reInflect).join("-").toLowerCase();
};
