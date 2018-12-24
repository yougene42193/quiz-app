const STORE = [
  {
    question: 'Derrick Rose was the youngest player to win MVP. How old was he when he won the MVP?',
    answer: [
      '24 years old',
      '22 years old',
      '19 years old',
      '21 years old',
    ],
    rightAnswer: '22 years old',
  },
  {
    question: 'Which team holds the record for most consecutive missed 3 pointers in a playoff game?',
    answer: [
      'New York Knicks',
      'Oklahoma City Thunder',
      'Cleveland Cavaliers',
      'Houston Rockets',
    ],
    rightAnswer: 'Houston Rockets',
  },
  {
    question: 'Which player did not win the Rookie of the Year award?',
    answer: [
      'James Harden',
      'Emeka Okafor',
      'Kevin Durant',
      'Tyreke Evans',
    ],
    rightAnswer: 'James Harden',
  },
  {
    question: 'Which players has never score more then 50 points in a game?',
    answer: [
      'Corey Brewer',
      'Paul George',
      'Terrence Ross',
      'Anthony Davis',
    ],
    rightAnswer: 'Paul George',
  },
  {
    question: 'What team original drafted Kawhi Leonard?',
    answer: [
      'San Antonio Spurs',
      'Toronto Raptors',
      'Golden State Warriors',
      'Indiana Pacers',
    ],
    rightAnswer: 'Indiana Pacers',
  },
];

let currentQuestionNum = 0;
let currentScore = 0;

function startQuizButton() {
  $('button').on('click', function(event) {
    $('.opening').remove();
    $('.js-quizForm').css('display', 'block');
    $('form:nth-child(1)').css('display', 'block');
  });
}

function generateQuizList(item) {
  return `
  <form>
    <label>${item.question}</label>
    <label class="answerChoice">
      <input type="radio" value="${item.answer[0]}" name="answer" required>
      <p class="answer">${item.answer[0]}</p>
    </label>
    <label class="answerChoice">
      <input type="radio" value="${item.answer[1]}" name="answer">
      <p class="answer">${item.answer[1]}</p>
    </label>
    <label class="answerChoice">
      <input type="radio" value="${item.answer[2]}" name="answer">
      <p class="answer">${item.answer[2]}</p>
    </label>
    <label class="answerChoice">
      <input type="radio" value="${item.answer[3]}" name="answer">
      <p class="answer">${item.answer[3]}</p>
    </label>
    <p class="correctAnswer">${item.rightAnswer}</p>
    <button type="button">Submit</button>
  </form>`;
}

function generateQuizString(quizAnswer) {
  console.log('Generating question element');
  const items = quizAnswer.map(item => generateQuizList(item));
  return items.join('');
}

function renderQuestion() {
  const questionAnswers = generateQuizString(STORE);
  $('.js-quizForm').html(questionAnswers);
}

function generateQuiz() {
  startQuizButton();
  renderQuestion();
}

$(generateQuiz);