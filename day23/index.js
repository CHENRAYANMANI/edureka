class EmployeeData {
  emp1 = {
    name: "Rahul",
    empId: 3567,
    mailId: "mailme@gmail.com",
    Address: {
      "city Name": "Vijayawada",
      District: "Krishna district",
      pin: 526894,
    },
    Hobbies: ["Netflix", "Tennis", "Coding"],
  };
  emp2 = {
    name: "Ravi",
    empId: 9867,
    mailId: "ravimail@gmail.com",
    Address: {
      "city Name": "guntur",
      District: "Prakasham district",
      pin: 685479,
    },
    Hobbies: ["Reading", "Swimming", "Baking"],
  };
  emp3 = {
    name: "Santosh",
    empId: 8876,
    mailId: "santoshmail@gmail.com",
    Address: {
      "city Name": "Warangal",
      District: "hanamkonda district",
      pin: 996587,
    },
    Hobbies: ["Gym", "Reading Novels"],
  };
  emp4 = {
    name: "Surya",
    empId: 3469,
    mailId: "suryamail@gmail.com",
    Address: {
      "city Name": "Nazamabad",
      District: "Nazamabad district",
      pin: 648597,
    },
    Hobbies: ["Badminton", "E-Sports", "Netflix"],
  };
  emp5 = {
    name: "Kiran",
    empId: 8864,
    mailId: "kiranmail@gmail.com",
    Address: {
      "city Name": "Karimnagar",
      District: "Karimnagar district",
      pin: 526894,
    },
    Hobbies: ["Gaming", "Cooking", "Music"],
  };
}

const empData = new EmployeeData();
const body = document.querySelector("#body");
console.log(body);

const mainBox = document.createElement("div");
mainBox.className = "mainbox";
body.appendChild(mainBox);

Object.keys(empData).map((emp) => {
  const empbox = document.createElement("div");
  empbox.className = `chenrayan`;
  mainBox.appendChild(empbox);
  const h2 = document.createElement("h2");
  h2.innerHTML = `name: ${empData[emp].name}`;
  empbox.appendChild(h2);
  const h3 = document.createElement("h3");
  h3.innerHTML = `Employee Id: ${empData[emp].empId}`;
  empbox.appendChild(h3);
  const addBox = document.createElement("div");
  addBox.className = "addressBox";
  empbox.appendChild(addBox);
  const h32 = document.createElement("h3");
  h32.innerHTML = "Address:";

  addBox.appendChild(h32);

  Object.keys(empData[emp].Address).map((add) => {
    const addComp = document.createElement("p");
    addComp.innerHTML = `<b>${add}: ${empData[emp].Address[add]}</b>`;

    addBox.appendChild(addComp);
  });

  const Hobbies = document.createElement("p");
  empbox.appendChild(Hobbies);
  const hobHeading = document.createElement("span");
  hobHeading.innerHTML = `<bold>Hobbies: </bold>`;

  Hobbies.appendChild(hobHeading);

  empData[emp].Hobbies.map((hobby, index) => {
    const HobbiesLength = empData[emp].Hobbies.length;
    const eachHobby = document.createElement("span");

    if (index + 1 !== HobbiesLength) {
      eachHobby.innerHTML = `${hobby},`;
    } else {
      eachHobby.innerHTML = `${hobby}.`;
    }
    Hobbies.appendChild(eachHobby);
  });
});
console.log(Object.keys(empData));
