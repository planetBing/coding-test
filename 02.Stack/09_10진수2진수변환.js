function solution(input) {
  let num = input;
  const stack = [];

  while (num / 2 !== 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }

  return stack.reverse().join("");
}

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));
console.log(solution(0));
console.log(solution(1));

function solution(decimal) {
  const stack = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let bin = "";
  while (stack.length > 0) {
    bin += stack.pop();
    //join()활용 가능
  }

  return bin;
}
