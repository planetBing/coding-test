// https://school.programmers.co.kr/learn/courses/30/lessons/43162

// 오답
function find(parent, i) {
  if (parent[i] === i) {
    return i;
  }

  parent[i] = find(parent, parent[i]);
  return parent[i];
}

function solution(n, computers) {
  const tree = Array(n).fill(-1);

  computers.forEach((v, i) => {
    v.forEach((c, j) => {
      if (c === 1) {
        if (tree[j] === -1) tree[j] = i;
      }
    });
  });

  const root = tree.map((v, i) => find(tree, i));

  return new Set(root).size;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);

//모범 답안
function dfs(computers, visited, node) {
  visited[node] = true;
  for (let idx = 0; idx < computers[node].length; idx++) {
    if (computers[node][idx] && !visited[idx]) {
      dfs(computers, visited, idx);
    }
  }
}

function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(computers, visited, i);
      answer++;
    }
  }

  return answer;
}
