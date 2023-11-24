/*1) Callback Basics: Write a function that takes a callback as an argument and calls it after a delay of 1 second.
setTimeout(() => console.log("Tiko"), 1000);*/

/*2)Promise Basics: Create a promise that resolves after 2 seconds and logs a success message.
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success! Promise resolved after 2 seconds");
  }, 2000);
});
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });*/
//3)Promise Chain: Create a chain of promises where each resolves after 1 second and logs a message.
function promiseMessage(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 1000);
  });
}
promiseMessage("first promise")
  .then((data) => {
    console.log(data);
    return promiseMessage("second promise");
  })
  .then((data) => {
    console.log(data);
    return promiseMessage("third promise");
  })
  .then((data) => console.log(data));
//4)Async/Await: Write an asynchronous function using async/await that simulates fetching data from an API after 2 seconds.

//5)Error Handling: Modify the previous example to include error handling using try/catch.

//6)Fetch API: Use the Fetch API to make a simple GET request to a mock API and log the response.

//7)Async Function with Fetch: Create an asynchronous function that uses the Fetch API to get data from an API and log it.
