// https://school.programmers.co.kr/learn/courses/30/lessons/87946

// 다시 풀어보기
// function dfs(curK, cnt, dungeons, visited) {
//   let answerMax = cnt;
//   for (let i = 0; i < dungeons.length; i++) {
//     if (curK >= dungeons[i][0] && visited[i] === 0) {
//       visited[i] = 1;
//       answerMax = Math.max(
//         answerMax,
//         dfs(curK - dungeons[i][1], cnt + 1, dungeons, visited)
//       );
//       visited[i] = 0;
//     }
//   }

//   return answerMax;
// }

// function solution(k, dungeons) {
//   const visited = Array(dungeons.length).fill(0);
//   const answerMax = dfs(k, 0, dungeons, visited);
//   return answerMax;
// }

//비재귀 풀이방식
function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(0);
  let answerMax = 0;
  const stack = [{ curK: k, cnt: 0, visited: [...visited] }]; // 스택에 초기 상태 저장

  while (stack.length > 0) {
    const { curK, cnt, visited } = stack.pop();
    answerMax = Math.max(answerMax, cnt); // 최대 방문한 던전 수 갱신

    for (let i = 0; i < dungeons.length; i++) {
      // 방문하지 않았고 현재 피로도로 던전을 탐험할 수 있는지 확인
      if (curK >= dungeons[i][0] && visited[i] === 0) {
        const newVisited = [...visited]; // 새로운 방문 상태 복사
        newVisited[i] = 1; // 던전 방문 표시
        stack.push({
          curK: curK - dungeons[i][1], // 새로운 피로도
          cnt: cnt + 1, // 방문 던전 수 증가
          visited: newVisited, // 새로운 방문 상태 저장
        });
      }
    }
  }

  return answerMax;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
