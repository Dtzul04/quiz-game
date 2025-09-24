const questions = [
    "What color is the sky on a clear day?",
    "What is the opposite of hot?",
    "How many legs does a spider have?"
];

const answers = [
    "blue",
    "cold",
    "eight"
];

function quiz() {
    let totalPoints = 0;

    for (let i = 0; i < questions.length; i++) {
        let guesses = 3;
        let correct = false;

        while (guesses > 0 && !correct) {
            let userAnswer = prompt(questions[i]).toLowerCase();

            if (userAnswer === answers[i]) {
                totalPoints += guesses; 
                correct = true;
                alert(`Correct! You earned ${guesses} points.`);
            } else {
                guesses--;
                if (guesses > 0) {
                    alert(`Wrong! Try again. You have ${guesses} guesses left.`);
                } else {
                    alert(`Sorry, the correct answer was "${answers[i]}".`);
                }
            }
        }
    }

    return totalPoints;
}

const score = quiz();
document.getElementById("quiz-result").innerHTML = `<p>Your total score is: ${score} points</p>`;