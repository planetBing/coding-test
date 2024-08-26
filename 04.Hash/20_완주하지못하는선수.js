// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 나중에 꼭 다시 풀기
function solution(participant, completion) {
  let answer = "";
  const mapping = {};

  participant.forEach((c) => {
    mapping[c] ? mapping[c]++ : (mapping[c] = 1);
  });

  for (const c of completion) {
    mapping[c]--;
  }

  for (let p in mapping) {
    if (mapping[p] > 0) answer = p;
  }

  return answer;
}

function solution(participant, completion) {
  let answer = "";

  const mapping = participant.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  completion.forEach((c) => {
    if (mapping[c]) mapping[c]--;
  });

  for (let m in mapping) {
    if (mapping[m] > 0) answer = m;
  }
  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
