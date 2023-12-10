function knapsack(values, weights, W) {
  const n = values.length;
  const dp = new Array(n + 1).fill(null).map(() => new Array(W + 1).fill(0));
  //   console.log(dp);
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  const max_value = dp[n][W];
  const selected_items = [];

  let w = W;
  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selected_items.push(i - 1);
      w -= weights[i - 1];
    }
  }

  return { max_value, selected_items };
}

// Example usage:
const values = [60, 100, 120];
const weights = [10, 20, 30];
const W = 50;
const result = knapsack(values, weights, W);
console.log("Maximum value:", result.max_value);
// console.log("Selected items:", result.selected_items);
