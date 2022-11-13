// 정수 n이 주어질 때 n 이하의 짝수들을 모두 더한 값을 구하는 함수 작성하기

n = 10;

const solution = () => {
  const array = Array.from({ length: n }, (v, i) => i + 1);
  // 길이가 n 인 배열 array를 만든다.
  console.log(array);
  const even = array.filter((i) => i % 2 === 0);
  // 배열 array에서 filter 메소드로 짝수를 걸러낸 새로운 배열 even을 만들어낸다.
  console.log(even);
  return even.reduce((i, v) => i + v);
  // 배열 even의 값을 모두 더하는 메소드 reduce를 사용해 값을 도출한다.
};

console.log(solution());
// 30

const betterSolution = () => {
  let sum = 0;
  // 변수 sum을 선언해 값을 담는다.
  for (i = 2; i <= n; i += 2) {
    // for문 초기문이 2이고, 조건문이 n이하, 증감문에서 2씩 증가시키고
    sum += i;
    // sum에 for문을 돌때마다 i를 더한다.
  }
  return sum;
  // sum을 반환한다.
};

console.log(betterSolution());
// 30

const same = (array, n) => {
  const newArray = array.filter((it) => it === n);
  // 배열 array에서 정수 n의 값과 일치하는 값들만 뽑아 새로운 배열 newArray 만들기
  return newArray.length;
  // newArray의 길이를 return
};

const height = (array, height) => {
  return array.filter((it) => it > height).length;
  // 배열에서 height보다 큰 값을 찾아 새로운 배열을 만든 후 배열의 길이 반환
};

const anotherHeight = (array, height) => {
  let count = 0;
  // 머쓱이보다 키 큰 사람 변수 count 선언
  for (i of array) {
    if (height < i) {
      // for of문을 사용하여 배열 안의 값 i 가 height보다 클 경우
      count++;
      // count에 증감 연산자로 1을 더해준다
    }
  }
  return count;
  // count 반환
};

const cote7 = (n) => {
  // 피자 7조각으로 정수 n을 나눠서
  // 소수점을 올림하는 함수 Math.ceil() 사용
  return Math.ceil(n / 7);
};

const cote8_1 = (num_list) => {
  // 배열 num_list를 뒤집는 메소드 reversse() 사용
  return num_list.reverse()
}

const cote8_2 = (num_list) => {
  // 배열 num_list에서 짝수를 걸러 새로운 배열로 만든 후 배열의 길이 재기
  const even = num_list.filter((el) => el % 2 === 0).length
  // 배열 num_list에서 홀수를 걸러 새로운 배열로 만든 후 배열의 길이 재기
  const odd = num_list.filter((el) => el % 2 === 1).length
  // 변수 even과 odd를 배열로 만들어 반환
  return [even, odd]
}