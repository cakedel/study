const solution = (numbers) => {
  return numbers.reduce((v, i) => v + i) / numbers.length;
  // 배열 안의 값들을 모두 더하는 메서드 reduce를 사용한뒤
  // 배열의 길이로 합을 나눠 평균을 도출
};

const c = (numbers) => {
  let sum = 0;
  // 값을 담을 변수 선언
  // const 로 선언할 시
  for (i of numbers) {
    sum += i;
  }
  // for of 로 배열을 돌면서 sum에 i의 값을 더해준다
  return sum / numbers.length;
  // 더해준 값에 배열의 길이를 나누기
};

const b = (n, k) => {
  const sheep = 12000;
  const beverage = 2000;
  // 양꼬치와 음료수의 가격을 변수로 선언
  const service = Math.floor(n / 10);
  // 서비스 받은 음료의 값을 구하는 변수 작성
  // 10인분에 음료 1개씩 서비스이므로 양꼬치의 양을 10인분으로 나눠서
  // 나머지를 버리는 Math.floor 함수 작성
  return sheep * n + beverage * (k - service);
  // 총 먹은 음료수의 갯수에서 서비스받은 음료수의 갯수를 빼고 가격 return
};

const array = [190, 140, 167, 172];
const height = 170;

const compare = (array, height) => {
  for (i = 0; i < array.length; i > height) {
    console.log(i);
  }
};

compare();