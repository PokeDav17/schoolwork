const questions = [
    "Il personaggio è famoso per i suoi contributi nel campo della scienza?",
    "Il personaggio è noto per le sue opere nell'ambito della tecnologia?",
    "Il personaggio è rinomato nell'ambito dell'ingegneria?",
    "Il personaggio è famoso per i suoi risultati nell'arte?",
    "Il personaggio è conosciuto nel campo della matematica?"
];

const characters = {
    "Albert Einstein": [true, false, false, false, true],
    "Leonardo da Vinci": [true, true, true, true, true],
    // Aggiungi altri personaggi con le loro risposte alle domande
};

let currentQuestion = 0;
let characterGuess = null;

function displayQuestion() {
    document.getElementById("questions").innerHTML = questions[currentQuestion];
}

function restartGame() {
    currentQuestion = 0;
    characterGuess = null;
    displayQuestion();
    document.getElementById("result").innerHTML = "";
}

function checkAnswer(answer) {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        characterGuess = Object.keys(characters).find(character => {
            const characterAnswers = characters[character];
            for (let i = 0; i < characterAnswers.length; i++) {
                if (characterAnswers[i] !== answer[i]) {
                    return false;
                }
            }
            return true;
        });
        document.getElementById("result").innerHTML = characterGuess ? `Il personaggio è ${characterGuess}!` : "Non sono riuscito a indovinare il personaggio.";
    }
}

document.getElementById("restart").addEventListener("click", restartGame);
displayQuestion();