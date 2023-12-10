const add = (x) => {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
};
console.log(add(20)(20)(20));
