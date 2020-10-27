function check() {
  var score = 0;
  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var q4 = document.quiz.q4.value;
  result = document.getElementById("result");
  result.innerText = "";
  if (q1 == "HTML") {
    score += 1;
    result.innerText += "Your answer of question 1 is correct\n";
  } else {
    result.innerText += "The correct answer of question 1 is HTML\n";
  }
  if (q2 == "python") {
    score++;
    result.innerText += "Your answer of question 2 is correct\n";
  } else {
    result.innerText += "The correct answer of question 2 is python\n";
  }
  if (q3 == "python") {
    score++;
    result.innerText += "Your answer of question 3 is correct\n";
  } else {
    result.innerText += "The correct answer of question 3 is python\n";
  }
  if (q4 == "python") {
    score++;
    result.innerText += "Your answer of question 4 is correct\n";
  } else {
    result.innerText += "The correct answer of question 4 is python\n";
  }
  document.getElementById("result").innerText +=
    "Your score is: " + score + "\n";
  if (score == 4) {
    result.innerText += "Excellent\n";
  } else if (score == 0) {
    result.innerText += "Better Luck next time";
  } else {
    result.innerText += "Good";
  }
}
