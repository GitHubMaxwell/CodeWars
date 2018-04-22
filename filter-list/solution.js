function filter_list(l) {
  return l.filter(val => {
    return typeof (val) !== 'number';
  });
}