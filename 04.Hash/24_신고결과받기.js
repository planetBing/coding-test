// https://school.programmers.co.kr/learn/courses/30/lessons/92334

// 권장시간 80분 /  풀이시간 42분
function solution(id_list, report, k) {
  const suspended = [];

  const numMap = id_list.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  const userMap = report.reduce((acc, cur) => {
    const [from, to] = cur.split(" ");
    if (!acc[from]) {
      acc[from] = [to];
      numMap[to]++;
    } else {
      if (!acc[from].includes(to)) {
        acc[from].push(to);
        numMap[to]++;
      }
    }
    return acc;
  }, {});

  for (let n in numMap) {
    if (numMap[n] >= k) suspended.push(n);
  }

  const answer = id_list.map((user) => {
    if (userMap[user]) {
      return userMap[user].filter((v) => suspended.includes(v)).length;
    } else {
      return 0;
    }
  });

  return answer;
}
