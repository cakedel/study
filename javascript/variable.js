// 1. Use strict
// added in ES 5
// use this for Vanila Javascript
"use strict";

// 2. Varaible (read and write)
// let (added in ES6)

let name = "cakedel";

// Block scope - 밖에서 블록 안의 것들을 볼 수 없다.
{
}

// Gloabal scope - 블록 밖의 전역 스코프. 최소한으로 쓰는 것이 좋다. 메모리에 항상 할당되어있음.

// var (don't ever use this)
// hoisitng : 어디에 선언했냐에 상관없이 선언을 제일 위로 끌어올려지는 것.

// Constanst : 값을 선언함과 동시에 할당한다. (read only)
// Imaatable Data type
// 1. security
// 2. thread safety 동시에 값을 변경하지 않도록!
// 3. reduce human mistakes 실수로 변수에 다른 값을 할당하지 않도록

// 4. Variable types
// pirmitive type - 더 이상 나눠질 수 없는 작은 데이터 타입
// number, string, boolean, null undefined, symbol
// object, box container
const jiwon = { name: "jiwon", age: 20 };
jiwon.age = 20;

// function, first-class function

// intgar - 정수
// decimal number - 소수
// number - speicla numeric values: infinity, -infinity, NaN (Not a number)

// 범위 2 (-2**53 ~ 2**53)
const bigInt = 2231244244241245315443664346466176477899n;

// string
const char = "c";
const brendan = "jiwon";

// null
let nothing = null;
console.log(`value: ${nothing}, type:${typeof nothing}`);

// undefined
let x;
console.log(`value:${x}, type:${typeof x}`);

// symbol, create unique identifise for objects
// 고유한 식별자를 만들 때 쓰인다.
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

// 5. Dynamic typing : Dynamically typed language
