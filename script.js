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
    image: "images/Kyusu.gif",
    answers: {
      "Newbie": ["Hojicha Basic Roast", "Genmaicha", "Natural Sakura Sencha"],
      "Mid-level": ["Sencha of the Spring Sun", "Okumidori Matcha", "Kyobancha", "Wakoucha", "Suzume Kukicha", "Mejiro Kukicha"],
      "Super Pro Master Tea Brewer": ["Heavenly Drop Gyokuro", "Kabuse Sencha", "Tencha"]
    }
  },
  {
    question: "How often do you drink Japanese tea?",
    image: "images/Chawan.gif",
    answers: {
      "Every day": ["Sencha of the Spring Sun","Hojicha Basic Roast","Genmaicha"],
      "Sometimes": [],
      "When I am feeling fancy": ["Heavenly Drop Gyokuro","Okumidori Matcha","Natural Sakura Sencha"],
      "I have never had Japanese tea before": ["Sencha of the Spring Sun","Hojicha Basic Roast","Genmaicha"]
    }
  },
  {
    question: "What time of day do you like to drink tea?",
    image: "images/Shiboridashi.gif",
    answers: {
      "Morning": ["Hojicha Basic Roast", "Okumidori Matcha"],
      "Early afternoon tea break": ["Sencha of the Spring Sun", "Heavenly Drop Gyokuro", "Kabuse Sencha", "Tencha", "Wakoucha", "Mejiro Kukicha", "Natural Sakura Sencha"],
      "Evening": ["Hojicha Basic Roast", "Kyobancha", "Suzume Kukicha"],
      "With meals": ["Hojicha Basic Roast", "Genmaicha"],
      "All day": ["Hojicha Basic Roast","Kyobancha","Wakoucha"]
    }
  },
  {
    question: "Who are you drinking tea with?",
    image: "images/Shiboridashi.gif",
    answers: {
        "Just me!": ["Sencha of the Spring Sun","Okumidori Matcha"],
        "With a tea friend": ["Kabuse Sencha","Natural Sakura Sencha"],
        "A larger group of friends or family": ["Wakoucha","Genmaicha"]
    }
  },
  {
    question: "How do you feel about caffeine?",
    image: "images/One bud 2 leaves chan.gif",
    answers: {
      "yes, Yes, YES!": ["Sencha of the Spring Sun", "Heavenly Drop Gyokuro", "Kabuse Sencha", "Tencha", "Okumidori Matcha", "Natural Sakura Sencha"],
      "A teenie bit is OK": ["Hojicha Basic Roast", "Kyobancha", "Suzume Kukicha", "Mejiro Kukicha"],
      "Not sure": []
    }
  },

  {
    question: "Complete the sentence: I like a tea that tastes…",
    multiSelect: 2,
    answers: {
      "Vegetal": ["Sencha of the Spring Sun","Heavenly Drop Gyokuro", "Kabuse Sencha", "Tencha", "Okumidori Matcha", "Mejiro Kukicha", "Natural Sakura Sencha" ],
      "Structured": ["Sencha of the Spring Sun", "Wakoucha", "Genmaicha"],
      "Sweet": ["Heavenly Drop Gyokuro", "Tencha", "Okumidori Matcha", "Wakoucha", "Suzume Kukicha", "Mejiro Kukicha", "Natural Sakura Sencha"],
      "Roasted": ["Hojicha Basic Roast", "Kyobancha", "Wakoucha", "Genmaicha", "Suzume Kukicha"],
      "Floral": ["Sencha of the Spring Sun", "Natural Sakura Sencha"],
      "Umami": ["Heavenly Drop Gyokuro", "Kabuse Sencha", "Tencha", "Okumidori Matcha", "Mejiro Kukicha"]
    }
  },
  {
    question: "Do you like a hot brew or a cold brew?",
    image: "images/yunomi guy.2.gif",
    answers: {
      "Hot": ["Sencha of the Spring Sun","Okumidori Matcha","Hojicha Basic Roast","Kyobancha","Wakoucha","Genmaicha","Suzume Kukicha"],
      "Cold": ["Natural Sakura Sencha"],
      "Both": ["Heavenly Drop Gyokuro","Kabuse Sencha","Tencha","Mejiro Kukicha"]
    }
  }
];

const teaInfo = {
  "Sencha of the Spring Sun": {
    "title": "You have found...",
    "season": "Spring",
    "learnLink": "https://obubutea.com/shop/green-tea/sencha/sencha-of-the-spring-sun/",
    "description": "Obubu's OG",
    "longDescription": "Sencha from the most anticipated first spring harvest, light and vibrant.",
    "image": "images/Spring Sencha-nb.png",
    "harvestImage":"images/HarvestSpring.png",
    "musicLink": "https://open.spotify.com/playlist/3XPvFCkEEXB0uYB0h0MSSG?si=42d4400fb4474fc2"
  },
  "Heavenly Drop Gyokuro": {
    "title": "Sip into something special...",
    "season": "Spring",
    "learnLink": "https://obubutea.com/shop/gyokuro/heavenly-drop-gyokuro/",
    "description": "The Jade dew drop",
    "longDescription": "Gyokuro is a luxurious, high quality tea, perfect for special occasions.",
    "image": "images/Gyokuro-nb.png",
    "harvestImage":"images/HarvestSpring.png",
    "musicLink": "https://open.spotify.com/playlist/6ry2JjC4bqJs5WaCCayXws?si=2d6059cd678245e3"
  },
  "Kabuse Sencha": {
    "title": "You should try next time...",
    "season": "Spring",
    "learnLink": "https://obubutea.com/shop/sencha/kabuse-sencha/",
    "description": "Umami bomb!",
    "longDescription": "A shaded tea with a rich, sweet aroma and strong vegetal vibes.",
    "image": "images/Kabuse-nb.png",
    "harvestImage":"images/HarvestSpring.png",
    "musicLink": "https://open.spotify.com/playlist/1NmvhVZlZke5MjldttrZfD?si=fc0428b6d8704e34"
  },
  "Tencha": {
    "title": "This cup has chosen you...",
    "season": "Spring",
    "learnLink": "https://obubutea.com/shop/matcha/tencha/",
    "description": "Japan\u2019s best kept leafy secret",
    "longDescription": "One step before matcha. No stems, no veins, pure shaded leaf.",
    "image": "images/Tencha-nb.png",
    "harvestImage":"images/HarvestSpring.png",
    "musicLink": "https://open.spotify.com/playlist/3t3nudYTvDLRWRSzh01mf3?si=9558e837f54846cb"
  },
  "Okumidori Matcha": {
    "title": "Your perfect match(a) is waiting...",
    "season": "Spring",
    "learnLink": "https://obubutea.com/shop/green-tea/matcha/okumidori-matcha-25g-ziplock-bag/",
    "description": "Unapologetically smooth",
    "longDescription": "Okumidori means ‘late green’. Take a moment to calm while you whisk up something vibrant.",
    "image": "images/Okumidori Matcha-nb.png",
    "harvestImage":"images/HarvestSpring.png",
    "musicLink": "https://open.spotify.com/playlist/2W3proT7JCXKGWo3wkt0f0?si=d2484ea7cce14d75"
  },
  "Hojicha Basic Roast": {
    "title": "The leaves have spoken: you should try...",
    "season": "End of spring",
    "learnLink": "https://obubutea.com/shop/hojicha/hojicha-basic-roast/",
    "description": "Your everyday welcome tea",    
    "longDescription": "This roasted green tea is beloved across Japan, a classic for any time of day.",
    "image": "images/Houjicha Basic-nb.png",
    "harvestImage":"images/HarvestSummer.png",
    "musicLink": "https://open.spotify.com/playlist/4Kzouxeou6pjvVKPHzwyqC?si=888223c66f904026"
  },
  "Kyobancha": {
    "title": "Your new brew is...",
    "season": "Winter",
    "learnLink": "https://obubutea.com/shop/bancha/kyobancha/",
    "description": "A warm hug in a cup",
    "longDescription": "Comforting and virtually caffeine free, this  roasted tea is unique to the Kyoto region.",    
    "image": "images/Kyobancha-nb.png",
    "harvestImage":"images/HarvestWinter.png",
    "musicLink": "https://open.spotify.com/playlist/5stqweyMm7koBoRrz8ScYg?si=aa35b5ddca534f5f"
  },
  "Wakoucha": {
    "title": "Sip into something special...",
    "season": "Summer",
    "learnLink": "https://obubutea.com/shop/black-tea/pine-needle-wakoucha/",
    "description": "Silky, velvety smooth",
    "longDescription": "Japanese black tea is rare, but on the rise, watch this space! Zehra’s favourite!",
    "image": "images/Wakoucha-nb.png",
    "harvestImage":"images/HarvestSummer.png",
    "musicLink": "https://open.spotify.com/playlist/1HxNO53Mhexhd9YDKNtIW6?si=7c98927a76474959"
  },
  "Genmaicha": {
    "season": "Summer",
    "title": "Your tea journey begins with...",
    "learnLink": "https://obubutea.com/shop/genmaicha/genmaicha/",    
    "longDescription": "Bancha leaves with roasted mochi rice, you can’t go wrong with this one.",
    "description": "Everyone loves to toast",
    "image": "images/Genmaicha-nb.png",
    "harvestImage":"images/HarvestSummer.png",
    "musicLink": "https://open.spotify.com/playlist/4fc6RoWPmcy2KA4M7jvmjT?si=08927bd746b742b7"
  },
  "Suzume Kukicha": {
    "season": "Spring",
    "title": "You should try...",
    "learnLink": "https://obubutea.com/shop/kukicha/suzume-kukicha/",
    "description": "Rustic, mellow, totally lovable",
    "longDescription": "Roasted stem tea, named after the suzume bird’s skinny legs. Izzy’s favourite!",
    "image": "images/Suzume-nb.png",
    "harvestImage":"images/HarvestSpring.png",
    "musicLink": "https://open.spotify.com/playlist/3mIxKr4OrbnhWiG3sdIOxP?si=3f9e5c07ab6a4c49"
  },
  "Mejiro Kukicha": {
    "season": "Spring",
    "title": "Your soulmate in a cup...",
    "learnLink": "https://obubutea.com/shop/kukicha/mejiro-kukicha/",
    "description": "The underdog",
    "longDescription": "A green stem tea, named for its resemblance to the mejiro bird’s skinny legs",
    "image": "images/Mejiro-nb.png",
    "harvestImage":"images/HarvestSpring.png",
    "musicLink": "https://open.spotify.com/playlist/1ygEr8UMcul9hq0KWtOz4A?si=c054747a7448491f"
  },
  "Natural Sakura Sencha": {
    "season": "Spring",
    "title": "A gentle brew for your soul...",
    "learnLink": "https://obubutea.com/shop/sencha/natural-sakura-sencha/",
    "description": "Your spring crush",
    "longDescription": "Teleport yourself to springtime in Japan with this floral blend.",
    "image": "images/Natural Sakura Sencha-nb.png",
    "harvestImage":"images/HarvestSpring.png",
    "musicLink": "https://open.spotify.com/playlist/6Vq2VkaJjrKSufWaWWeMBS?si=aed4a1a9bcf646fc"
  }
};
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

let imageHTML = '';

// Case 1: Special GIFs for "Who are you drinking tea with?"
if (q.question === "Who are you drinking tea with?") {
imageHTML = `
    <div class="question-gif-row">
    <img src="images/Shiboridashi.gif" alt="Friend" class="question-gif" />
    <img src="images/Chawan.gif" alt="Group" class="question-gif" />
    </div>
`;
}
// Case 2: Default question image if provided
else if (q.image) {
imageHTML = `<img src="${q.image}" alt="Question Image" class="question-image" />`;
}

// Final HTML
quiz.innerHTML = `
${imageHTML}
<p class="question-text">${questionText}</p>
${Object.keys(q.answers).map(answer =>
    `<button class="answer-btn" data-answer="${encodeURIComponent(JSON.stringify(q.answers[answer]))}">${answer}</button>`
).join('')}
`;

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
  const info = teaInfo[tea];

  if (!info) {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").innerHTML = `<p>🌿 You should try: <strong>${tea}</strong>! (Info not available)</p>`;
    return;
  }

  document.getElementById("quiz").style.display = "none";
  
  const brewingImage = info.image.replace('-nb.png', '-brewing.png');

  document.getElementById("result").innerHTML = `
    <div class="result-container">
      <p class="found-text">${info.title}</p>

      <img src="${info.image}" alt="${tea}" class="result-tea-image" />

      <h2 class="tea-name">${tea}</h2>
      <p class="tea-tagline">"${info.description}"</p>

      <div class="description-flex">
        <p class="description-text">${info.longDescription || ""}</p>
        ${info.harvestImage ? `<img src="${info.harvestImage}" alt="harvest season" class="harvest-badge" />` : ""}
      </div>

      <p class="brew-title">Brewing recommendation:</p>
      <img src="${brewingImage}" alt="brewing instructions" class="brew-image" />

      <div class="links-row">
        <a href="${info.learnLink}" target="_blank" class="result-link">
          <img src="images/ObubuLogo.png" alt="Learn icon" />
          <p>Learn more<br>about this tea</p>
        </a>

        <a href="${info.musicLink}" target="_blank" class="result-link">
          <img src="images/music-icon.png" alt="Music icon" />
          <p>Listen while<br>you brew</p>
        </a>
      </div>

      <div class="restart">
        <a href="index.html">
          <img src="images/RestartArrow.png" alt="Restart icon" />
        </a>
      </div>
    </div>
  `;
}


