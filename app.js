const levelOrder = [
  { key: "easy", label: "Kolay" },
  { key: "medium", label: "Orta" },
  { key: "hard", label: "Zor" },
];

const state = {
  level: "easy",
  currentIndex: 0,
  locked: false,
  answers: {
    easy: Array(quizData.easy.length).fill(null),
    medium: Array(quizData.medium.length).fill(null),
    hard: Array(quizData.hard.length).fill(null),
  },
};

const questionCounter = document.getElementById("questionCounter");
const scoreCounter = document.getElementById("scoreCounter");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const resultText = document.getElementById("resultText");
const restartBtn = document.getElementById("restartBtn");
const restartBtnBottom = document.getElementById("restartBtnBottom");
const questionNav = document.getElementById("questionNav");
const levelTabs = document.getElementById("levelTabs");
const levelLabel = document.getElementById("levelLabel");
const welcomeScreen = document.getElementById("welcomeScreen");
const startBtn = document.getElementById("startBtn");
const appShell = document.querySelector(".app-shell");

let nextButton = null;

appShell.classList.add("hidden-layout");

function getCurrentQuestions() {
  return quizData[state.level];
}

function getLevelScore(level) {
  return state.answers[level].filter((value) => value === true).length;
}

function createSeed(text) {
  let hash = 2166136261;

  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function seededShuffle(items, seedText) {
  const list = [...items];
  let seed = createSeed(seedText);

  for (let index = list.length - 1; index > 0; index -= 1) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const swapIndex = seed % (index + 1);
    [list[index], list[swapIndex]] = [list[swapIndex], list[index]];
  }

  return list;
}

function getBalancedQuestion(question, index) {
  const entries = question.o.map((option, optionIndex) => ({
    option,
    originalIndex: optionIndex,
  }));
  const shuffledEntries = seededShuffle(
    entries,
    `${state.level}-${index}-${question.q}-${question.o.join("|")}`
  );

  return {
    q: question.q,
    o: shuffledEntries.map((entry) => entry.option),
    a: shuffledEntries.findIndex((entry) => entry.originalIndex === question.a),
  };
}

function updateTabs() {
  [...levelTabs.querySelectorAll(".tab-btn")].forEach((button) => {
    button.classList.toggle("active", button.dataset.level === state.level);
  });
}

function updateHeader() {
  const questions = getCurrentQuestions();
  questionCounter.textContent = `${Math.min(state.currentIndex + 1, questions.length)} / ${questions.length}`;
  scoreCounter.textContent = String(getLevelScore(state.level));
  levelLabel.textContent = levelOrder.find((item) => item.key === state.level).label;
  progressBar.style.width = `${(state.currentIndex / questions.length) * 100}%`;
  renderNavigator();
  updateTabs();
}

function renderNavigator() {
  const questions = getCurrentQuestions();
  const currentAnswers = state.answers[state.level];
  questionNav.innerHTML = "";

  questions.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-btn";
    button.textContent = String(index + 1);

    if (index === state.currentIndex) button.classList.add("current");
    if (currentAnswers[index] === true) button.classList.add("correct");
    if (currentAnswers[index] === false) button.classList.add("wrong");

    button.addEventListener("click", () => jumpToQuestion(index));
    questionNav.appendChild(button);
  });
}

function showQuestion() {
  updateHeader();
  feedback.textContent = "";
  feedback.className = "feedback";
  answers.innerHTML = "";

  if (nextButton) {
    nextButton.remove();
    nextButton = null;
  }

  const currentQuestion = getBalancedQuestion(getCurrentQuestions()[state.currentIndex], state.currentIndex);
  questionText.textContent = currentQuestion.q;

  currentQuestion.o.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(index));
    answers.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  if (state.locked) return;
  state.locked = true;

  const currentQuestion = getBalancedQuestion(getCurrentQuestions()[state.currentIndex], state.currentIndex);
  const correctIndex = currentQuestion.a;
  const answerButtons = [...document.querySelectorAll(".answer-btn")];

  answerButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === correctIndex) button.classList.add("correct");
    if (index === selectedIndex && index !== correctIndex) button.classList.add("wrong");
  });

  if (selectedIndex === correctIndex) {
    state.answers[state.level][state.currentIndex] = true;
    feedback.textContent = "Dogru cevap";
    feedback.classList.add("correct");
  } else {
    state.answers[state.level][state.currentIndex] = false;
    feedback.textContent = "Yanlis cevap";
    feedback.classList.add("wrong");
  }

  renderNavigator();
  updateHeader();
  renderNextButton();
}

function renderNextButton() {
  const isLastQuestion = state.currentIndex === getCurrentQuestions().length - 1;
  nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "primary-btn";
  nextButton.textContent = isLastQuestion ? "Bolum Sonucu" : "Siradaki Soru";
  nextButton.addEventListener("click", goToNextQuestion);
  feedback.insertAdjacentElement("afterend", nextButton);
}

function goToNextQuestion() {
  state.currentIndex += 1;
  state.locked = false;

  if (state.currentIndex >= getCurrentQuestions().length) {
    showResults();
    return;
  }

  showQuestion();
}

function showResults() {
  const levelScore = getLevelScore(state.level);
  updateHeader();
  progressBar.style.width = "100%";
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  resultText.textContent = `${levelLabel.textContent} bolumunde ${getCurrentQuestions().length} sorunun ${levelScore} tanesini dogru yaptin. Dilersen ayni bolumu bastan cozecek ya da diger zorluk duzeyine gececeksin.`;
}

function restartCurrentLevel() {
  state.currentIndex = 0;
  state.locked = false;
  state.answers[state.level] = Array(getCurrentQuestions().length).fill(null);
  quizScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  showQuestion();
}

function setLevel(level) {
  state.level = level;
  state.currentIndex = 0;
  state.locked = false;
  quizScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  showQuestion();
}

function jumpToQuestion(index) {
  state.currentIndex = index;
  state.locked = false;
  quizScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  showQuestion();
}

restartBtn.addEventListener("click", restartCurrentLevel);
restartBtnBottom.addEventListener("click", restartCurrentLevel);
startBtn.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  appShell.classList.remove("hidden-layout");
  showQuestion();
});

[...levelTabs.querySelectorAll(".tab-btn")].forEach((button) => {
  button.addEventListener("click", () => setLevel(button.dataset.level));
});
