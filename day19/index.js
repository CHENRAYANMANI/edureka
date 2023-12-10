let x = 10;
let y = 20;
if (x > y) {
  console.log("y is less than x");
} else {
  console.log("y is greater than x");
}
let z = "one";
switch (z) {
  case "zero":
    console.log("hello from case zero...");
    break;
  case "one":
    console.log("hello from case one...");
    break;
  default:
    console.log("it is swith");
}
let k = 1;
let sum = 0;
while (k <= 10) {
  sum += 10;
  k++;
}
console.log(sum);
for (i = 0; i < 5; i++) {
  console.log("welcome to veranda");
}
const newObj = [
  {
    id: 1,
    order: "Below 500",
    "order percentage": "10.05",
    restaurant: "punjabi Tadka",
  },
  {
    id: 2,
    order: "500-1000",
    "order percentage": "14.57",
    restaurant: "punjabi Tadka",
  },
  {
    id: 3,
    order: "1000-1500",
    "order percentage": "15.08",
    restaurant: "punjabi Tadka",
  },
  {
    id: 4,
    order: "1500-2000",
    "order percentage": "22.11",
    restaurant: "punjabi Tadka",
  },
  {
    id: 5,
    order: "Above 2000",
    "order percentage": "38.19",
    restaurant: "punjabi Tadka",
  },
];

// newObj.map((val) => console.log(val["order percentage"]));
for (let i = 0; i < newObj.length; i++) {
  console.log(newObj[i]["order percentage"]);
}
