//https://school.programmers.co.kr/learn/courses/30/lessons/12985

// 다시 풀어보기
function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
