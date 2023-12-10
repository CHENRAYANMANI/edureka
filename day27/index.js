(function () {
  alert("hello employee");
})();

const fetchData = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
    .then((data) => data.slice(0, 10));
};

const getData = async () => {
  const data = await fetchData();

  if (data !== undefined) {
    const mainbox = document.querySelector(".mainbox");

    const timer = setInterval(() => {
      data.map((che) => {
        const div = document.createElement("div");
        div.className = "box";

        const h3 = document.createElement("h3");
        h3.innerHTML = `${che.id},${che.title}`;
        div.appendChild(h3);
        mainbox.appendChild(div);
      });
      setTimeout(() => {
        clearInterval(timer);
      }, 5000);
    }, 1000);
  }
};
getData();
// function generateFibonaccis(n) {
//   var fib = [1, 1];
//   for (var i = 2; i < n; i++) {
//     fib[i] = fib[i - 2] + fib[i - 1];
//   }
//   return fib;
// }
// var fib = generateFibonaccis(10);
// console.log(fib.join(" "));
// for (let i = 0; i < 5; i++) {
//   console.log(i, "hello");
// }
// for (let i = 0; i <= 5; i++) {
//   let a = " ";
//   for (let j = 1; j <= i; j++) {
//     a += "*";
//   }
//   console.log(a);
// }
