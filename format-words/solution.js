function formatWords(words) {
  let sentence = '';
  if (!words) {
    return '';
  }
  let onlyWords = words.filter(i => i !== '');
  sentence = onlyWords.join(', ');
  return sentence.replace(/,([^,]*)$/, ' and$1');
}