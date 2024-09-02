// 권장 시간 30분 / 풀이시간 50분
function solution(graph, start) {
  const visit = [];
  const stack = [start];

  const numsOfNode = new Set(graph.flat()).size;
  while (visit.length < numsOfNode) {
    const stackPop = stack.pop();
    if (!visit.includes(stackPop)) visit.push(stackPop);

    const lastVisit = visit[visit.length - 1];
    const adjacent = graph
      .filter((nodes) => nodes[0] === lastVisit)
      .map((nodes) => nodes[1])
      .reverse();
    if (adjacent.length > 0) adjacent.forEach((node) => stack.push(node));
  }

  return visit;
}

console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
);
console.log(
  solution(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
);

// 모범답안
function solution(graph, start) {
  const adjList = {};
  graph.forEach(([u, v]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  });

  function dfs(node, visited, result) {
    visited.add(node);
    result.push(node);
    (adjList[node] || []).forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        dfs(neighbor, visited, result);
      }
    });
  }

  const visited = new Set();
  const result = [];
  dfs(start, visited, result);

  return result;
}
