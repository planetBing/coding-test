// https://school.programmers.co.kr/learn/courses/30/lessons/1845

// 권장 시간 30분 / 풀이시간 29분
function solution(nums) {
  const obj = nums.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});

  const size = Object.keys(obj).length;

  if (size > nums.length / 2) {
    return nums.length / 2;
  } else {
    return size;
  }
}

// 모범답안 set 사용
function solution(nums) {
  const numSet = new Set(nums);
  const n = nums.length;
  const k = n / 2;

  return Math.min(k, numSet);
}
