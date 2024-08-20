/**
 * 문자열 리스트 stringList와 쿼리 리스트 queryList가 있을 때
 * 각 쿼리 리스트에 있는 문자열이 stringlist의 문자열 리스트에 있는지 확인
 * 문자열이 있으면 true, 없으면 false
 */

function hash(str) {
  const p = 31; // 소수
  const m = 1000000007; //버킷크기
  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }

  return hashValue;
}

function solution(stringList, queryList) {
  const hashList = stringList.map((str) => hash(str));

  const result = [];
  for (const query of queryList) {
    const queryHash = hash(query);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
); //[True, false, flase, True]
