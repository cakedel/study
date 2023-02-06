"use strict";

// class : template
// object : instance of a class

class person {
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name}:hello!`);
  }
}

const jiwon = new person("jiwon", 20);
console.log(jiwon.name);
console.log(jiwon.age);
jiwon.speak();

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);
