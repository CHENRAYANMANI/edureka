function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index where the target is found
    }
  }
  return -1; // Return -1 if the target is not found in the array
}

const arr = [256, 32, 187, 56, 4, 99];
const target = 99;
const result = linearSearch(arr, target);

if (result !== -1) {
  console.log(`Element found at index[${result}]`);
} else {
  console.log(`Element not found in the array`);
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index where the target is found
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Return -1 if the target is not found in the array
}

const arr1 = [4, 32, 56, 99, 187, 256];
const target1 = 32;
const result1 = binarySearch(arr1, target1);

if (result !== -1) {
  console.log(`Element  at index[${result1}]`);
} else {
  console.log(`Element is not found in the sorted array`);
}
