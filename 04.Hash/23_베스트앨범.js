//https://school.programmers.co.kr/learn/courses/30/lessons/42579

// 권장시간 60분 / 풀이시간 51분
function solution(genres, plays) {
  const genreMap = {};

  for (let i = 0; i < genres.length; i++) {
    if (!genreMap[genres[i]]) {
      genreMap[genres[i]] = { sum: plays[i] };
      genreMap[genres[i]]["music"] = [{ [i]: plays[i] }];
    } else {
      genreMap[genres[i]]["sum"] += plays[i];
      genreMap[genres[i]]["music"].push({ [i]: plays[i] });
    }
  }

  const answer = Object.values(genreMap)
    .sort((a, b) => b.sum - a.sum)
    .map((obj) => {
      const sorted = obj.music
        .sort((a, b) => Object.values(b) - Object.values(a))
        .slice(0, 2);
      return sorted.map((v) => Object.keys(v));
    })
    .flat();

  return answer.flat().map(Number);
}
