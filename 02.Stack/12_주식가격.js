// https://school.programmers.co.kr/learn/courses/30/lessons/42584
// 권장시간 40분 / 풀이시간 24분

function solution(prices) {
  const answer = [];

  prices.forEach((price, i) => {
    let num = 0;
    for (let j = i; j < prices.length - 1; j++) {
      if (prices[j] < price) break;
      num++;
    }
    answer.push(num);
    num = 0;
  });

  return answer;
}
// 위 풀이방법(내 풀이방법)은 O(N^2) 알고리즘으로 코드를 구현한 것 => 시간 복잡도를 개선해보자!

// O(N) 풀이방법
function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0); //가격이 떨어지지 않은 기간을 저장한 배열

  //스택을 사용해 이전 가격과 현재 가격을 비교 (스택에는 인덱스값이 들어감)
  const stack = [0]; // 스택 초기화
  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      // 가격이 떨어졌으므로 이전 가격의 기간을 계산
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  //스택에 남아있는 가격들은 가격이 떨어지지 않은 경우
  while (stack.legnth > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j;
  }

  return answer;
}
