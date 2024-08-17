//https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  const stack = [];
  // s.split("").forEach((str) => {
  //     if(stack.length > 0 && stack[stack.length - 1] !== str) {
  //         stack.push(str)
  //     } else {
  //         stack.pop();
  //     }
  // })
  s.split("").forEach((str) => {
    if (stack.length > 0 && stack[stack.length - 1] === str) {
      stack.pop();
    } else {
      stack.push(str);
    }
  });
  return stack.length === 0 ? 1 : 0;
}

//조건 순서가 바뀌기만 했는데 시간 효율성이 더 증가함
// 이유는 동일한 문자가 연속적으로 나올 때 pop()을 먼저하는 게 더 효율적이기 때문!
