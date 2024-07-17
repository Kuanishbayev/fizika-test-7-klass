const questions = [
    {
        question: 'Eki dene bir-birine ısqalanǵanda olardıń ekewide zaryadlanadı. Bunda qaysı deneniń massası kemeyedi?',
        answers: [
            {text: 'oń zaryad alǵan deneniń', correct: true},
            {text: 'teris zaryad alǵan deneniń', correct: false },
            {text: 'eki deneniń.', correct: false},
        ]
    },
    {
        question: 'Kislorod atomı yadrosı átirapında 8 elektron qozǵaladı. Kislorod atomı yadrosında qansha proton bar?',
        answers: [
            {text: "4", correct: false},
            {text: "16", correct: false},
            {text: "8", correct: true}
        ]
    },
    {
        question: 'Zaryadlanǵan denede 2,5·10<sup>8</sup> artıq elektron bar. Dene qanday zaryad alǵan (C)?',
        answers: [
            {text: "+4·10<sup>-11</sup>", correct: false},
            {text: "-8·10<sup>-11</sup>", correct: false},
            {text: "-4·10<sup>-11</sup>", correct: true}
        ]
    },
    {
        question: 'Qanday kórinistegi ótkizgish betinde elektr zaryadı birdey bólistiriledi?',
        answers: [
            {text: "kub", correct: false},
            {text: "shar", correct: true},
            {text: "parallelepiped", correct: false}
        ]
    },
    {
        question: 'Ótkizgishte elektr togı bolıwı ushın qanday shártler orınlanıw kerek?',
        answers: [
            {text: "erkin elektronlar bolıwı", correct: false},
            {text: "erkin elektronlar hám sırtqı elektr maydanı bolıwı", correct: true},
            {text: "elektronlar hám protonlar bolıwı", correct: false}
        ]
    },
    {
        question: 'Zatlardıń bir salıstırmalı qarsılıqları bir- likleri Ω∙m hám Ω∙mm<sup>2</sup>/m da beriledi. Olar bir- birinen neshe esege parıqlanadı?',
        answers: [
            {text: "10<sup>6</sup>", correct: true},
            {text: "10<sup>3</sup>", correct: false},
            {text: "10", correct: false}
        ]
    },
    {
        question: 'Eger sımdı sozıp, ol 2 ese uzayttırılsa, onıń qarsılıǵı qalay ózgeredi?',
        answers: [
            {text: "4 ese artadı", correct: true},
            {text: "2 ese kemeyedi", correct: false},
            {text: "ózgermeydi", correct: false}
        ]
    },
    {
        question: 'Birinshi sımnıń uzunlıǵı 12,8 m, ekin shisiniki bolsa 1,6 m. . Sımlardıń kese- kesimi hám materialı birdey. Qaysı sımnıń qarsılıǵı neshe ese úlken?',
        answers: [
            {text: "birinshi, 8 ese úlken", correct: true},
            {text: "ekinshi, 8 ese úlken", correct: false},
            {text: "birinshi, 3,2 ese úlken", correct: false}
        ]
    },
    {
        question: 'Sımdı teńdey eki bólekke bólip, eki bólekte ústpe-úst taqlansa, sımnıń qarsılıǵı qalay ózgeredi?',
        answers: [
            {text: "4 ese kemeyedi", correct: true},
            {text: "2 ese kemeyedi", correct: false},
            {text: "ózgermeydi", correct: false}
        ]
    },
    {
        question: 'Elektr qarsılıǵı 30 Ω bolǵan ótkizgishten 30 sekundta 15 C zaryad ótken. Ótkizgish ushlarına berilgen kernewdi tabıń (V).',
        answers: [
            {text: "15", correct: true},
            {text: "12", correct: false},
            {text: "6", correct: false}
        ]
    },
    {
        question: 'Uzınlıǵı 10 m hám kese kesimi 2mm<sup>2</sup> bolǵan nikelin sım ushlarına 8 V kernew berildi. Onnan ótiwshi tok kúshin anıqlań. Nikelin sım ushın salıstırmalı qarsılıq 4∙10<sup>-7</sup> Ω∙m.',
        answers: [
            {text: "4 A", correct: true},
            {text: "2 A", correct: false},
            {text: "8 A", correct: false}
        ]
    }
];

const questionElement = document.getElementById("quiz");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");
let correctAudio = new Audio('assets/sound/correct.mp3');
let errorAudio = new Audio('assets/sound/error.mp3');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Keyingi";
    questionElement.style = 'block';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    shuffleArray(currentQuestion.answers).forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button")
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    // console.log(isCorrect);

    if (isCorrect) {
        selectBtn.classList.add('correct');
        correctAudio.play()
        score++;
    } else {
        selectBtn.classList.add('incorrect');
        errorAudio.play();
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
            // console.log(button.dataset.correct);
            // score++;
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
    // answerButton.style.display = 'none';
}

function showScore() {
    resetState();
    let persentage = (100/questions.length) * score;
    questionElement.innerHTML = `Nátiyje: ${Math.round(persentage)}%<br>SORAWLAR: ${questions.length}<br>JUWAPLAR: ${score}!`;
    nextButton.style.display = 'block';
    nextButton.innerHTML = 'Qayta tapsırıw';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();