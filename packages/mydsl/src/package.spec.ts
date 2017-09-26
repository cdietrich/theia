/* note: this bogus test file is required so that
   we are able to run mocha unit tests on this
   package, without having any actual unit tests in it.
   This way a coverage report will be generated,
   showing 0% coverage, instead of no report.
   This file can be removed once we have real unit
   tests in place. */

describe("mydsl package", () => {

    it("support code coverage statistics", () => {
        return true;
    })
});
