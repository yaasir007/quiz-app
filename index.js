const questions = [
  {
    id: 0,
    q: "Which of the following keywords is used to define a variable in Javascript?",
    a: [
      { text: "var", isCorrect: false },
      { text: "let", isCorrect: false },
      { text: "Both A and B", isCorrect: true },
      { text: "None of the above", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Which method can be used to display data in some form using Javascript?",
    a: [
      { text: "document.Write()", isCorrect: false, isSelected: false },
      { text: "window.alert()", isCorrect: false },
      { text: "All of the above", isCorrect: false },
      { text: "console.log()", isCorrect: true },
    ],
  },
  {
    id: 2,
    q: "What keyword is used to check whether a given property is valid or not?",
    a: [
      { text: "exists", isCorrect: false },
      { text: "is in", isCorrect: false },
      { text: "in", isCorrect: true },
      { text: "lies", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "What is the oldest language?",
    a: [
      { text: "CSS", isCorrect: false },
      { text: "JS", isCorrect: false },
      { text: "HTML", isCorrect: true },
      { text: "Python", isCorrect: false },
    ],
  },
];

//getting the elements
const quizWrapper = document.querySelector(".quiz-wrapper");
const quizContainer = document.querySelector(".quiz-container");

const questionElement = document.querySelector('.question');
const opt1Element = document.querySelector(".opt1");
const opt2Element = document.querySelector(".opt2");
const opt3Element = document.querySelector(".opt3");
const opt4Element = document.querySelector(".opt4");
const btnElment = document.querySelector(".btn");

const iterate = (id) => {
  //setting the question and answer options
  questionElement.innerText = questions[id].q;
  opt1Element.innerText = questions[id].a[0].text;
  opt2Element.innerText = questions[id].a[1].text;
  opt3Element.innerText = questions[id].a[2].text;
  opt4Element.innerText = questions[id].a[3].text;


  //adding value to elements
  opt1Element.value = questions[id].a[0].isCorrect;
  opt2Element.value = questions[id].a[1].isCorrect;
  opt3Element.value = questions[id].a[2].isCorrect;
  opt4Element.value = questions[id].a[3].isCorrect;
};

let start = true;
if (start) {
  iterate(0);
}

const result = () => {
  const finishedBox = document.createElement('div');
  finishedBox.classList.add("result");
  finishedBox.innerHTML = `<p>This Quiz is <br>Finished!!!</p>`;
  quizContainer.append(finishedBox);
}

id = 0;
btnElment.addEventListener('click', () => {
  if (id < 3) {
    start = false;
    id++;
    iterate(id);
  } else {
    quizWrapper.style.display = 'none';
    result();
  }
})
