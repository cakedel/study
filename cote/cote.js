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

const betterSolution = () => {
  let sum = 0;
  // 변수 sum을 선언해 값을 담는다.
  for (i = 2; i <= n; i += 2) {
    // for문을 통해 초기문이 2이고, 조건문이 n이하, 증감문에서 2씩 증가시키고
    sum += i;
    // sum에 for문을 돌때마다 i를 더한다.
  }
  return sum;
  // sum을 반환한다.
};

console.log(betterSolution())
