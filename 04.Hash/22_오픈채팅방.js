// https://school.programmers.co.kr/learn/courses/30/lessons/42888

// 권장시간 60분 / 풀이시간 25분
function solution(record) {
  const result = [];
  const nameMap = {};
  const translation = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  record.forEach((re) => {
    const [command, id, name] = re.split(" ");
    if (command !== "Leave") nameMap[id] = name;
    if (command === "Enter" || command === "Leave") {
      result.push({ id: id, command: command });
    }
  });

  const answer = result.map((obj) => {
    return nameMap[obj["id"]] + translation[obj["command"]];
  });

  return answer;
}
