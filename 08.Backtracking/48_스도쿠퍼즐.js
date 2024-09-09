/**
 * 9 x 9 스도쿠 보드를 다 채워 완성된 스도쿠 보드를 반환하는 solution 함수
 */

//다시 풀어보기
function solution(board) {
  function isValid(num, row, col) {
    return !(inRow(num, row) || inCol(num, col) || inBox(num, row, col));
  }

  function inRow(num, row) {
    return board[row].includes(num);
  }

  function inCol(num, col) {
    return board.some((row) => row[col] === num);
  }

  function inBox(num, row, col) {
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num) {
          return true;
        }
      }
    }
    return false;
  }

  function findEmptyPosition() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return null;
  }

  function findSolution() {
    const emptyPos = findEmptyPosition();

    if (!emptyPos) {
      return true;
    }

    const [row, col] = emptyPos;
    for (let num = 1; num <= 9; num++) {
      if (isValid(num, row, col)) {
        board[row][col] = num;
        if (findSolution()) {
          return true;
        }
        board[row][col] = 0;
      }
    }
    return false;
  }

  findSolution();
  return board;
}

console.log(
  solution([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
);

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);
