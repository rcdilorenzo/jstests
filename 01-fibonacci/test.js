var expect = require('expect.js')

// <--- INSERT CODE HERE --->

var enableBonusTest = false;


// ---

describe('fibonacci sequence', function() {
    it('should return nth term', function () {
        expect(fib(1)).to.be(1);
        expect(fib(5)).to.be(5);
        expect(fib(6)).to.be(8);
    });

    var bonusTest = enableBonusTest ? it : it.skip;
    bonusTest('BONUS: should return the set of first n terms', function () {
        expect(fibSet(2)).to.eql([1, 1]);
        expect(fibSet(5)).to.eql([1, 1, 2, 3, 5]);
    });
});
