// https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((rowArr) => {
    const returnRow = [];
    for (col = 0; col < arr2[0].length; col++) {
      let sum = 0;
      for (row = 0; row < arr2.length; row++) {
        const num = rowArr[row] * arr2[row][col];
        sum += num;
      }
      returnRow.push(sum);
    }
    answer.push(returnRow);
  });
  return answer;
}

// 모범답안
// function productMatrix(A, B) {
//     return A.map(function(row) {
//         return row.map(function(_, i) {
//             return row.reduce(function(sum, cell, j) {
//                 return sum + cell * B[j][i];
//             }, 0);
//         });
//     });
// }
