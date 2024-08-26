// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  let answer = 0;
  const wantMap = {};
  for (let i = 0; i < want.length; i++) {
    wantMap[want[i]] = number[i];
  }

  const circuitNum = discount.length - 10 + 1;

  for (let i = 0; i < circuitNum; i++) {
    const wantMapDup = { ...wantMap };
    discount.slice(i, i + 10).forEach((d) => {
      if (wantMapDup[d]) wantMapDup[d]--;
    });

    if (Object.values(wantMapDup).filter((num) => num > 0).length <= 0)
      answer++;
  }
  return answer;
}

// 일반적으로 이중 루프가 있다고 해서 반드시 **O(N²)**이 되는 것은 아닙니다. **O(N²)**은 두 루프의 반복 횟수가 N에 비례하는 경우에 해당합니다.
// 하지만, 이 코드에서는 내부 루프가 상수 시간(10번) 동안만 실행되므로 **O(1)**입니다. 따라서, 외부 루프와 곱셈 결과로 **O(m * k)**이 되지, **O(N²)**이 되지는 않습니다.

function isShallowEqual(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (value1 !== value2) {
      return false;
    }

    return true;
  }
}

function solution(want, number, discount) {
  const wantObj = {};
  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  let answer = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    const discount10d = {};

    for (let j = i; j < i + 10; j++) {
      if (wantObj[discount[j]]) {
        discount10d[discount[j]] = (discount10d[discount[j]] || 0) + 1;
      }
    }

    if (isShallowEqual(discount10d, wantObj)) {
      answer += 1;
    }
  }

  return answer;
}
