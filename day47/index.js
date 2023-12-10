function minCoins(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity); // Initialize an array to store minimum coin counts
  dp[0] = 0; // 0 coins needed to make amount 0

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]; // Return -1 if it's not possible to make the amount
}

const totalAmount = 256;
const coinDenominations = [1, 5, 10, 25, 50, 100];
const minimumCoins = minCoins(coinDenominations, totalAmount);

console.log(minimumCoins); // Output: 6 (1 coin of 100, 1 coin of 50, 1 coin of 5)
