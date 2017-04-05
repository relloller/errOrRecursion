/* 
	https://github.com/relloller/errOrRecursion
	Victor Shaw vshaw168@gmail.com
*/

'use strict';
var Big = require('big.js');

function fibIterate(n){
	var a=Big(0);
	var b=Big(1);
	var ab;
	if(n<2) {
		if(n===0) return 0;
		return 1;
	}
	for (var i = n; i >0; i--) {
		if(i<2) return b.toExponential(168);
		if((n-i)%1500===0){
			a=Big(a.toExponential(168));
			b=Big(b.toExponential(168));
		}
		ab=b;
		b=a.plus(b);
		a=ab;
	}
}
console.time('fibIteration');
var fibIterateResult = fibIterate(1000000);
console.timeEnd('fibIteration');
console.log('fibIterateResult', fibIterateResult);

/*
fibIteration: 3591.595ms
fibIterateResult 1.953282128707757731632014947596256332443542996591873396953405194571625257887015694766641987634150146128879524335220236084625510912019560233744015438115196636156919962135e+208987
*/