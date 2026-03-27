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
const backToLevelsBtn = document.getElementById("backToLevelsBtn");
const questionNav = document.getElementById("questionNav");
const levelLabel = document.getElementById("levelLabel");
const welcomeScreen = document.getElementById("welcomeScreen");
const levelScreen = document.getElementById("levelScreen");
const startBtn = document.getElementById("startBtn");
const appShell = document.querySelector(".app-shell");
const chooserButtons = [...document.querySelectorAll("[data-start-level]")];

let nextButton = null;

appShell.classList.add("hidden-layout");

function getCurrentQuestions() {
  return quizData[state.level];
}

function getLevelScore(level) {
  return state.answers[level].filter((value) => value === true).length;
}

const distractorGroups = {
  easy: [
    {
      range: [0, 9],
      pool: [
        "Mesajin kaynaktan aliciya aktarilmasi",
        "Konusma yoluyla dili kullanabilmesi",
        "Iletisim",
        "Dili ve onu olusturan birimleri",
        "Bireyler arasi iletisim",
        "Toplumsal",
        "Yasanti ve anlam cikarma surecleriyle",
        "Cevredeki dil yasantiya katildiginda",
        "Topluluga ait olma duygusunu destekler",
        "Bilgi ve yasam tarzini nesilden nesle aktarir",
      ],
    },
    {
      range: [10, 17],
      pool: [
        "Fonoloji",
        "Seslerin dizilis ve kullanim kurallarini",
        "Kelime turetme ve bicimlenme kurallariyla",
        "Kelimelerin cumle icinde dizilisini",
        "Ne anlama gelir?",
        "Konusmanin baglama uygun kullanimi",
        "Pragmatik",
      ],
    },
    {
      range: [18, 24],
      pool: [
        "Skinner",
        "Chomsky",
        "Bilissel olgunlasma ile",
        "Cocuk ve cevre etkilesimiyle",
        "Dil anlama",
        "Konusma uretimi",
      ],
    },
    {
      range: [25, 31],
      pool: [
        "Fasciculus arcuatus",
        "Sol temporal lob",
        "Konusma, yutma, solunum, cigneme",
        "Refleksif vokalizasyonlar",
        "Fiziksel durumdan kaynaklanan refleksif sesler",
        "Nefes alma gereksinimiyle",
        "Konusma seslerine benzeyen tekrarlar artar",
      ],
    },
    {
      range: [32, 43],
      pool: [
        "Iletisimsel niyetin guclendigini",
        "12-18 ay",
        "Tek sozcukle genis anlam anlatma",
        "18-24 ay",
        "Edat, zamir ve yardimci fiiller",
        "Yeni kelimelerin hizla artmasini",
        "9",
        "200",
        "Dilbilgisi kurallarina gore konusma donemi",
        "1000",
        "2000",
        "Dun, bugun, yarin",
      ],
    },
    {
      range: [44, 49],
      pool: [
        "14000",
        "Biyolojik, bilissel ve cevresel etkenler",
        "Sozcuk dagarcigini ve anlamayi arttirir",
        "Dil gelisimini etkileyen cevresel faktorler arasinda",
        "2600",
        "Dogru sosyal ve dilsel girdi",
      ],
    },
  ],
  medium: [
    {
      range: [0, 9],
      pool: [
        "Iletisim semsiye kavramdir; dil arac, konusma iletim yoludur",
        "Toplumun bilgi ve yasam tarzinin cocuklara aktarilmasi",
        "Zihinde canlanan kavramlarin sozcuklerle iliskilenmesini",
        "Fonoloji sesleri, morfoloji kelime bicimlerini inceler",
        "Biri dizilise, digeri anlama odaklanir",
        "Konusma sirasini ve geri bildirim vermeyi uygun kullanmasi",
        "Biri cevre ve pekistirmeyi, digeri dogal dil yatkinligini vurgular",
        "Kavram gelistikce dil yapilarinin da zenginlesmesi",
        "Cocugun aktif ogrenmesi ile cevreden gelen girdinin birlikte islemesi",
        "Anlama ve uretimin baglantili ilerlemesini",
      ],
    },
    {
      range: [10, 19],
      pool: [
        "Biri organ ve islevleri, digeri beyin alanlarini vurgular",
        "Jargonda yetiskin konusmasina benzeyen tonlama daha belirgindir",
        "Anlamli sozcuk kullaniminin guclenmesine",
        "Holofraz tek sozcukle genis anlamdir; telegrafik konusma iki ya da daha fazla anlamli sozcuk birlestirir",
        "Bir sozcugu benzer birden fazla nesneye yayar",
        "Sozcugun kapsaminin gerektiginden daha sinirli kullanilmasini",
        "Erken sozcuk dagarciginda nesne adlarinin on planda oldugunu",
        "Yetiskine benzer kisa cumleler daha erken gorulebilir",
        "Soz dizimi ve anlami birlestirme becerisini",
        "Dilsel zaman kavrayisinin gelismesi",
      ],
    },
    {
      range: [20, 29],
      pool: [
        "Sozcuk ile nesne arasinda bag kurmayi kolaylastirir",
        "Neden-sonuc iliskili daha baglantili cumleleri",
        "Baskasini ikna etme ve etkilemede dili daha amacli kullanir",
        "Ilkokul yillari",
        "Alici dilin ifade dilinden daha genis olabildigini",
        "Temsil olusturma, isleme, saklama ve planlamayi destekler",
        "Dil ogrenme ve kullanma surecine destek saglar",
        "Erken donemde dilin daha hizli ilerlemesine",
        "Kelime dagarcigi hizinda fark olusabilmesiyle",
        "Biyolojik etken aciklamasi",
      ],
    },
    {
      range: [30, 39],
      pool: [
        "Model olma ve etkilesim firsatlari sunarak",
        "Kelime dagarcigi ve anlama",
        "Cevresel dil girdisinin yapisini degistirdigi icin",
        "Gelisim icin cocuga daha fazla dilsel ornek sundugu icin",
        "Ortak gelisimsel bir cerceve bulundugunu",
        "Dil girdisini anlamli ve karsilikli hale getirir",
        "Yeni sozcuklerin daha hizli ogrenilmesini kolaylastirmasi",
        "Iliski kurma ve surdurmeyi kolaylastirir",
        "Anlamsal iliski kurma becerisi",
        "Kulturel aktarimla",
      ],
    },
    {
      range: [40, 49],
      pool: [
        "Dil gelisiminin cevresel yonunu",
        "Kanal",
        "Birlik ve ulus bilincini destekleyebilir",
        "Dil ile dusunce arasinda guclu bag oldugunu",
        "Amacli iletisim davranisinin artisini",
        "Dil bilgisinin yapilanmaya basladigini",
        "Ilkokul yillarinda",
        "Biyolojik, bilissel ve cevresel etkenler birlikte isler",
        "Dil gelisiminin asamali bir yapisi oldugunu",
        "Anlamli sosyal girdinin kelime ogrenimini kolaylastirmasiyla",
      ],
    },
  ],
  hard: [
    {
      range: [0, 9],
      pool: [
        "Cocuk aktif ogrenirken aile, cevre ve bilissel surecler birlikte dili bicimlendirir",
        "Yasantilar kavramlari, kavramlar da dilsel sembollerle zihinde orgutlenmeyi destekler",
        "Dilsel bicim ve anlami farkli ama bagli katmanlar halinde aciklarlar",
        "Konusmayi uygun zamanda baslatma ve surdurmede zorlanma",
        "Etkilesimci bakis",
        "Duyulan kelime ve cumlelerin anlamini isleme guclugu",
        "Konusma uretiminde belirgin zorlanma",
        "Dil hem norolojik hem fizyolojik bir koordinasyon urunudur",
        "Iletisim biyolojik temelden amacli dilsel kullanima dogru gelisir",
        "Anlam yukunun sozcuk sayisindan bagimsiz olarak buyuk olabilecegini",
      ],
    },
    {
      range: [10, 19],
      pool: [
        "Anlam cekirdegi tasiyan sozcuklerin oncelikli oldugunu",
        "Dil yapisinin edinim bicimini etkileyebilecegini",
        "Kelime, dilbilgisi ve kavramsal yapilarin ayni anda hizla gelismesiyle",
        "Dilsel ifade bicimlerinin bilissel olgunlasmayla genisledigini",
        "Pragmatik beceri ve sosyal bakis acisi alma",
        "Cocuk bircok sozcugu kullanmadan once anlar",
        "Anlama becerisinin uretimden once gelisebildiginin",
        "Erken semantik kategorilerin zamanla duzeltildigini",
        "Cocuk erken donemde nesne ve istek odakli iletisim kurar",
        "Hem aidiyet duygusunu hem de toplumsal bilgi birikimini",
      ],
    },
    {
      range: [20, 29],
      pool: [
        "Ortak bir gelisimsel iskeletin cevreyle bicimlendigi gorusunu",
        "Erken donemde dil ilerleme hizinda fark olusabilmesini",
        "Dil gelisiminde biyolojik ve cevresel etkenler birlikte rol oynar",
        "Cunku cocuga baglam icinde yeni sozcuk ve kavram iliskileri sunar",
        "Dil girdisinin niteligindeki degisimlerin edinimi bicimlendirebildigini",
        "Zengin ve anlamli girdi yeni sozcuk edinimini hizlandirabilir",
        "Biyolojik seslerden amacli dil kullanimina gecisi",
        "Iletisimsel niyet ve pragmatik kullanimin",
        "Telegrafik konusma asamasi",
        "Temel yapilarin buyuk olcude kurulmus oldugunu ama gelisimin surdugunu",
      ],
    },
    {
      range: [30, 39],
      pool: [
        "Semantik orgutlenmeye",
        "Karsidakini ikna etmeye yonelik baglamsal anlatimi",
        "Uzlasilan ortak dil dizgesinin bireyleri bir arada tutmasina",
        "Icsel dusunce ile dilsel temsil arasinda yakin bag oldugunu",
        "Cocuk hem ekleri hem de cumle duzenini daha tutarli kullanir",
        "Dogru anlam, uygun cumle yapisi ve baglama uygun kullanim",
        "Ilkokulda dili baskalarini etkilemek icin kullanmak",
        "Isitsel deneyim ile semantik eslestirmenin",
        "Pragmatik ve sosyal bakis acisi alma",
        "Ucunun de cocuga sunulan cevresel dil girdisini etkilemesi nedeniyle",
      ],
    },
    {
      range: [40, 49],
      pool: [
        "Bilissel ve etkilesimci yaklasimlar arasinda",
        "Dil surecinin tek bir merkezle aciklanamayacak kadar karmasik oldugunu",
        "Dil kullaniminin nesne adlandirmadan iliski ve eylem anlatimina dogru genisledigini",
        "Temel anlamdan daha karmasik dilsel muhakemeye dogru ilerleme",
        "Biyolojik altyapi, bilissel yapilanma ve cevresel etkilesimin ortak urunudur",
        "Bireyler arasi iletisim, dusunce, grup kimligi, kulturel aktarim",
        "Hangi becerinin hangi tur sorularla olculecegini tahmin etmeye",
        "Dil gelisimi cok boyutlu bir surectir ve tek bir etmene indirgenemez",
        "Cunku dil gelisimi biyolojik, bilissel ve cevresel boyutlarin kesistigi karmasik bir surectir",
        "Dil hem bedensel olarak uretilen hem de toplumsal anlam tasiyan bir yapidir",
      ],
    },
  ],
};

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

function updateHeader() {
  const questions = getCurrentQuestions();
  questionCounter.textContent = `${Math.min(state.currentIndex + 1, questions.length)} / ${questions.length}`;
  scoreCounter.textContent = String(getLevelScore(state.level));
  levelLabel.textContent = levelOrder.find((item) => item.key === state.level).label;
  progressBar.style.width = `${(state.currentIndex / questions.length) * 100}%`;
  renderNavigator();
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
  resultText.textContent = `${levelLabel.textContent} bolumunde ${getCurrentQuestions().length} sorunun ${levelScore} tanesini dogru yaptin. Geri oku ile zorluk secimine donebilir ve baska bir bolume gecebilirsin.`;
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

backToLevelsBtn.addEventListener("click", () => {
  appShell.classList.add("hidden-layout");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  levelScreen.classList.remove("hidden");
});
startBtn.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  levelScreen.classList.remove("hidden");
});

chooserButtons.forEach((button) => {
  button.addEventListener("click", () => {
    levelScreen.classList.add("hidden");
    appShell.classList.remove("hidden-layout");
    setLevel(button.dataset.startLevel);
  });
});
