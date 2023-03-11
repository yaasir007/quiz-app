const questions = [{
        id: 0,
        q: "Which of the following keywords is used to define a variable in Javascript?",
        a: [{ text: "var", isCorrect: false },
            { text: "let", isCorrect: false },
            { text: "Both A and B", isCorrect: true },
            { text: "None of the above", isCorrect: false }
        ]

    },
    {
        id: 1,
        q: "Which of the following methods can be used to display data in some form using Javascript?",
        a: [{ text: "document.Write()", isCorrect: false, isSelected: false },
            { text: "window.alert()", isCorrect: false },
            { text: "All of the above", isCorrect: false },
            { text: "console.log()", isCorrect: true }
        ]

    },
    {
        id: 2,
        q: "What keyword is used to check whether a given property is valid or not?",
        a: [{ text: "exists", isCorrect: false },
            { text: "is in", isCorrect: false },
            { text: "in", isCorrect: true },
            { text: "lies", isCorrect: false }
        ]
    },
    {
        id: 3,
        q: "What is what is used to check whether a given property is valid or not?",
        a: [{ text: "exists", isCorrect: false },
            { text: "is in", isCorrect: false },
            { text: "in", isCorrect: true },
            { text: "lies", isCorrect: false }
        ]
    }
]
const submitBtn = document.querySelector(".btn");
const currentQuestionElement = document.querySelector(".question");
const answers = document.querySelector(".answers");
let currentQuestion = 0;

submitBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestionElement != undefined) {
    currentQuestionElement.innerHTML = questions[currentQuestion].q;
  }
  const options = questions[currentQuestion].a;
});
