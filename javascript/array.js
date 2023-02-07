// 자료구조 : 비슷한 성질과 type의 object등을 묶어놓는 것
// dynamically typed language의 특성으로 비슷한 성질과 아닌 것

const arr1 = new Array();
const arr2 = [1, 2];

// Index positon

const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎
console.log(fruits[2]); // undefined
console.log(fruits.length - 1); // 🍌

// Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let fruits of fruits) {
  console.log(fruits);
}
// c. forEach
fruits.forEach(() => console.log(fruit));

// 배열에 데이터 넣고 빼고 복사하기
// push : add an item to the end
fruits.push("🥭", "🍑");
// pop: remove an item from the end
fruits.pop(); // 마지막 데이터를 뺀다.
fruits.pop(); // 마지막 데이터를 뺀다.
// unshift: add an item to the beginning
fruits.unshift("🍒", "🍅");
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift(); // 처음의 데이터를 뺀다.
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

//  splice : remove an item by index position
fruits.splice(1); // index 1부터 끝까지
fruits.splice(1, 1); // index 1부터 1까지
fruits.splice(1, 1, "🍋");

// combine two arrays
const fruit2 = ["🍐", "🍏"];
const newFruits = fruits1.concat(fruit2);

// searching find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍋"));
console.log(fruits.inclues("🍋"));

console.clear
console.log(fruits)