'use strict';
const STORE = [
  {
    question: 'Stephen Curry currently holds the 1st, 2nd and 3rd spots for 3 pointers made in a season. Who hold the number 4 spot for 3 pointers made in a season?',
    answer: [
      'Ray Allen',
      'Larry Bird',
      'Klay Thompson',
      'Michael Jordon',
    ],
    rightAnswer: 'Klay Thompson',
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
    question: 'Which 8th seeded team was the last team to upset the 1st seed?',
    answer: [
      'Philadelphia 76ers',
      'Denver Nuggets',
      'Memphis Grizzlies',
      'Miami Heat',
    ],
    rightAnswer: 'Philadelphia 76ers',
  },
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
    question: 'What team original drafted Kawhi Leonard?',
    answer: [
      'San Antonio Spurs',
      'Toronto Raptors',
      'Golden State Warriors',
      'Indiana Pacers',
    ],
    rightAnswer: 'Indiana Pacers',
  },
  {
    question: 'What percentage chance does the 3rd worst team have in obtaining the Number 1 overall pick in the NBA draft?',
    answer: [
      '14.0% chance',
      '25.0% chance',
      '13.8% chance',
      '11.7% chance',
    ],
    rightAnswer: '14.0% chance',
  },
  {
    question: 'Who has had made the playoffs every year in their career?',
    answer: [
      'Kobe Bryant',
      'Lebron James',
      'Michael Jordan',
      'Tim Duncan',
    ],
    rightAnswer: 'Tim Duncan',
  },
  {
    question: 'Only one 8th seeded team has been to the NBA finals. What team was it?',
    answer: [
      'Chicago Bulls',
      'Philadelphia 76ers',
      'New York Knicks',
      'Los Angeles Lakers'
    ],
    rightAnswer: 'New York Knicks',
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
    <label class="questionString">${item.question}</label>
    <label class="answerChoice">
      <input type="radio" value="${item.answer[0]}" name="answer" required />
      <span class="answer">${item.answer[0]}</span>
    </label>
    <label class="answerChoice">
      <input type="radio" value="${item.answer[1]}" name="answer" />
      <span class="answer">${item.answer[1]}</span>
    </label>
    <label class="answerChoice">
      <input type="radio" value="${item.answer[2]}" name="answer" />
      <span class="answer">${item.answer[2]}</span>
    </label>
    <label class="answerChoice">
      <input type="radio" value="${item.answer[3]}" name="answer" />
      <span class="answer">${item.answer[3]}</span>
    </label>
    <p class="rightAnswer">${item.rightAnswer}</p>
    <button type="button" class="submitButton">Submit</button>
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