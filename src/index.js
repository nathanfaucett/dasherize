var reInflect = require("re_inflect");


module.exports = dasherize;


function dasherize(string) {
    return string.match(reInflect).join("-").toLowerCase();
}
