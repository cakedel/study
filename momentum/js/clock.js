const clock = document.querySelector('.clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    // string.padStart(stringlength, "add string");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);


let age = 20;

if (age > 9) {
  // ()이 true일 때 {} 블록을 실행한다.
  console.log('child')
} else {
  // () 이외의 경우 else 이하의 {} 블록을 실행한다.
  console.log('not child')
}
