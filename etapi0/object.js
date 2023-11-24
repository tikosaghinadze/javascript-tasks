const prompt = require(`prompt-sync`)();
/*1)შექმენით ობიექტი სახელად Person,ობიექტს ექნება სახელი,გვარი,ასაკი.//
let person = {
  name:"Tiko"
  surname:"Saghinadze"
  age:23;
};*/

/*2)დაამატეთ ობიექტში  ფუნქცია სახელად  sayHello რომელიც დაპრინტავს ობიექტში სახელის values.//
let person = {
  name: "Tiko",
  surname: "Saghinadze",
  age: 23,
  sayHello: function () {
    return "Hello, " + this.name;
  },
};
console.log(person.sayHello());*/
/*3) წაშალეთ ასაკის property.//
let person = {
  name: "Tiko",
  surname: "Saghinadze",
  age: 23,
  sayHello: function () {
    return "Hello, " + this.name;
  },
};
delete person.name;
console.log(person);*/
/*4)დაამატეთ ობიექტში job.//
let person = {
  name: "Tiko",
  surname: "Saghinadze",
  age: 23,
  sayHello: function () {
    return "Hello, " + this.name;
  },
};
person.job = "secret";
console.log(person);*/
/*5)დაამატეთ ობიექტში ფუნქცია რომელიც დააბრუნებს ობიექტის job-ის სიგრძეს.//
let person = {
  name: "Tiko",
  surname: "Saghinadze",
  age: 23,
  job: "secret",
  sayHello: function () {
    return "Hello, " + this.name;
  },
  jobLength: function () {
    return this.job.length;
  },
};
console.log(person.jobLength());*/
/*6)ამის შემდეგ დაპრინტეთ უბრალოდ ობიექტში არსებული მეთოდების რაოდენობა.//
let person = {
  name: "Tiko",
  surname: "Saghinadze",
  age: 23,
  job: "secret",
  sayHello: function () {
    return "Hello, " + this.name;
  },
  jobLength: function () {
    return this.job.length;
  },
};
function countMethods(obj) {
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      count += 1;
    }
  }
  return count;
}
console.log("Number of methods in the object: " + countMethods(person));*/
/*7)გაარკვიეთ ,აქვს თუარა ობიექტს gender property ,თუ არაქვს ,მაშინ შექმენით მეთოდი .//
let person = {
  name: "Tiko",
  surname: "Saghinadze",
  age: 23,
  job: "secret",
  sayHello: function () {
    return "Hello, " + this.name;
  },
  jobLength: function () {
    return this.job.length;
  },
};
console.log(person.hasOwnProperty("gender"));
console.log("gender" in person);
person.gender = function () {
  return "female";
};
console.log(person.gender());*/
/*8)გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property.//
let person = {
  name: "Tiko",
  surname: "Saghinadze",
  age: 23,
  job: "secret",
  sayHello: function () {
    return "Hello, " + this.name;
  },
  jobLength: function () {
    return this.job.length;
  },
  gender: function () {
    return "female";
  },
};
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}*/
/*9)გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value.//
let person = {
  name: "Tiko",
  surname: "Saghinadze",
  age: 23,
  job: "secret",
  sayHello: function () {
    return "Hello, " + this.name;
  },
  jobLength: function () {
    return this.job.length;
  },
  gender: function () {
    return "female";
  },
};
for (let key in person) {
  console.log(person[key]);
}*/
