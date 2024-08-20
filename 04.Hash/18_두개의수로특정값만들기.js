/**
 * n개의 양의 정수로 이루어진 리스트 arr와 정수 target이 주어졌을 때
 * 이 중에서 합이 target인 두 수가 arr에 있는지 찾고,
 * 있으면 true, 없으면 false를 반환하는 solution() 함수
 */

function solution(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }

  return false;
}

//위 함수는 시간복잡도가 O(N^2)

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));

// 모범답안 (시간 복잡도 O(N+K))
function countSort(arr, k) {
  const hashtable = new Array(k + 1).fill(0);
  for (const num of arr) {
    if (num <= k) {
      //현재 원소값이 k 이하인 때만 처리
      hashtable[num] = 1;
    }
  }

  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);
  for (const num of arr) {
    const complement = target - num;

    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}
