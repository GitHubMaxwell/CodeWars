function capitalize(s) {
  let newStr = "";
  let oppStr = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      newStr += s[i].toLowerCase();
      oppStr += s[i].toUpperCase();
    } else {
      newStr += s[i].toUpperCase();
      oppStr += s[i].toLowerCase();
    }
  }
  return [newStr, oppStr];
}