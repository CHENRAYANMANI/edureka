let fruits = ["orange", "mango", "apple", "guava"];
function unShift1(arr, element) {
  for (let i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
    if (i == 0) arr[i] = element;
  }
  return arr;
}
console.log(`before unshift1=> ${fruits}`);
let x = "kiwi";
let unshift1 = unShift1(fruits, x);
console.log(`after unshift1=> ${unshift1}`);

// for each
console.log(`before foreach=> ${fruits}`);

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
forEach(fruits, (item, index) => {
  console.log(`${index + 1}.${item}`);
});
