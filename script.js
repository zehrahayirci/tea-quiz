const questions = [
  {
    question: "Do you prefer light or strong flavor?",
    answers: ["Light", "Strong"]
  },
  {
    question: "Do you like a roasted aroma?",
    answers: ["Yes", "No"]
  }
];

let currentQuestion = 0;

function showQuestion() {
  const quiz = document.getElementById("quiz");
  const q = questions[currentQuestion];
  quiz.innerHTML = `<p>${q.question}</p>` + q.answers.map((a, i) => 
    `<button onclick="selectAnswer('${a}')">${a}</button>`
  ).join('');
}

function selectAnswer(answer) {
  console.log("Selected:", answer); // later you use this to recommend
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("result").innerHTML = "You should try: <strong>Sencha</strong>!";
}

document.getElementById("nextBtn").style.display = "none";
showQuestion();
