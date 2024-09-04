// https://school.programmers.co.kr/learn/courses/30/lessons/12978

// 권장시간 80분 / 풀이시간 140분
function solution(N, road, K) {
  //[최소비용, 직전노드]
  const record = Array.from({ length: N }, () => [5000000, 50000000]);
  record[0][0] = 0;
  record[0][1] = 0;

  const visit = new Set();
  const queue = [0];

  while (queue.length !== 0) {
    const minCostNode = queue.reduce(
      (acc, cur) => {
        if (record[cur][0] <= acc[1]) {
          acc[0] = cur;
          acc[1] = record[cur][0];
        }
        return acc;
      },
      [-1, 5000000]
    )[0];

    const curNodeIdx = queue.indexOf(minCostNode);
    if (curNodeIdx > -1) queue.splice(curNodeIdx, 1);

    visit.add(minCostNode);

    const adjNode = road.filter(
      (v) => v[0] - 1 === minCostNode || v[1] - 1 === minCostNode
    );

    adjNode.forEach(([start, end, hour]) => {
      const node = start - 1 === minCostNode ? end - 1 : start - 1;
      if (!visit.has(node)) {
        const newCost = record[minCostNode][0] + hour;
        if (newCost < record[node][0]) {
          record[node][0] = record[minCostNode][0] + hour;
          record[node][1] = minCostNode;
          queue.push(node);
        }
      }
    });
  }

  return record.filter(([cost, _]) => cost <= K).length;
}

// 굳이 직전 노드 정보는 필요하지 않은듯
// splice 대신 pop 이용해도 됨
