var isChristmasPeriod = require('../index');

describe('#Testing Suite for is-christmas-period package', function() {
    describe("25th of December", function () {
        var d = new Date();
        beforeEach(function () {
            d.setDate(25);
            d.setMonth(11); // 11th month is December
        });

        it('should be christmas period', function() {
            expect(isChristmasPeriod(d)).toBeTruthy();
        });
    });

    describe("19th of April", function () {
        var d = new Date();
        beforeEach(function () {
            d.setDate(19);
            d.setMonth(4);
        });

        it('should not be christmas period', function() {
            expect(isChristmasPeriod(d)).toBeFalsy();
        });
    });

    describe("2nd of January", function () {
        var d = new Date();
        beforeEach(function () {
            d.setDate(2);
            d.setMonth(0);
        });

        it('should be christmas period', function() {
            expect(isChristmasPeriod(d)).toBeTruthy();
        });
    });

    describe("30th of November", function () {
        var d = new Date();
        beforeEach(function () {
            d.setDate(30);
            d.setMonth(10);
        });

        it('should be christmas period', function() {
            expect(isChristmasPeriod(d)).toBeTruthy();
        });
    });

    describe("Current date", function () {
        it('should be defined', function() {
            expect(isChristmasPeriod()).toBeDefined();
        });
    });
});


