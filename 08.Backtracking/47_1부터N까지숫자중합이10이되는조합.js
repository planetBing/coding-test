// 다시 풀어보기

function solution(N) {
  const results = [];

  function backtrack(sum, selectedNums, start) {
    if (sum === 10) {
      results.push(selectedNums);
      return;
    }

    for (let i = start; i <= N; i++) {
      if (sum + i <= 10) {
        console.log(selectedNums.concat(i));
        backtrack(sum + i, selectedNums.concat(i), i + 1);
      }
    }
  }

  backtrack(0, [], 1);
  return results;
}

function solution(N) {
  const results = [];
  const stack = [{ sum: 0, selectedNums: [], start: 1 }]; // 스택 초기화

  while (stack.length > 0) {
    // 스택에서 현재 상태를 꺼냄
    console.log(stack);
    const { sum, selectedNums, start } = stack.pop();

    // 합이 10인 경우 결과에 추가
    if (sum === 10) {
      results.push(selectedNums);
      continue;
    }

    // 가능한 다음 숫자들을 스택에 추가
    for (let i = start; i <= N; i++) {
      if (sum + i <= 10) {
        stack.push({
          sum: sum + i,
          selectedNums: selectedNums.concat(i),
          start: i + 1,
        });
      }
    }
  }

  return results;
}

console.log(solution(5));
// console.log(solution(2));
// console.log(solution(7));
