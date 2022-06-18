/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {

  return s.trim.split(/()* /).length;
};