function checkExam(array1, array2) {
  var studExam = array2;
  var answerKey = array1;
  var studentScore = 0;

  for (var i = 0; i < answerKey.length; i++) {
    if (studExam[i] === '') {
      studentScore = studentScore + 0;
    } else if (studExam[i] === answerKey[i]) {
      studentScore = studentScore + 4;
    } else {
      studentScore = studentScore - 1;
    }
  }
  if (studentScore < 0) {
    studentScore = 0;
  }
  return (studentScore);
}