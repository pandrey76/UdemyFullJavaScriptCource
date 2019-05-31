'use strict';

let x = 5; 
alert( x++ );    // 5

console.log([ ] + false - null + true );    // NaN

let y1 = 1; let x1 = y1 = 2; alert(x1);     // 2

let x2 = [ ] + 1 + 2;
console.log(x2);   // 12
console.log(typeof(x2));   // string

let x3 = "1"[0];
console.log( x3 );    //1
console.log( typeof(x3) );    // string

console.log(2 && 1 && null && 0 && undefined);   // null

let a1 = 1,
    b1 = 2;
console.log(!!( a1 && b1 ));  // true
console.log( a1 && b1 );      // 2

alert( null || 2 && 3 || 4 ); // 3

let a2 = [1, 2, 3], 
    b2 = [1, 2, 3];
console.log(a2 == b2);   // false     

alert( +"Infinity" );   // Infinity

console.log("ёжик" > "яблоко"); // true

let x4  = (0 || "" || 2 || undefined || true || false);
console.log(x4);    // 2
console.log(typeof(x4));    // number
