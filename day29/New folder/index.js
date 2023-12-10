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
const outerlogo = document.querySelector(".outerlogo");
const innerlogo1 = document.querySelector(".innerlogo1");
const logo = document.querySelector(".logo");
const outerbox = document.querySelector(".outerbox");

outerlogo.addEventListener("click", () => {
  console.log("outerlogo");
});
innerlogo1.addEventListener("click", () => {
  console.log("innerlogo1");
});
logo.addEventListener("click", () => {
  console.log("logo");
});
arr2.map((che) => {
  const div = document.createElement("div");
  div.className = "box";
  outerbox.appendChild(div);

  const h2 = document.createElement("h2");
  h2.innerHTML = `Name:${che.name}`;
  div.appendChild(h2);
  const h3 = document.createElement("h3");
  h3.innerHTML = `empId:${che.empId}`;
  div.appendChild(h3);
  const p = document.createElement("p");
  p.innerHTML = ` mailId:${che.mailId}`;
  div.appendChild(p);
  const article = document.createElement("article");
  article.innerHTML = `Address:${Object.values(che.Address)}`;
  div.appendChild(article);
  const h1 = document.createElement("h3");
  h1.innerHTML = `Hobbies:${che.Hobbies}`;
  div.appendChild(h1);
  const button = document.createElement("button");
  button.className = "olddelete";
  button.innerHTML = "Delete";

  div.appendChild(button);
});
outerbox.addEventListener("click", (e) => {
  if (e.target.className === "olddelete") {
    e.target.parentElement.remove();
  }
});
