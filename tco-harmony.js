/*
	https://github.com/relloller/errOrRecursion
	Victor Shaw vshaw168@gmail.com
*/

// Running node with the '-harmony' argument enables tail call optimization. Must use strict mode.
	// node -harmony tco-harmony.js

'use strict';
var Big = require('big.js');

function fibonacci_sync(n, a = new Big(0), b = new Big(1), c = 0) {
    if (n < 2) {
        if (n === 0) return 0;
        return b.toExponential(168);
    }
    if (c % 1500 === 0 && c>0) {
        a = Big(a.toExponential(168));
        b = Big(b.toExponential(168));
    }
    return fibonacci_sync(n - 1, b, a.plus(b), c+1);
}


console.time('tco-harmony')
var fibHarmony = fibonacci_sync(1000000);
console.timeEnd('tco-harmony')
console.log('fibHarmony:', fibHarmony);

/*
tco-harmony: 3415.182ms
fibHarmony: 1.953282128707757731632014947596256332443542996591873396953405194571625257887015694766641987634150146128879524335220236084625510912019560233744015438115196636156919962135e+208987
*/
