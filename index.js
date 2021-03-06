'use strict';
const STORE = [
  {
    question: 'Stephen Curry currently holds the 1st, 2nd and 3rd spots for 3 pointers made in a season. Who holds the number 4 spot?',
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

let questionNum = 0;
let scoreNum = 0;

function startQuizButton() {
  $('.startButton').on('click', function() {
    console.log('Starting Quiz');
    $('.opening').remove();
    $('.js-quizForm').css('display', 'block');
    $('.questionNum').text(1);
  });
}

function generateQuizList() {
  if (questionNum < STORE.length) {
  return `
  <div class="question-${questionNum}">
    <form>
      <fieldset>
        <label class="questionString">${STORE[questionNum].question}</label>
        <label class="answerChoice">
          <input type="radio" value="${STORE[questionNum].answer[0]}" name="answer" required />
          <span class="answer">${STORE[questionNum].answer[0]}</span>
        </label>
        <label class="answerChoice">
          <input type="radio" value="${STORE[questionNum].answer[1]}" name="answer" />
          <span class="answer">${STORE[questionNum].answer[1]}</span>
        </label>
        <label class="answerChoice">
          <input type="radio" value="${STORE[questionNum].answer[2]}" name="answer" />
          <span class="answer">${STORE[questionNum].answer[2]}</span>
        </label>
        <label class="answerChoice">
          <input type="radio" value="${STORE[questionNum].answer[3]}" name="answer" />
          <span class="answer">${STORE[questionNum].answer[3]}</span>
        </label>
        <p class="rightAnswer">${STORE[questionNum].rightAnswer}</p>
        <button type="submit" class="submitButton">Submit</button>
      </fieldset>
    </form>
  </div>`;
  } else {
    handleResults();
    $('.questionNum').text(10);
  }
}

function renderQuestion() {
  $('.js-quizForm').html(generateQuizList());
}

function handleQuestionTracker() {
// when clicking the next button 
// responsible for increasing the question value by increments of 1
// in the html .questionNum
  console.log('Handle Question Trackers, Working');
  questionNum ++;
  $('.questionNum').text(questionNum+1);
}

function handleScoreCount() {
// if the answer is correct
// increase the scoreNum value by increments of 1
// and display it on the html .scoreNum
  console.log('Updated Score Count');
  scoreNum ++;
  $('.scoreNum').text(scoreNum);
}

function handleSubmitAnswer() {
  // when clicking the submitButton
  // if the answer is equal to correct answer
  // display generateCorrectAnswer and update score
  // if the answer is not equal to correct answer
  // display generateWrongAnswer
  $('form').on('submit', function() {
    console.log('Submit working');
    event.preventDefault();
    let answer = $('input[type=radio][name=answer]:checked').val();
    let correctAnswer = `${STORE[questionNum].rightAnswer}`;
    if (answer === correctAnswer) {
      generateCorrectAnswer();
      handleScoreCount();
    } else {
      generateWrongAnswer();
      console.log(answer);
      console.log(correctAnswer)
    }
  });
}

function generateCorrectAnswer() {
  // generate a new html display for the correct answer
  console.log('Answer is correct');
  $('.js-quizForm').html('<div class="answerFeedback"><h2>Swish!</h2><img src="https://thumbs.gfycat.com/ImperfectSentimentalCoot-small.gif" alt="westbrook 3"/><p><button type="button" class="nextButton">Next</button></p></div>');
}

function generateWrongAnswer() {
  // generate a new html display for the incorrect answer
  // then display the correct answer
  console.log('Answer is incorrect');
  $('.js-quizForm').html(`<div class="answerFeedback"><h2>Air Ball</h2><img src="https://media1.tenor.com/images/e5b8c650ed7911a48b6d0242f326f73c/tenor.gif?itemid=5343086" alt="airball gif"/><p>The correct answer is ${STORE[questionNum].rightAnswer}</p><p><button type="button" class="nextButton">Next</button></p></div>`);
}

function handleNextQuestion() {
  // when clicking the next button
  // move to the next question
  $('main').on('click', '.nextButton',function() {
    console.log('Going to next question');
    handleQuestionTracker();
    renderQuestion();
    handleSubmitAnswer();
  });
}

function handleResults() {
  // display html with results of the quiz with the score
  if (scoreNum >= 7) {
    $('.js-quizForm').html(`
      <div class="resultsPage">
        <h2>Final Score: ${scoreNum}/10</h2>
          <p>Great Job!</p>
          <img src="https://i.gifer.com/j56.gif" alt="finals win gif"/>
        <p><button type="reset" class="resetButton">Another round?</button></p>
      </div>`
    );
  } else {
    $('.js-quizForm').html(`
      <div class="resultsPage">
        <h2>Final Score: ${scoreNum}/10</h2>
          <p>Not bad but not quite there yet!</p>
          <img src="https://media.giphy.com/media/9t6xpYZ9npJmM/giphy.gif" alt="alonzo gif"/>
        <p><button type="reset" class="resetButton">Another round?</button></p>
      </div>`
    );
  }
}

function handleReset() {
  // when clicking the reset button go back to the beginning of the quiz
  $('main').on('click', '.resetButton', function() {
    console.log('reset working');
    location.reload();
  });
}

function generateQuiz() {
  startQuizButton();
  renderQuestion();
  handleSubmitAnswer();
  handleNextQuestion();
  handleReset();
}

$(generateQuiz);