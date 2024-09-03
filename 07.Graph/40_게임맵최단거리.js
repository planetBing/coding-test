// https://school.programmers.co.kr/learn/courses/30/lessons/1844

//다시 풀어보기
class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

function solution(maps) {
  const move = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  const n = maps.length;
  const m = maps[0].length;

  const dist = Array.from({ length: n }, () =>
    Array.from({ length: m }).fill(-1)
  );

  function bfs(start) {
    const queue = new Queue();
    queue.push(start);
    dist[start[0]][start[1]] = 1;

    while (!queue.isEmpty()) {
      const here = queue.pop();
      const moves = move.map(([u, v]) => [u + here[0], v + here[1]]);

      for (const [row, col] of moves) {
        if (row < 0 || row >= n || col < 0 || col >= m) {
          continue;
        } else if (maps[row][col] === 0) {
          continue;
        } else if (dist[row][col] === -1) {
          queue.push([row, col]);
          dist[row][col] = dist[here[0]][here[1]] + 1;
        }
      }
    }
    return dist;
  }

  bfs([0, 0]);

  return dist[n - 1][m - 1];
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
