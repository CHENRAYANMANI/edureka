// Push,pop,shift,unshift

let arr = [1, 2, 3];
// push
let x = arr.push(4);
console.log(arr);
// pop
let y = arr.pop();
console.log(arr);
// shift
let z = arr.shift();
console.log(arr);
// unshift
let w = arr.unshift(5);
console.log(arr);

// apply map, push,foreach method

let arr2 = [
  {
    name: "Rahul",
    empId: 3567,
    mailId: "mailme@gmail.com",
    Address: {
      "city Name": "Vijayawada",
      District: "Krishna district",
      pin: 526894,
    },
    Hobbies: ["Netflix", "Tennis", "Coding"],
  },
  {
    name: "Ravi",
    empId: 9867,
    mailId: "ravimail@gmail.com",
    Address: {
      "city Name": "guntur",
      District: "Prakasham district",
      pin: 685479,
    },
    Hobbies: ["Reading", "Swimming", "Baking"],
  },
  {
    name: "Santosh",
    empId: 8876,
    mailId: "santoshmail@gmail.com",
    Address: {
      "city Name": "Warangal",
      District: "hanamkonda district",
      pin: 996587,
    },
    Hobbies: ["Gym", "Reading Novels"],
  },
  {
    name: "Surya",
    empId: 3469,
    mailId: "suryamail@gmail.com",
    Address: {
      "city Name": "Nazamabad",
      District: "Nazamabad district",
      pin: 648597,
    },
    Hobbies: ["Badminton", "E-Sports", "Netflix"],
  },
  {
    name: "Kiran",
    empId: 8864,
    mailId: "kiranmail@gmail.com",
    Address: {
      "city Name": "Karimnagar",
      District: "Karimnagar district",
      pin: 526894,
    },
    Hobbies: ["Gaming", "Cooking", "Music"],
  },
];

arr2.map((val) => {
  console.log(val["name"]);
  console.log(Object.values(val["Address"]));
  val["Hobbies"].map((val) => console.log(val));
});

// arr2.forEach((val) => {
//   console.log(val["name"]);
//   console.log(Object.values(val["Address"]));
//   val["Hobbies"].forEach((val) => console.log(val));
// });

// for (let index = 0; index < arr2.length; index++) {
//   const val = arr2[index];
//   console.log(val["name"]);
//   console.log(Object.values(val["Address"]));

//   for (let index1 = 0; index1 < val["Hobbies"].length; index1++) {
//     console.log(val["Hobbies"][index1]);
//   }
// }
// for (let index = 0; index < arr2.length; index++) {
//   const val = arr2[index];
//   console.log(val["name"]);
//   console.log(Object.values(val["Address"]));

//   for (let index1 = 0; index1 < val["Hobbies"].length; index1++) {
//     console.log(val["Hobbies"][index1]);
//   }
// }

let a = 50;
let b = "502";
let c = "2";
console.log(a + c + b);
