/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let set = new Set()
  for (const path of paths) {
    set.add(path[0])
  }
  for (const path of paths) {
    if (!set.has(path[1])) return path[1]
  }
  return ""
};