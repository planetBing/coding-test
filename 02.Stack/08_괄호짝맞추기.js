// 소괄호가 정상적으로 열고 닫혔는지 판별하는 solution() 함수 구현
// 소괄호가 정상적으로 열고 닫혔다면 true를, 그렇지 않다면 false를 반환

function solution(input) {
  const stack = [];
  input.split("").forEach((str) => {
    if (str === "(") {
      stack.push(str);
    } else {
      if (stack.length > 0) stack.pop();
    }
  });
  return stack.length === 0;
}

//모범답안
function solution(s) {
  const stack = [];
  for (const c of s) {
    if (c === "(") {
      stack.push(c);
    } else if (c === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

console.log(solution("(())()"));
console.log(solution("((())()"));
console.log(solution(")("));
console.log(solution("()"));
