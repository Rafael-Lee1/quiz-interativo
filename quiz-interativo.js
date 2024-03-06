function checkAnswer() {
    let answer = document.querySelector('input[name="answer"]:checked').value;
    // Implemente a lógica de verificação da resposta aqui
    let correctAnswer = "Paris"; // Definindo a resposta correta como "Paris"
    let resultMessage = answer === correctAnswer ? 'Resposta correta!' : 'Resposta incorreta!';
    document.getElementById('result').textContent = resultMessage;
}
