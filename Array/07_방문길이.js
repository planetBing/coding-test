// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  let x = 0;
  let y = 0;

  const lengthMap = {
    U: 1,
    D: -1,
    R: 1,
    L: -1,
  };

  const visited = new Set();

  dirs.split("").forEach((dir) => {
    if (dir === "U" || dir === "D") {
      if (Math.abs(y + lengthMap[dir]) <= 5) {
        y += lengthMap[dir];
        visited.add(`${x},${y - lengthMap[dir]}/${x},${y}`);
        visited.add(`${x},${y}/${x},${y - lengthMap[dir]}`);
      }
    } else if (dir === "R" || dir === "L") {
      if (Math.abs(x + lengthMap[dir]) <= 5) {
        x += lengthMap[dir];
        visited.add(`${x - lengthMap[dir]},${y}/${x},${y}`);
        visited.add(`${x},${y}/${x - lengthMap[dir]},${y}`);
      }
    }
  });

  return visited.size / 2;
}

//반대방향도 기록하기
//경로를 문자열로 기록하기
