const arr = ["Apple", "Mango", "Grapes", "Guava"];
console.log(arr);
const obj = {
  name: "Surya",
  empId: 3469,
  mailId: "suryamail@gmail.com",
  Address: {
    city: "Nazamabad",
    District: "Nazamabad district",
    pin: 648597,
  },
  Hobbies: ["Badminton", "E-Sports", "Netflix"],
};
console.log(obj);

let x = ["grapes", true, true, "grapes"];

[...new Set(x)].map((x) => console.log(x));

// Create an empty Map
const myMap = new Map();

// Add key-value pairs to the Map
myMap.set("helloword!", "Guava");

// Create an array with 3 elements
const arrayKey = [1, 2, 3];

// Add a key-value pair with an array as the key
myMap.set(arrayKey, { 1: 10 });

// Now, your Map should look like the one you provided
console.log(myMap);
