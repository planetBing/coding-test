//https://school.programmers.co.kr/learn/courses/30/lessons/42577

// 오답(시간복잡도가 높음)
function solution(phone_book) {
  for (let i = 0; i < phone_book.length; i++) {
    const curNum = phone_book[i];
    const prefixes = phone_book.map((num) => num.slice(0, curNum.length));
    if (new Set(prefixes).size < phone_book.length) return false;
  }

  return true;
}

function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}
