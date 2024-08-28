/**
 * 첫번째 인수 lst를 이용해 이진탐색 트리를 생성하고
 * 두번째 인수 serchList에 있는 각 노드를 이진 탐색 트리에서 찾을 수 있는지 확인해
 * true, flase를 담은 result를 반환하는 함수 solution()
 */

class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let curr = this.root;
      while (true) {
        if (key < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let curr = this.root;
    while (curr && curr.val !== key) {
      if (key < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return curr;
  }
}

function solution(list, searchList) {
  const bst = new BST();

  for (const key of list) {
    bst.insert(key);
  }
  console.log(bst);

  const result = [];

  for (const searchVal of searchList) {
    if (bst.search(searchVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution([1, 3, 5, 7, , 9], [2, 4, 6, 8, 10]));
