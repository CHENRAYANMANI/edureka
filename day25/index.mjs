import { add } from "./index1.mjs";

// global

let y = "global";
console.log("valve of y in global scope: " + y);

// functional scope

function reach() {
  let y = "functional";
  console.log("valve of y in global scope: " + y);
}
reach();
// block
let x = true;
if (x) {
  let y = "block";
  console.log("valve of y in global scope: " + y);
}
//  lexical scope
function reachA() {
  console.log("valve of y in global scope: " + y);
}
reachA();

// restoperator
let a = [1, 2, 3, 4, 5];
console.log(add(...a));
