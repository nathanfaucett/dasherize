var assert = require("assert"),
    underscore = require("../src/index");


describe("underscore(string : String)", function() {
    it("should underscore string", function() {
        assert.equal(underscore("string-string"), "string-string");
        assert.equal(underscore("stringString"), "string-string");
    });
});
