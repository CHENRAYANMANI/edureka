let restaurantList = [
  {
    id: 1,
    restaurantName: "KFC",
    address: "Anand Vihar",
    city: "Delhi",
  },
  {
    id: 2,
    restaurantName: "Domino",
    address: "Savita Vihar",
    city: "Delhi",
  },
  {
    id: 3,
    restaurantName: "Burger King",
    address: "Civil Lines",
    city: "Pune",
  },
  {
    id: 4,
    restaurantName: "Subway",
    address: "Cantonment",
    city: "Mumbai",
  },
];
function printAllRestaurantNames() {
  console.log(restaurantList.map((x) => x["restaurantName"]));
}

printAllRestaurantNames();

function filterRestaurantByCity() {
  console.log(restaurantList[2]);
}
filterRestaurantByCity();

// date
let date = new Date();
console.log(date);
// const now = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMilliseconds());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMonth());
// Math
console.log(Math.ceil(22.2));
console.log(Math.floor(22.2));
console.log(Math.max(21, 20, 42, 65, 85, 75, 95));

console.log(Math.PI);
console.log(Math.pow(2, 2));
console.log(Math.random());
