const ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];

const avgRating = () => {
  const headers = Array.from(new Set(ratingData.map((val) => val.restaurant)));
  console.log(headers);

  let arr = [];
  headers.map((head) => {
    let total = 0;
    let count = 0;
    const filteredRatingData = ratingData.filter(
      (obj) => obj.restaurant === head
    );

    total = filteredRatingData.reduce((prev, next) => {
      count++;
      return prev + next.rating;
    }, 0);

    arr.push({ restaurant: head, avgRating: (total / count).toFixed(2) });
  });
  return arr;
};
const arr = avgRating();
console.log("arr:", arr);
console.log(arr.filter((item) => item.avgRating >= 4));
