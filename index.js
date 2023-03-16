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

// Set start
// var start = true;

// const iteration = (id) => {

//   //getting the elements
//   const questionElement = document.querySelector(".question");
//   const option1 = document.querySelector(".opt1");
//   const option2 = document.querySelector(".opt2");
//   const option3 = document.querySelector(".opt3");
//   const option4 = document.querySelector(".opt4");

//   //setting the question
//   questionElement.innerText = questions[id].q;

//   //setting the text for the option
//   option1.innerText = questions[id].a[0].text;
//   option2.innerText = questions[id].a[1].text;
//   option3.innerText = questions[id].a[2].text;
//   option4.innerText = questions[id].a[3].text;


//   //setting the value for the options
//   option1.value = questions[id].a[0].isCorrect;
//   option2.value = questions[id].a[1].isCorrect;
//   option3.value = questions[id].a[2].isCorrect;
//   option4.value = questions[id].a[3].isCorrect;

// }

// //starting line
// if (start) {
//   iteration(0);
// }

// // Next button and method
// const next = document.querySelector(".btn");
// var id = 0;

// next.addEventListener("click", () => {
//     if (id < 3) {
//         id++;
//         iteration(id);
//         console.log(id);
//     }
// })

const iterate = (id) => {

}
