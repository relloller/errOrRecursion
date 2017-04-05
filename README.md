# errOrRecursion


#### A dirty, hacky, NSFW, error-driven implementation of 'perpetual' tail call recursion for Node.js 

### Implementation: 


By using try-catch to specifically target the RangeError type error which is thrown in response to call stack overflows, it is possible to continue tail recursion by storing of the most recent function arguments in a variable.
  
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
  
 Calculation of the millionth element in the Fibonacci sequence:
errOrRecursion: 7425ms

trampoline:     4356ms

tco-harmony:    3415ms

iteration:      3591ms
 

*fibonacci 1000000:* 1.953282128707757731632014947596256332443542996591873396953405194571625257887015694766641987634150146128879524335220236084625510912019560233744015438115196636156919962135e+208987

Be careful of growing arrays, objects, maps, etc. which may cause an overflow of the allocated heap.

 #### Notes: 
   Tail call optimization is available for Node.js using the '-harmony' argument. Example provided in tco-harmony.js
    	
    	node -harmony tco-harmony.js

**DISCLAIMER: Highly experimental. Use at own risk. The primary purpose of this repo is to demonstrate the workings of try-catch and handling of thrown errors in node.js. **



 	

