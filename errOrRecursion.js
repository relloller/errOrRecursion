/* 
	https://github.com/relloller/errOrRecursion
	Victor Shaw vshaw168@gmail.com
*/

'use strict';

var Big = require('big.js');

var errOrRecursion = (function() {
    var currentArgs;
    var msgMemorabilia = ["Spawn more overlords.", "It’s dangerous to go alone, take this.", "To infinity and beyond!", "Doctor said I need a backiotomy!", "I wanna talk to Samson!", "Well, did you get my message?", "Got sum fo me?", "Nothing exceeds like excess. You should know that Tony.", "You've not enough minerals.", "FINISH HIM!!!", "Now wait, another dose and you might be dead", "All the words past the margin", "End like Leviathan, it's deep; well, let me try again", "Drill Claw!", "C'mere! Get over here!", "Berserker Barrage!", "Tornado Claw!", "Optic Blast!", "Kinetic Card!", "Hey, What happened? I'm not through with you yet!", "We are getting way... behind schedule...", "Hailing frequencies open.", "Last transmission... breakin' up... come back.", "His EKG is flatlining! Give me a defib stat!", "Need medical attention?", "Is something burning?", "2mg Ativan!", "Vespene geyser exhausted.", "She's gonna Blow!", "Get up!! It's too early for you to be defeated!", "You must defeat my Dragon Punch to stand a chance!", "WINNERS DON'T USE DRUGS", "If the train falls off the tracks... pick it up! pick it up! pick it up!", "You've managed to singe my leg hairs.", "Mineral field depleted.", "It's over 9000!!", "black sheep wall", "Help Me Help You.", "Pot of Gold", "IDDQD", "You require more Vespene Gas.", "You must construct additional pylons.", "Daily ATM Withdrawal Limit Exceeded", "Insufficient Funds", "Regroup, Team!", "Hold This Position!", "Taking Fire, Need Assistance!", "Regroup, Team!", "You Take the Point", "She's gonna Blow!", "Additional Supply Depots required.", "'Please, sir,' replied Oliver, 'I want some more.' \n                                     'Mr. Limbkins, I beg your pardon, sir! Oliver Twist has asked for more!'"];

    function fiboTail(n, a = Big(0), b = Big(1), c = 0) {
        if (n < 2) {
            if (n === 0) return 0;
            return b.toExponential(168)
        }
        if (c % 1500 === 0 && c > 0) {
            a = Big(a.toExponential(168));
            b = Big(b.toExponential(168));
        }
        currentArgs = [...arguments];
        return fiboTail(n - 1, b, a.plus(b), c + 1);
    }

    function errOrRecursion(fnc, ...fncArgs) {
        try {
            return fnc(...fncArgs)
        } catch (e) {
            if (e instanceof RangeError) {
                if (e.message === 'Maximum call stack size exceeded') {
                    console.log(e.message, ' - ', msgMemorabilia[Math.floor(Math.random() * msgMemorabilia.length)]);
                    return errOrRecursion(fnc, ...currentArgs);
                }
                return console.error(e);
            }
            return console.error(e);
        }
    }

    var stephenCurry = function(fnc) {
        return function(...fncArgs) {
            return errOrRecursion(fnc, ...fncArgs)
        }
    };

    return {
        fib: stephenCurry(fiboTail)
    };
})();


console.time('errOrRecursion complete');
var errRecResult = errOrRecursion.fib(1000000);
console.timeEnd('errOrRecursion complete')
console.log('errRecResult', errRecResult);
/*
errOrRecursion complete: 7425.893ms
errRecResult 1.953282128707757731632014947596256332443542996591873396953405194571625257887015694766641987634150146128879524335220236084625510912019560233744015438115196636156919962135e+208987
*/
