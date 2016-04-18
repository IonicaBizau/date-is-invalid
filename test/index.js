const tester = require("tester")
    , isInvalid = require("..")
    ;

tester.describe("date-is-invalid", t => {
    t.should("detect invalid dates", () => {
        t.expect(isInvalid(new Date("foo"))).toBe(true);
        t.expect(isInvalid(new Date())).toBe(false);
    });
});
