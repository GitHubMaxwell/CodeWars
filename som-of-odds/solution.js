function cubeOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      return undefined;
    }
  }
  let newArr = arr.map((val) => Math.pow(val, 3)).filter((val) => val % 2 !== 0);
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum = sum + newArr[i];
  }
  return sum;
}