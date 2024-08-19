// https://school.programmers.co.kr/learn/courses/30/lessons/42586

//권장시간 40분 / 풀이시간 65분
function solution(progresses, speeds) {
  const answer = [];
  const queue = [];

  const days = progresses.map((v, i) => {
    return Math.ceil((100 - v) / speeds[i]);
  });

  days.forEach((day, i) => {
    if (!queue[0]) {
      queue.push(day);
    } else if (queue[0] >= day) {
      queue.push(day);
      if (i === days.length - 1) answer.push(queue.length);
    } else if (queue[0] < day) {
      answer.push(queue.length);
      queue.length = 0;
      queue.push(day);
      if (i === days.length - 1) answer.push(queue.length);
    }
  });

  return answer;
}

//모범 답안
function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length;

  const daysLeft = progresses.map(
    (progress, index) => Math.ceil(100 - progress) / speeds[index]
  );

  let count = 0;
  let maxDay = daysLeft[0];

  for (let i = 0; i < n; i++) {
    if (daysLeft[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }

  answer.push(count);
  return answer;
}
