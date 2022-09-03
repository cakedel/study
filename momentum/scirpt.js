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
    console.log("Hello, my name is " + name + " and I'm " + age)
}
//순서를 중요하게!

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
    n: "user",
    greeting: function (otherPerson) {
        console.log('hello! ' + otherPerson + " nice to meet you");
    },
};
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

