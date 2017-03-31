# errOrRecursion


#### A dirty, hacky, NSFW, error-driven implementation of 'perpetual' tail call recursion for Node.js 

### Implementation: 


  By using try-catch to specifically target the RangeError type error thrown in response to call stack overflows, it is         possible to continue tail recursion by storing the most recent function arguments in a local variable.
  
 Error of interest:		**RangeError: Maximum call stack size exceeded**

```javascript
var storedArgs; //variable to store latest function arguments

function recursiveFunc(...args) {
    storedArgs = [...arguments]; //each recursive call updates stored arguments 
    {{some code}}
    return recursiveFunc(...someArgs);
}

try {
    return recursiveFunc(...args);
} catch (e) {
    if (e instanceof RangeError) {
        if (e.message === 'Maximum call stack size exceeded') {
            return recursiveFunc(...storedArgs); //continue recursion with stored arguments
        }
    } else {
        throw e;
    }
}
``` 

 The only required dependency is big.js, a module for dealing with very large numbers. 
  
      npm install
  
 Calculation of the millionth element in the Fibonacci sequence completed in ~50 seconds.

*fibonacci 1000000:* 1.9532821287077577316320149475962563324435429965918733969534051945716252578870156947666419876341501461288795243352202360846255109120195602337440154381151966361569199621256428943033701138278006380027674115279274666698655783793188228320612714975832303348548934895725992307229129019282092643316275217308614600179125820426996599360209593392020051848620284024473431398113674187202038684801753185386211128781082406177413832935545616876064540651259547180291265479428940369816592063610193592913521354103767990829403201557027161153950319759732477821629576316296533566947776632850623452455934606475750259358134434578167676462587885901137272990737294785114480895724561915035070255895291168685500088020132334587472177947814475467920160901706425856293597475465327575757400774320349134287851897953543047345603077650789387672865391667992328174493619915237681495576320853710478597061884387315305823956275608790631078190049751695947097367138917457045552021351233507944033607120305041446852210415650373210679322756258648e+208987

Be careful of growing arrays, objects, maps, etc. which may cause an overflow of the allocated heap.

 #### Notes: 
   Tail call optimization is available for Node.js using the '-harmony' argument. Example provided in tco-harmony.js
    	
    	node -harmony tco-harmony.js

**DISCLAIMER: Highly experimental. Use at own risk. The primary purpose of this repo is to demonstrate the workings of try-catch and handling of thrown errors in node.js. **



 	

