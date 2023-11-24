const _ = require("lodash");
/*1)Object Deep Comparison: Write a function that compares two objects deeply and returns true if they are equal, and false otherwise. The function should handle nested objects and arrays. For example, given the objects { a: 1, b: { c: 2 } } and { a: 1, b: { c: 2 } }, the function should return true.//
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { a: 1, b: { c: 2 } };
console.log(_.isEqual(obj1, obj2));*/
/*2)Object Transformation: Write a function that takes an array of objects and transforms them into a single object. The transformation should use a specific property of each object as the key and another property as the value. For example, given the array [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], and using the id property as the key and the name property as the value, the function should return { 1: 'Alice', 2: 'Bob' }.//
let objectsArray = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
function transformObjects(arr) {
  let transformedObjects = {};
  for (let i = 0; i < arr.length; i++) {
    let id = arr[i].id;
    let name = arr[i].name;
    transformedObjects[id] = name;
  }
  return transformedObjects;
}
console.log(transformObjects(objectsArray));*/

/*3)Object Serialization: Write a function that serializes an object into a string representation. The serialization should handle nested objects and arrays. For example, given the object { a: 1, b: { c: [2, 3] } }, the function should return the string "{ a: 1, b: { c: [2, 3] } }".//
let object = { a: 1, b: { c: [2, 3] } };
function serializedObject(obj) {
  let serializedObject = JSON.stringify(obj);
  return serializedObject;
}
console.log(serializedObject(object));*/

/*4)Object Prototype Extension: Write a function that extends an object's prototype with additional methods. The additional methods should perform specific operations on the object's properties. For example, extend the Array prototype with a method called sum() that calculates the sum of all elements in the array.//
let array = [1, 2, 3, 4];
Array.prototype.sum = function () {
  return this.reduce((total, curent) => total + curent);
};
console.log(array.sum());*/

/*5)Object Inheritance: Implement a class hierarchy using object-oriented programming principles. Create a base class with common properties and methods, and then create child classes that inherit from the base class and add their own specific properties and methods.//
class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  introduceSelf() {
    return `Hello i'm ${this.name} and i'm ${this.age} years old.`;
  }
}

class Professor extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  explain() {
    return `I'm professor teaching ${this.subject}`;
  }
}
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  study() {
    return `i,m studying at University faculty of ${this.major}`;
  }
}
const max = new Person("Max", 24);
console.log(max.introduceSelf());

const mathProfesor = new Professor("Tako", 27, "mathematics");
console.log(mathProfesor.introduceSelf(), mathProfesor.explain());

const historyStudent = new Student("Kate", 18, "history");
console.log(historyStudent.introduceSelf(), historyStudent.study());*/
