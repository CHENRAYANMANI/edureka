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
let userData = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officiaqui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui cmmkdsnif jddnjfkjn dnsjnnj",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "jdknvvkndf kdfnklnfnd fjngdkjxx..knn k ",
    completed: false,
  },
];

const getData = () => {
  const myPromise = new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(userData);
    }, 5000)
  );
  return myPromise;
};
const myFun = async () => {
  const x = await getData();
  console.log(x);
  x.map((che) => {
    console.log(che.title);
  });
};
myFun();

const spreadFunction = () => {
  let arr = [...restaurantList, ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 1000000]];
  console.log(arr);
};
spreadFunction();

const reatFunction = (...che) => {
  che.map((x) => {
    console.log(x);
  });
};
reatFunction(...restaurantList);
