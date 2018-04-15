function insertDash(num) {
  var numArr = num.toString().split('');
  var len = numArr.length;
  var final = [];
  for (var i = 0; i < len; i++) {
    final.push(numArr[i]);
    if (numArr[i] % 2 !== 0) {
      if (i + 1 < len && numArr[i + 1] % 2 !== 0) {
        final.push("-");
      }
    }
  }
  return final.join("");
}