function validateUsr(username) {
  var r = /\b[a-z0-9_]{4,16}\b(?! [a-z0-9_])/;
  res = r.test(username)
  return res
}