function mutateMyStrings(stringOne, stringTwo) {
  var s = '';
  s += stringOne + '\n';
  for (var i = 0; i < stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i]) {
      s += stringTwo.substr(0, i) + stringTwo[i] + stringOne.substr(i + 1, stringOne.length - 1) + '\n';
    }
  }
  return s;
}