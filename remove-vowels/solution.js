function disemvowel(str) {
  return str.replace(/[aeiou]/ig, '');
}

//needs i for case insensitive and g for global
//had it in a variable but it made more sense to just return it this way