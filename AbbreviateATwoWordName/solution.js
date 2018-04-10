function abbrevName(name){
  let initials = name.match(/\b\w/g).join('.').toUpperCase();
  return initials;
}