let soocha = 'people'
const greeting = 'hello'
// const로 선언된 변수는 상수로 바뀔 수 없다.

console.log(soocha)
// people

soocha = 'human'
// let으로 선언된 변수는 재정의 될 수 있다.

console.log(soocha)
// human

const amIFat = null;
// null thehre is nothing.
// bunch of nothings
// 의도적으로 비어있는 값.

let someting;
// not give in thi value
// undefined
// 값이 주어지지 않음

console.log(someting, amIFat);
// undefined null

const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// array
// 변수 안에 데이터를 list
// [] 대괄호를 사용한다.

console.log(week)
// ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
console.log(week[0])
// mon
// week array의 첫번쨰 값

week.push('day')
// week array 값에 무언가를 추가

console.log(week)
// ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'day']

week[0] = 'hard';
// week array 의 첫번쨰 데이터를 'hard'로 치환
console.log(week);
// ['hard', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'day']

const player = {
    name: 'soocha',
    points: 100,
    fat: true,
}
// 객체, object
// 객체의 속성, property값을 데이터화
// list 는 모든 값이 같은 의미를 가진다.

console.log(player.fat)
// true

player.fat = false;

console.log(player.fat)
// false

// const 변수 자체를 수정하는 것이 아니기 때문에 안의 property는 수정할 수 있다.


//  function 반복해서 쓸 수 있는 코드 조각
function sayHello(name, age) {
    // 함수에 sayHello 라는 이름을 지어주고 () 안에 인자(argument)를 넣어준다.
    console.log("Hello, my name is " + name + " and I'm " + age)
}
// 인자의 순서를 중요하게!

sayHello('simba', 20);
// Hello, my name is simba and I'm 20
sayHello('nala', 34);
// Hello, my name is nala and I'm 34
sayHello('scar', 75);
// Hello, my name is scar and I'm 75

function divide(a, b) {
    console.log(a / b);
}

divide(1, 6);
// 0.16666666666666666

const user = {
    greeting: function (otherPerson) {
        console.log('hello! ' + otherPerson + " nice to meet you");
    },
};
// 객체 안의 property 값에 함수를 할당 할 수 도 있다.
// otherPerson은 function 의 {body} 안에서만 사용할 수 있다! 

user.greeting("lynn")
// hello! lynn nice to meet you

user.personal = 'kind';
// 객체에 새로운 item 추가

console.log(user)


// Javascripit calculator
const calculator = {
    add: function (a, b) {
        console.log(a + b)
    },
    minus: function (a, b) {
        console.log(a - b)
    },
    divide: function (a, b) {
        console.log(a / b)
    },
    multi: function (a, b) {
        console.log(a * b)
    },
    power: function (a, b) {
        console.log(a ** b)
    },
};

calculator.add(1, 2);
calculator.minus(10, 2);
calculator.divide(9, 3);
calculator.multi(5, 4);
calculator.power(6, 6);

const calculate = {
    plus: function (a, b) {
        console.log("hello")
        return a + b
        // return은 함수의 값을 반환한다. 값을 외부로 보낸다.
        // 망고주스 믹서에서 망고를 꺼내는 것과 같다.
        console.log("bye bye")
        // return 이후 함수는 더이상 작동하지 않는다.
    }
}

const pulsResult = calculate.plus(2, 3);
// 함수 안에서 return하지 않으면 pulsResult는 undefined가 된다.

const age = parseInt(prompt("How old are you?"));
// prompt 브라우저 입력창을 띄우는 함수
// parseInt 입력값을 number type으로 바꿔주는 함수

console.log(age)
// type = number => 숫자 값
// type = string => NaN (숫자값이 아님을 뜻함)


// 조건문 boolean으로 판단 가능한 값
if (isNaN(age) || age < 0) {
    // age가 NaN일 경우 === true
    console.log("Please write a real positive number.");
} else if (age < 18) {
    // age가 NaN이 아니고 === false, 18 이상일 경우
    console.log("you're too young.");
} else {
    // age가 Nan이 아니고 === false, 18 미만일 경우
    console.log("you can drink.")
}