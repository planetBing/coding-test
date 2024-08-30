//https://school.programmers.co.kr/learn/courses/30/lessons/12981

// 권장시간 40분 / 풀이시간 58분
function solution(n, words) {
  const answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    const dup = words.indexOf(words[i]) !== i;
    let wrong = "";
    if (words[i - 1])
      wrong = words[i - 1][words[i - 1].length - 1] !== words[i][0];
    if (dup || wrong || words[i].length <= 1) {
      if ((i + 1) % n !== 0) {
        answer[0] = (i + 1) % n;
        answer[1] = Math.floor((i + 1) / n) + 1;
      } else {
        answer[0] = n;
        answer[1] = (i + 1) / n;
      }
      break;
    }
  }

  return answer;
}
