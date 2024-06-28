const correctAnswer = "(banana orange)";

const checkAnswer = () => {

  const userAnswer = document.getElementById('input-tag').value;

  console.log(userAnswer);
  if (userAnswer === correctAnswer) {
    window.location.href ="welcome.html";
  } else {
    window.location.href ="hint.html";
  }
}

document.getElementById('enter-btn').addEventListener('click', checkAnswer);

