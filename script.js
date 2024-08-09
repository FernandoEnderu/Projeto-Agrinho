// Script para quiz sobre agricultura e cidade
const questions = [
    {
        question: "Qual é a principal contribuição da agricultura para a vida urbana?",
        options: ["Produção de energia elétrica", "Fornecimento de alimentos", "Construção de edifícios", "Fabricação de carros"],
        answer: 1  // Índice da opção correta
    },
    {
        question: "O que é um 'foodscape'?",
        options: ["Uma paisagem agrícola", "Um prato de comida gourmet", "Uma festa tradicional", "Um estilo de dança urbana"],
        answer: 0
    },
    {
        question: "Qual destas é uma vantagem da agricultura urbana?",
        options: ["Redução do uso de espaço", "Aumento da poluição sonora", "Menor acesso a alimentos frescos", "Menos interação social"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const startQuizButton = document.getElementById('startQuiz');
const quizContainer = document.getElementById('quizContainer');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextQuestionButton = document.getElementById('nextQuestion');

startQuizButton.addEventListener('click', startQuiz);
nextQuestionButton.addEventListener('click', nextQuestion);

function startQuiz() {
    startQuizButton.style.display = 'none';
    quizContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';

    q.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(index) {
    const q = questions[currentQuestion];
    if (index === q.answer) {
        feedbackElement.textContent = 'Resposta correta!';
        score++;
    } else {
        feedbackElement.textContent = 'Resposta incorreta!';
    }
    nextQuestionButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        feedbackElement.textContent = '';
        nextQuestionButton.style.display = 'none';
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = `<h2>Quiz Concluído</h2>
                              <p>Você acertou ${score} de ${questions.length} perguntas.</p>`;
}
