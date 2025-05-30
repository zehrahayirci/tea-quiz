const questions = [
  {
    question: "Do you prefer a light or strong flavor?",
    answers: [
      { text: "Light", teas: ["Sencha", "Kabusecha", "Gyokuro"] },
      { text: "Strong", teas: ["Hojicha", "Genmaicha", "Matcha"] }
    ]
  },
  {
    question: "Do you want caffeine?",
    answers: [
      { text: "Yes", teas: ["Sencha", "Gyokuro", "Matcha"] },
      { text: "No", teas: ["Hojicha", "Genmaicha"] }
    ]
  },
  {
    question: "Do you prefer a roasted or grassy aroma?",
    answers: [
      { text: "Roasted", teas: ["Hojicha", "Genmaicha"] },
      { text: "Grassy", teas: ["Sencha", "Kabusecha"] }
    ]
  }
];

function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}

let currentQuestion = 0;
let selectedTeas = [];

function showQuestion() {
  const quiz = document.getElementById("quiz");
  const q = questions[currentQuestion];

  quiz.innerHTML = `<p>${q.question}</p>` +
    q.answers.map(a =>
      `<button onclick='selectAnswer(${JSON.stringify(a.teas)})'>${a.text}</button>`
    ).join('');
}

function selectAnswer(teas) {
  selectedTeas.push(...teas);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    const result = getMostCommonTea(selectedTeas);
    showResult(result);
  }
}

function getMostCommonTea(teas) {
  const count = {};
  teas.forEach(t => {
    count[t] = (count[t] || 0) + 1;
  });
  return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
}

function showResult(tea) {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").innerHTML = `🌿 You should try: <strong>${tea}</strong>!`;
}

