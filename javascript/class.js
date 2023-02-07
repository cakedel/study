"use strict";

// Object-oriented programming

// class : template 붕어빵을 만들 수 있는 '틀'
// 한 번만 선언한다.
// 데이터가 있지 않다.

// object : instance of a class
// 많이 선언할 수 있다.
// 실제 데이터가 들어간다.

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
