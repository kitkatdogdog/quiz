//alert("Hello, Welcome to my quiz!");

var questionNumber = 1;

var score = 0;

function showQuestion(question) {
  $('p').hide();
  $("p:nth-of-type("+question + ")").show();
}

$('span').click(function() {
  if ($(this).hasClass ("correct")) {
    score++;
  }
  $('.score').html(score);
  questionNumber++;
  showQuestion(questionNumber);
});

showQuestion(questionNumber)
