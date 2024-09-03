function solution(graph, start) {
  const visit = [];
  const queue = [start];

  const numsOfNode = new Set(graph.flat()).size;
  while (visit.length < numsOfNode) {
    const queuePop = queue.shift();
    if (!visit.includes(queuePop)) visit.push(queuePop);

    const lastVisit = visit[visit.length - 1];
    const adjacent = graph
      .filter((nodes) => nodes[0] === lastVisit)
      .map((nodes) => nodes[1]);
    if (adjacent.length > 0) adjacent.forEach((node) => queue.push(node));
  }

  return visit;
}

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ],
    1
  )
);

console.log(
  solution(
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    1
  )
);

// 모범답안
class Queue {
  constructor() {
    items = [];
    front = 0;
    rear = 0;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(graph, start) {
  const adjList = {};
  for (let [u, v] of graph) {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  }

  const visited = new Set();
  const queue = new Queue();

  queue.push(start);
  visited.add(start);
  const result = [start];

  while (!queue.isEmpty()) {
    const node = queue.pop();
    for (let neighbor of adjList[node] || []) {
      if (visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
        result.push(neighbor);
      }
    }
  }

  return result;
}
