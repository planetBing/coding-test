// https://school.programmers.co.kr/learn/courses/30/lessons/64061
// 권장시간 60분 / 풀이시간 17분

function solution(board, moves) {
  let num = 0;
  const stack = [];

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        if (
          stack.length > 0 &&
          stack[stack.length - 1] === board[i][move - 1]
        ) {
          stack.pop();
          num += 2;
        } else {
          stack.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return num;
}

// 그림을 이해하는데 그치지 말고 스스로 다시 그릴 수 있어야 한다!
// board 배열을 스택으로 변환하기

function solution(board, moves) {
  // 각 열에 대한 스택 생성
  const lanes = [...Array(board[0].length)].map(() => []);

  // board를 역순으로 탐색하며, 각 열의 인형을 lanes에 추가
  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j]) {
        lanes[j].push(board[i][j]);
      }
    }
  }

  const basket = [];
  let answer = 0;

  for (const m of moves) {
    if (lanes[m - 1].length > 0) {
      const doll = lanes[m - 1].pop();
      if (basket.length > 0 && bucket[bucket.length - 1] === doll) {
        bucket.pop();
        answer += 2;
      } else {
        bucket.push(doll);
      }
    }
  }

  return answer;
}
