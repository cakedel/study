// lorgical operators

const value1 = false;
const value2 = 4 > 2;

// || (or)
// 하나라도 true가 나오면 연산을 멈춘다.
// heavy한 operation일수록 뒤에 놓기.

console.log(`or: ${value1 || value2 || check()}`);

// && (and)

// == 값이 같아야한다.
// === type도 같아야한다.

// equality  - puzzler

console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// if else

// ternary operater : 가독성이 떨어지기 때문에 가려서 써야한다.

// switch statement
// use for multipe if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = "IE";

switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// Loops
// While loop, while the condition is trutly
let i = 3;
while (i > 0) {
  console.log(`do while : ${i}`);
  i--;
}

// for loop
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

// break loop 끝내기
// continue loop 계속하기

for (i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

for (i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(i)
}
