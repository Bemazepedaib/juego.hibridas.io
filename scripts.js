const quizData = [
    {
        question: "¿Qué aplicaciones cuesta menos desarrollar?",
        a: "Aplicaciones Híbridas",
        b: "Aplicaciones Nativas",
        correct: "a",
    },
    {
        question: "¿Cuáles tipos de aplicaciones requieren de menos mantenimiento?",
        a: "Aplicaciones Híbridas",
        b: "Aplicaciones Nativas",
        correct: "a",
    },
    {
        question: "¿En qué tipo de aplicaciones se encuentra una facilidad en encontrar desarrolladores?",
        a: "Aplicaciones Híbridas",
        b: "Aplicaciones Nativas",
        correct: "a",
    },
    {
        question: "¿Cuáles tipos de aplicaciones tienen un mejor rendimiento?",
        a: "Aplicaciones Híbridas",
        b: "Aplicaciones Nativas",
        correct: "b",
    },
    {
        question: "¿Qué tipo de aplicaciones tienen mas acceso a caracteristicas del dispositivo?",
        a: "Aplicaciones Híbridas",
        b: "Aplicaciones Nativas",
        correct: "b",
    },
    {
        question: "¿Cuáles aplicaciones tienen un mejor aspecto visual?",
        a: "Aplicaciones Híbridas",
        b: "Aplicaciones Nativas",
        correct: "b",
    },
    {
        question: "¿Qué aplicaciones  tienen un mejor desarrollo inicial?",
        a: "Aplicaciones Híbridas",
        b: "Aplicaciones Nativas",
        correct: "a",
    },
    {
        question: "¿Qué tipo de aplicaciones no tienen dependencia de conexiona  internet?",
        a: "Aplicaciones Híbridas",
        b: "Aplicaciones Nativas",
        correct: "b",
    },
    {
        question: "¿Qué tipos de aplicaciones tienen la curva de aprendizaje mas baja?",
        a: "Aplicaciones Híbridas",
        b: "Aplicaciones Nativas",
        correct: "a",
    },
    {
        question: "¿Qué tipo de aplicaciones tienen mas facilidad para ser exportadas a otras plataformas?",
        a: "Aplicaciones Híbridas",
        b: "Aplicaciones Nativas",
        correct: "a",
    },
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
    <h2>Respondiste ${score}/${quizData.length} preguntas correctamente :D</h2>
    <button onclick="history.go(0)">Juega de nuevo.</button>
    ` // location.reload() won't work in CodePen for security reasons;
        }
    }
});
