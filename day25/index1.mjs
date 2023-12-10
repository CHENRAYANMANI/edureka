export const add = (...che) => {
  let sum = 0;
  che.map((x) => (sum += x));
  return sum;
};
