const teaList = [
  "Sencha of the Spring Sun",
  "Heavenly Drop Gyokuro",
  "Kabuse Sencha",
  "Tencha",
  "Okumidori Matcha",
  "Hojicha Basic Roast",
  "Kyobancha",
  "Wakoucha",
  "Genmaicha",
  "Suzume Kukicha",
  "Mejiro Kukicha",
  "Natural Sakura Sencha"
];

const quizData = [
  {
    question: "How would you describe your tea brewing skills?",
    answers: {
      "Newbie": ["Hojicha Basic Roast", "Genmaicha", "Natural Sakura Sencha"],
      "Middle": ["Sencha of the Spring Sun", "Okumidori Matcha", "Kyobancha", "Wakoucha", "Suzume Kukicha", "Mejiro Kukicha"],
      "Super Pro Master Tea Brewer": ["Heavenly Drop Gyokuro", "Kabuse Sencha", "Tencha"]
    }
  },
  {
    question: "How often do you drink Japanese tea?",
    answers: {
      "Every day": ["Sencha of the Spring Sun","Hojicha Basic Roast","Genmaicha"],
      "Sometimes": [],
      "Special occasions": ["Heavenly Drop Gyokuro","Okumidori Matcha","Natural Sakura Sencha"],
      "I have never drank Japanese tea before": ["Sencha of the Spring Sun","Hojicha Basic Roast","Genmaicha"]
    }
  },
  {
    question: "What time of day do you like to drink tea?",
    answers: {
      "Morning": ["Hojicha Basic Roast", "Okumidori Matcha"],
      "Early afternoon": ["Sencha of the Spring Sun", "Heavenly Drop Gyokuro", "Kabuse Sencha", "Tencha", "Wakoucha", "Mejiro Kukicha", "Natural Sakura Sencha"],
      "Evening": ["Hojicha Basic Roast", "Kyobancha", "Suzume Kukicha"],
      "With meals": ["Hojicha Basic Roast", "Genmaicha"],
      "All day": ["Hojicha Basic Roast","Kyobancha","Wakoucha"]
    }
  },
  {
    question: "How do you feel about caffeine?",
    answers: {
      "Yes please": ["Sencha of the Spring Sun", "Heavenly Drop Gyokuro", "Kabuse Sencha", "Tencha", "Okumidori Matcha", "Natural Sakura Sencha"],
      "A little bit is ok": ["Hojicha Basic Roast", "Kyobancha", "Suzume Kukicha", "Mejiro Kukicha"],
      "Not sure": []
    }
  },
  {
    question: "Who are you drinking tea with?",
    answers: {
      "Just me!": ["Sencha of the Spring Sun","Okumidori Matcha"],
      "With a friend/partner": ["Kabuse Sencha","Natural Sakura Sencha"],
      "A group of friends/family": ["Wakoucha","Genmaicha"]
    }
  },
  {
    question: "Complete the sentence: I like a tea that tastes…",
    multiSelect: 2,
    answers: {
      "Grassy": ["Sencha of the Spring Sun", "Heavenly Drop Gyokuro"],
      "Vegetal": ["Kabuse Sencha", "Tencha", "Okumidori Matcha", "Mejiro Kukicha", "Natural Sakura Sencha" ],
      "Astringent": ["Sencha of the Spring Sun", "Wakoucha", "Genmaicha"],
      "Sweet": ["Heavenly Drop Gyokuro", "Tencha", "Okumidori Matcha", "Wakoucha", "Suzume Kukicha", "Mejiro Kukicha", "Natural Sakura Sencha"],
      "Roasted": ["Hojicha Basic Roast", "Kyobancha", "Wakoucha", "Genmaicha", "Suzume Kukicha"],
      "Floral": ["Sencha of the Spring Sun", "Natural Sakura Sencha"],
      "Umami / shaded": ["Heavenly Drop Gyokuro", "Kabuse Sencha", "Tencha", "Okumidori Matcha", "Mejiro Kukicha"]
    }
  },
  {
    question: "Do you like a hot brew or a cold brew?",
    answers: {
      "Hot": ["Sencha of the Spring Sun","Okumidori Matcha","Hojicha Basic Roast","Kyobancha","Wakoucha","Genmaicha","Suzume Kukicha"],
      "Cold": ["Natural Sakura Sencha"],
      "Both": ["Heavenly Drop Gyokuro","Kabuse Sencha","Tencha","Mejiro Kukicha"]
    }
  }
];

let currentQuestionIndex = 0;
let selectedTeas = [];

function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}

let selectedAnswerCount = 0;
let multiSelectAnswers = [];

function showQuestion() {
  const quiz = document.getElementById("quiz");
  const q = quizData[currentQuestionIndex];
  
  selectedAnswerCount = 0;
  multiSelectAnswers = [];

  let questionText = q.question;
  if (q.question === "Complete the sentence: I like a tea that tastes…") {
    questionText = `Complete the sentence<br><span class="italic">"I like a tea that tastes….."</span><br><small>(select 2)</small>`;
  }

  quiz.innerHTML = `<p class="question-text">${questionText}</p>` +
    Object.keys(q.answers).map(answer =>
      `<button class="answer-btn" data-answer="${encodeURIComponent(JSON.stringify(q.answers[answer]))}">${answer}</button>`
    ).join('');

  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = JSON.parse(decodeURIComponent(btn.getAttribute("data-answer")));

      if (q.multiSelect) {
        selectedAnswerCount++;
        multiSelectAnswers.push(...selected);
        btn.disabled = true;
        btn.classList.add("selected");

        if (selectedAnswerCount >= q.multiSelect) {
          selectAnswer(multiSelectAnswers);
        }
      } else {
        selectAnswer(selected);
      }
    });
  });
}



function selectAnswer(teas) {
  selectedTeas.push(...teas);
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    const result = getMostCommonTea(selectedTeas);
    showResult(result);
  }
}

function getMostCommonTea(teas) {
  const count = {};
  teas.forEach(t => count[t] = (count[t] || 0) + 1);

  // Max appearance reference per tea (based on your current logic)
  const maxPossible = {
    "Sencha of the Spring Sun": 10,
    "Heavenly Drop Gyokuro": 8,
    "Kabuse Sencha": 7,
    "Tencha": 7,
    "Okumidori Matcha": 9,
    "Hojicha Basic Roast": 10,
    "Kyobancha": 6,
    "Wakoucha": 8,
    "Genmaicha": 8,
    "Suzume Kukicha": 6,
    "Mejiro Kukicha": 7,
    "Natural Sakura Sencha": 9
  };

  // Normalize counts
  const normalized = Object.entries(count).map(([tea, raw]) => {
    const max = maxPossible[tea] || 1;
    return { tea, score: raw / max };
  });

  // Sort by normalized score (descending)
  normalized.sort((a, b) => b.score - a.score);

  return normalized.length ? normalized[0].tea : "No recommendation found";
}

function showResult(tea) {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").innerHTML = `🌿 You should try: <strong>${tea}</strong>!`;
} // end
