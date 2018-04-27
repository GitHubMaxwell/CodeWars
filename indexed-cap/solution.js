function capitalize(s, arr) {
  var stringArray = s.split('');
  console.log(stringArray);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > stringArray.length) {
      continue;
    }
    var indexString = '' + stringArray[arr[i]]
    stringArray.splice(arr[i], 1, indexString.toUpperCase())
  }
  return stringArray.join('');
}