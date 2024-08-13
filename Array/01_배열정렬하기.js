function solution(input) {
  return input.sort((a, b) => a - b);
}

console.log(solution([1, -5, 2, 4, 3]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));
console.log(solution([6, 1, 7]));
