// https://school.programmers.co.kr/learn/courses/30/lessons/86971

// 권장시간 60분 / 풀이시간 90분
function solution(n, wires) {
  let answer;
  let num = n;
  const criteria = n / 2;

  for (let i = 0; i < wires.length; i++) {
    const curWires = wires.filter((v, idx) => idx !== i);
    const visit = new Set();
    const stack = [curWires[0][0]];

    while (stack.length > 0) {
      const visitNode = stack.pop();
      visit.add(visitNode);
      const adjNodes = curWires
        .filter((v, i) => v[0] === visitNode || v[1] === visitNode)
        .map((nodes) => (nodes[0] === visitNode ? nodes[1] : nodes[0]));
      adjNodes.forEach((node) => {
        if (!visit.has(node)) stack.push(node);
      });
    }

    const diff = Math.abs(visit.size - criteria);

    if (num > diff) {
      num = diff;
      const anotherVisitSize = n - visit.size;
      answer = Math.abs(anotherVisitSize - visit.size);
    }
  }

  return answer;
}
