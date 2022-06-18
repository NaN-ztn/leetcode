var numberOfBoomerangs = function (points) {
  let ans = 0
  for (let p of points) {
    let counts = {}
    for (let q of points) {
      let dis = (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1])
      if (!counts[`${dis}`]) {
        counts[`${dis}`] = 1
      } else {
        counts[`${dis}`] += 1
      }
    }
    for (var m of Object.values(counts)) {
      ans += m * (m - 1)
    }
  }

  return ans
};
console.log(numberOfBoomerangs([[0, 0], [1, 0], [2, 0]]))
