var tape = require("tape"),
    dasherize = require("..");


tape("dasherize(string : String)", function(assert) {
    assert.equal(dasherize("string-string"), "string-string");
    assert.equal(dasherize("stringString"), "string-string");
    assert.end();
});
