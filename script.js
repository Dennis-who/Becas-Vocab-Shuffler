// Define your vocabulary list
const vocabularyList = [
    "affiliate", "bypass", "rigorous", "solicitation", "delicate", "obstruct",
    "recreational", "fabrication", "tamper", "conceptualize", "solicited",
    "by virtue of", "genocide", "speculate", "articulate", "artisan", "cluster",
    "mitigate", "substantiate", "millennial", "fracture", "inception", "phishing",
    "vishing", "smishing", "encrypted", "ransom", "solicit", "elicited", "manipulate",
    "tension", "daunting", "tactic", "credibility", "meditation", "mindfulness",
    "endorse", "confrontation", "gossip", "traumatized", "empirical", "synapses",
    "temper", "twig", "synopsis", "sanitize", "fluff", "flesh out", "extrapolate",
    "cynical", "embark", "edamame", "beet", "eel", "seaweed", "bamboo shoot",
    "scallion", "kimchee", "broth", "tonkotsu", "distasteful", "crummy",
    "tailgating party", "nuance", "scrutinize", "somatic", "dissonance", "sanction",
    "censure", "tsunami", "displacement", "cease", "static", "dynamic", "humility",
    "hegemony", "doodle", "feasibility", "pragmatic", "extensive", "deployment",
    "nomination", "feudalism", "provocative", "testimonial", "irrevocably",
    "pro bono", "jarring", "executive summary", "tangible", "expatriates", "flyer",
    "incentive", "bequest", "capacity", "exacerbate", "disrupt", "irascible",
    "procrastination", "corny", "cheesy", "enviable", "recession", "entity",
    "bankrupt", "encapsulate", "recipient", "misnomer", "devastating", "amendment"
];

let currentIndex = 0;

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the vocabulary list initially
shuffleArray(vocabularyList);

// Function to start the flashcards
function startFlashcards() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("recognizeButton").style.display = "inline";
    document.getElementById("wtfButton").style.display = "inline";
    showNextWord();
}

// Function to display a random word
function showNextWord() {
    const flashcardWord = document.getElementById("flashcard-word");

    // Shuffle the vocabulary list if all words have been displayed
    if (currentIndex >= vocabularyList.length) {
        shuffleArray(vocabularyList);
        currentIndex = 0;
    }

    // Display the current word
    flashcardWord.textContent = vocabularyList[currentIndex];
    currentIndex++;
}
