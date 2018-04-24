function find_average(array) {
  return array.reduce((acc, val) => { return (acc + val); }) / array.length;
}