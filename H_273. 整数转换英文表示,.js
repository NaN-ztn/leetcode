/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  const singles = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const thousands = ['', 'Thousand', 'Million', 'Billion'];
  if (num === 0) return 'Zero';
  function f(arr, n) {
    if (n === 0) return
    else if (n < 10) arr.push(singles[n] + ' ')
    else if (n < 20) arr.push(teens[n - 10] + ' ')
    else if (n < 100) {
      arr.push(tens[Math.floor(n / 10)] + ' ')
      f(arr, n % 10)
    }
    else {
      arr.push(singles[Math.floor(n / 100)] + ' Hundred ')
      f(arr, n % 100)
    }
  }
  let ans = [];
  for (let i = 1000000000, j = 3; j >= 0; j--, i = Math.floor(i / 1000)) {
    let cur = Math.floor(num / i)
    if (cur !== 0) {
      num -= cur * i
      let c = []
      f(c, cur)
      c.push(thousands[j] + ' ')
      ans.push(c.join(''))
    }
  }
  return ans.join('').trim()
};