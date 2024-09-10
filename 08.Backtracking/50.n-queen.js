// https://school.programmers.co.kr/learn/courses/30/lessons/12952

// 다시 풀어보기
function solution(n) {
  const queens = [];
  let count = 0;

  function possible(x, y) {
    for (const [a, b] of queens) {
      if (a === x || b === y) return false;
      if (Math.abs(a - x) === Math.abs(b - y)) return false;
    }

    return true;
  }

  function dfs(row) {
    if (row == n) {
      count++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!possible(row, i)) continue;
      queens.push([row, i]);
      dfs(row + 1);
      queens.pop();
    }
  }

  dfs(0);

  return count;
}

console.log(solution(4));
