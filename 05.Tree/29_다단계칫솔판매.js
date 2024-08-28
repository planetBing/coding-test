function solution(enroll, referral, seller, amount) {
  const parent = enroll.reduce((acc, cur, i) => {
    acc[cur] = referral[i];
    return acc;
  }, {});

  const sum = {};
  for (let name of enroll) {
    sum[name] = 0;
  }

  for (let i = 0; i < seller.length; i++) {
    let money = amount[i] * 100;
    let curName = seller[i];

    while (money > 0 && curName !== "-") {
      sum[curName] += money - Math.floor(money / 10);
      curName = parent[curName];

      money = Math.floor(money / 10);
    }
  }

  return enroll.map((name) => sum[name]);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
