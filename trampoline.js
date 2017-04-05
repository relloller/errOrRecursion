/*
	https://github.com/relloller/errOrRecursion
	Victor Shaw vshaw168@gmail.com
*/
'use strict';

var Big = require('big.js');

function stephenCurry(fnc) {
	 return function (...args){return function(){return fnc(...args)}}
}

function partialApp(fnc, ...args) {
	return function (){return function() {return fnc(...args);}}
}

function fibTCO(n,a=Big(0),b=Big(1),c=0) {
	if(n<2) {
		if(n===0) return 0;
		return b.toExponential(168);
	}
	if (c % 1500 === 0 && c>0) {
        a = Big(a.toExponential(168));
        b = Big(b.toExponential(168));
    }
	return partialApp(fibTCO,n-1,b,a.plus(b),c+1);
}

var fibTrampoline= stephenCurry(fibTCO)(1000000);
console.time('fibTrampoline');
while(typeof fibTrampoline==='function') var fibTrampoline=fibTrampoline();
console.timeEnd('fibTrampoline');
console.log('fibTrampoline', fibTrampoline);
/*
fibTrampoline: 4356.096ms
fibTrampoline 1.953282128707757731632014947596256332443542996591873396953405194571625257887015694766641987634150146128879524335220236084625510912019560233744015438115196636156919962135e+208987
*/