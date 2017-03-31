/* 
	https://github.com/relloller/errOrRecursion
	Victor Shaw vshaw168@gmail.com
*/

'use strict';

var Big = require('big.js');

var errOrRecursion = (function() {
    var currentArgs;
    var msgMemorabilia = ["Spawn more overlords.", "It’s dangerous to go alone, take this.","To infinity and beyond!","Doctor said I need a backiotomy!", "I wanna talk to Samson!", "Well, did you get my message?", "Got some for me?","Nothing exceeds like excess. You should know that Tony.", "You've not enough minerals.","FINISH HIM!!!","Now wait, another dose and you might be dead","All the words past the margin", "End like Leviathan, it's deep; well, let me try again","Drill Claw!", "C'mere! Get over here!", "Berserker Barrage!", "Tornado Claw!", "Optic Blast!","Kinetic Card!", "Hey, What happened? I'm not through with you yet!", "We are getting way... behind schedule...", "Hailing frequencies open.", "Last transmission... breakin' up... come back.", "His EKG is flatlining! Give me a defib stat!","Need medical attention?","Is something burning?","2mg Ativan!","Vespene geyser exhausted.","She's gonna Blow!","Get up!! It's too early for you to be defeated!","You must defeat my Dragon Punch to stand a chance!", "WINNERS DON'T USE DRUGS", "Silly robot, you really think you have a chance against a super saiyan like me?","You've managed to singe my leg hairs" ,"Mineral field depleted.","It's over 9000!!","black sheep wall","Help Me Help You.","Pot of Gold", "IDDQD", "You require more Vespene Gas.", "You must construct additional pylons.", "Daily ATM Withdrawal Limit Exceeded","Insufficient Funds","Regroup, Team!","Hold This Position!","Taking Fire, Need Assistance!","Regroup, Team!", "You Take the Point", "She's gonna Blow!",   "Additional Supply Depots required.", "'Please, sir,' replied Oliver, 'I want some more.' \n                                     'Mr. Limbkins, I beg your pardon, sir! Oliver Twist has asked for more!'"];

    function fiboTail(n, a = Big(0), b = Big(1), c = 0) {
        if (n < 2) {
            if (n === 0) return 0;
            return b.toExponential(1000);
        }
        currentArgs = [...arguments];
        return fiboTail(n - 1, b, a.plus(b), c + 1);
    }

    function errOrRecursion(fnc, ...fncArgs) {
        try { return fnc(...fncArgs)} 
        catch (e) {
            if (e instanceof RangeError) {
                if (e.message === 'Maximum call stack size exceeded') {
                    console.log(e.message, ' - ', msgMemorabilia[Math.floor(Math.random() * msgMemorabilia.length)]);
                    currentArgs[1]= Big(currentArgs[1].toExponential(1500));
                    currentArgs[2]= Big(currentArgs[2].toExponential(1500));
                    return errOrRecursion(fnc, ...currentArgs);
                }
                throw e;
            } 
            throw e;
        }
    }

    var stephenCurry = function(fnc) {
        return function(...fncArgs) {
            return errOrRecursion(fnc, ...fncArgs)
        }
    };

    return {fib: stephenCurry(fiboTail)};
})();


console.time('errOrRecursion complete');
var errRecResult = errOrRecursion.fib(1000000);
console.timeEnd('errOrRecursion complete')
console.log('fibonacci Milli:', errRecResult);

// errOrRecursion complete: 50241.543ms
// fibonacci Milli: 1.9532821287077577316320149475962563324435429965918733969534051945716252578870156947666419876341501461288795243352202360846255109120195602337440154381151966361569199621256428943033701138278006380027674115279274666698655783793188228320612714975832303348548934895725992307229129019282092643316275217308614600179125820426996599360209593392020051848620284024473431398113674187202038684801753185386211128781082406177413832935545616876064540651259547180291265479428940369816592063610193592913521354103767990829403201557027161153950319759732477821629576316296533566947776632850623452455934606475750259358134434578167676462587885901137272990737294785114480895724561915035070255895291168685500088020132334587472177947814475467920160901706425856293597475465327575757400774320349134287851897953543047345603077650789387672865391667992328174493619915237681495576320853710478597061884387315305823956275608790631078190049751695947097367138917457045552021351233507944033607120305041446852210415650373210679322756258648e+208987
