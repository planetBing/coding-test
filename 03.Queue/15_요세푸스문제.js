/**
 * N명의 사람이 원 형태로 서 있고, 각 사람은 1부터 N까지 번호표
 * 임의의 숫자 K가 주어졌을 때 다음과 같이 사람을 없앰
 * - 1번 번호표를 가진 사람을 기준을 K번째 사람을 없앰
 * - 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 없앰
 * N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환
 */

//권장시간 30분, 풀이시간 15분
function solution(n, k) {
  const arr = [...Array(n)].map((v, i) => i + 1);

  while (arr[k - 1]) {
    arr.splice(k - 1, 1);
    const first = arr.shift();
    arr.push(first);
  }

  return arr;
}

//모범답안
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

  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }
}

function solution(N, K) {
  const queue = new Queue();

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop());
    }
    queue.pop();
  }

  return queue.pop();
}

console.log(solution(5, 2));

console.log(solution(5, 2));
