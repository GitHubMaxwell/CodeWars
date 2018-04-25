// function high(x) {
//   let countArr = [];
//   let arr = x.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     let counter = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       let newChar = arr[i];
//       if (newChar[j] === 'a') {
//         counter = counter + 1;
//         console.log(arr[i][j]);
//       } else if (arr[i][j] === 'b') {
//         counter = counter + 2;
//         console.log(arr[i][j]);
//       } else if (arr[i][j] === 'c') {
//         counter = counter + 3;
//         console.log(arr[i][j]);
//       }
//       countArr.push(counter);
//       console.log(countArr);
//     }
//     return countArr;
//   }
// }

function high(x) {
  var wordArr = x.split(' ');
  counter = 0;
  word = '';
  for (let i = 0; i < wordArr.length; i++) {
    var currentWord = wordArr[i];
    console.log(currentWord);
    value = 0;
    for (let j = 0; j < currentWord.length; j++) {
      value += (currentWord.charCodeAt(j) - 96);
    }
    if (value > counter) {
      console.log(value);
      counter = value;
      word = currentWord;
    }
  }
  return word;
}
// return arr.filter(val => { return val.includes('a', 'b', 'c'); });
//toLowerCase
//filter out a, b, c

console.log(high('man i need a taxi up to ubud'));
// 'taxi'
// console.log(high('what time are we climbing up the volcano'));
//'volcano'
// console.log(high('take me to semynak'));
//'semynak'  

//needs to create a counter per word and push to new array
//split each string in its on value in an array - split
//iterate over each array[i]

//if has a = counter 1, b = 2, c = 3