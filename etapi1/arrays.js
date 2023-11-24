/*1)Find the Maximum Subarray Sum: Write a function that takes an array of integers as input and finds the contiguous subarray within the array that has the largest sum. Return the sum of that subarray. For example, given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], the function should return 6, which corresponds to the sum of the subarray [4, -1, 2, 1].//
let arrays = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function theLargestSum(arr) {
  let sumOfElements = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      sumOfElements.push(sum);
    }
  }
  return Math.max(...sumOfElements);
}
console.log(theLargestSum(arrays));*/
/*იმ შემთხვევაში თუკი მომინდებოდა ინტერვალის და ამავე დროს ყველაზე დიდი ჯამის გამოტანა დავწერდი ასე://
let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function theLargestSum(arr) {
  let theLargestSum = -Infinity;
  let interval = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (theLargestSum < sum) {
        theLargestSum = sum;
        interval = arr.slice(i, j + 1);
      }
    }
  }
  return { theLargestSum, interval };
}
console.log(theLargestSum(array));*/

/*2)Rotate Array: Write a function that rotates an array of n elements to the right by k steps. For example, given the array [1, 2, 3, 4, 5, 6, 7] and k = 3, the function should modify the array to become [5, 6, 7, 1, 2, 3, 4].//
let array = [1, 2, 3, 4, 5, 6, 7];
function modifiedArray(arr) {
  let splicedArray = arr.splice(3);
  return splicedArray.concat(arr);
}
console.log(modifiedArray(array));*/

/*3)Find Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number. For example, given the array [3, 0, 1], the function should return 2.//
let array = [3, 0, 1];
function missingNumber(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] != 1) {
      return arr[i] + 1;
    }
  }
}
console.log(missingNumber(array));*/

/*4)Merge Intervals: Given an array of intervals, merge overlapping intervals and return the resulting merged intervals. For example, given the intervals [[1,3],[2,6],[8,10],[15,18]], the function should return [[1,6],[8,10],[15,18]].//
let array = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
function mergeIntervals(arr) {
  let mergedIntervals = [];
  let curentInterval = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const interval = arr[i];
    if (interval[0] <= curentInterval[1]) {
      curentInterval[1] = Math.max(interval[1], curentInterval[1]);
    } else {
      mergedIntervals.push(curentInterval);
      curentInterval = interval;
    }
  }
  mergedIntervals.push(curentInterval);
  return mergedIntervals;
}
console.log(mergeIntervals(array));*/

/*5)დაწერეთ პროგრამა მრავალ მასივებს შორის საერთი ელემენტების მოსაძებნად.//
let arr1 = [1, 3, 6, 2, 8, 4];
let arr2 = [1, 3, 6, 2, 8, 4, 20, 12, 45];
let arr3 = [1, 3, 6, 2];
function findCommonElement(...arrays) {
  let array = [...arrays];
  let commonElements = [];
  let startElement = array[0];
  for (let i = 0; i < startElement.length; i++) {
    let element = true;
    let curentElement = startElement[i];
    for (let j = 1; j < array.length; j++) {
      if (!array[j].includes(curentElement)) {
        element = false;
        break;
      }
    }
    if (element) {
      commonElements.push(curentElement);
    }
  }
  return commonElements;
}
console.log(findCommonElement(arr1, arr2, arr3));*/
/*seconde variant:
let arr1 = [1, 3, 6, 2, 8, 4];
let arr2 = [1, 3, 6, 2, 8, 4, 20, 12, 45];
let arr3 = [1, 3, 6, 2];
function findCommonElement(...array) {
  let arr = [...array];
  let commonElements = arr.reduce((a, b) =>
    a.filter((item) => b.includes(item))
  );
  return commonElements;
}
console.log(findCommonElement(arr1, arr2, arr3));*/
