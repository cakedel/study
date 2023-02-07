// Objects
// 자바스크립트의 데이터 타입 중 하나
// a collection of related data and/or fuctionally
// object = { key: value};

// 1. Literals and properties
const obj1 = {}; //'object literal syntax
const obj2 = new Object(); // 'object contructor' syntax

const jiwon = { name: "jiwon", age: 3 };
print(jiwon);

jiwon.hasJob = false; // object 타입 추가. 가능하면 피해서 코딩하자.
delete jiwon.hasJob; // 지우기도 가능.

// 2. Computed properties
console.log(jiwon.name); // 출력
console.log(jiwon["name"]); // run time 에서 결정될 때

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new person("jiwon", 20);
console.log(person4);

// 4. Constructor fuction
// 자동으로 새로운 object를 만들어줌
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  return this;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in jiwon); // true

// 6. for ...in vs for ...of
// for (key in obj)

for (key in jiwon) {
  console.log(key); // jiwon object 안에 있는 키들을 호출
}

// for (value of iterable)

const array = [1, 2, 3, 4];

for (let i = 0; i < array.length; i++);
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const user = { name: "jiwon", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

// anotehr example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color); // blue
console.log(mixed.size); // big
