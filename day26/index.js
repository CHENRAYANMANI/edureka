let person = "Girish";
let age = 25;

localStorage.setItem("name", person);
localStorage.setItem("age", age);

localStorage.removeItem("age");

let name1 = localStorage.getItem("name");
console.log(name1);

sessionStorage.setItem("name", person);
sessionStorage.setItem("age", age);

let che = ["Rahul", "Ravi", "Santosh", "Surya", "Kiran"];
localStorage.setItem("employees", JSON.stringify(che));
let newChe = localStorage.getItem("employees");
console.log(newChe);
console.log(JSON.parse(newChe));
