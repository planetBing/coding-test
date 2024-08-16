//https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  const strArr = s.split("");
  let num = 0;
  const map = { ")": "(", "}": "{", "]": "[" };

  function isTrue(input) {
    const stack = [];
    for (const str of input) {
      if (str === "(" || str === "{" || str === "[") {
        stack.push(str);
      } else {
        if (stack.length === 0) {
          return false;
        } else {
          if (stack[stack.length - 1] === map[str]) stack.pop();
        }
      }
    }

    return stack.length === 0;
  }

  for (let i = 0; i < s.length; i++) {
    if (isTrue(strArr)) num++;
    const first = strArr.shift();
    strArr.push(first);
  }

  return num;
}
