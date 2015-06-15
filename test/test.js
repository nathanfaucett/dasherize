var assert = require("assert"),
    dasherize = require("../src/index");


describe("dasherize(string : String)", function() {
    it("should dasherize string", function() {
        assert.equal(dasherize("string-string"), "string-string");
        assert.equal(dasherize("stringString"), "string-string");
    });
});
