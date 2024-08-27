// 이진 트리를 표현한 배열 nodes를 인자로 받음
// 해당 이진 트리에 대해 전위 순회, 중위 순회, 후위 순회 결과를 반환하는 solution() 함수

function preorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = `${nodes[idx]}`;
    ret += preorder(nodes, idx * 2 + 1);
    ret += preorder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

function inorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = inorder(nodes, idx * 2 + 1);
    ret += `${nodes[idx]}`;
    ret += inorder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

function postorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = postorder(nodes, idx * 2 + 1);
    ret += postorder(nodes, idx * 2 + 2);
    ret += `${nodes[idx]}`;
    return ret;
  }

  return "";
}

function solution(nodes) {
  return [preorder(nodes, 0), inorder(nodes, 0), postorder(nodes, 0)];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
