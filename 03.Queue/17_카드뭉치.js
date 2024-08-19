// https://school.programmers.co.kr/learn/courses/30/lessons/159994

// 권장시간 40분 / 풀이시간 10분
function solution(cards1, cards2, goal) {
  function isTrue(goal) {
    for (const s of goal) {
      if (s !== cards1[0] && s !== cards2[0]) {
        return false;
      } else {
        s === cards1[0] ? cards1.shift() : cards2.shift();
      }
    }

    return true;
  }

  return isTrue(goal) ? "Yes" : "No";
}

// shift()를 사용해서 시간 복잡도가 올라갈 것 같다

class Queue {
  constructor(array = []) {
    this.items = array;
    this.front = 0;
    this.rear = array.length;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  first() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.front == this.rear;
  }
}

function solution(cards1, cards2, goal) {
  cards1 = new Queue(cards1);
  cards2 = new Queue(cards2);
  goal = new Queue(goal);

  while (!goal.isEmpty()) {
    if (!cards1.isEmpty() && cards1.first() === goal.first()) {
      cards1.pop();
      goal.pop();
    } else if (!cards2.isEmpty() && cards2.first() === goal.first()) {
      cards2.pop();
      goal.pop();
    } else {
      break;
    }
  }

  return goal.isEmpty() ? "Yes" : "No";
}
