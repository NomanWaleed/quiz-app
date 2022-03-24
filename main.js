let quiz = [
  {
    "id": 1,
    "type": "multiple_choice",
    "question": "Q1 .Why is the sky?",
    "answers": [
      { "id": 1, "answer": "Because of physics"},
      { "id": 2, "answer": "Because that the way it always was"},      
      { "id": 3, "answer": "I don't know"},      
    ],
    "correct_answer": 1
  },
  {
    "id": 2,
    "type": "multiple_choice",
    "question": "Q2. Why is the sky blue?",
    "answers": [
      { "id": 1, "answer": "Because of physics"},
      { "id": 2, "answer": "Because that the way it always was"},      
      { "id": 3, "answer": "I don't know"},      
    ],
    "correct_answer": 2
  },
  {
    "id": 2,
    "type": "multiple_choice",
    "question": "Q3. Why is the sky blue?",
    "answers": [
      { "id": 1, "answer": "Because of physics"},
      { "id": 2, "answer": "Because that the way it always was"},      
      { "id": 3, "answer": "I don't know"},      
    ],
    "correct_answer": 2
  },
  {
    "id": 2,
    "type": "multiple_choice",
    "question": "Q4. Why is the sky blue?",
    "answers": [
      { "id": 1, "answer": "Because of physics"},
      { "id": 2, "answer": "Because that the way it always was"},      
      { "id": 3, "answer": "I don't know"},      
    ],
    "correct_answer": 2
  },
  {
    "id": 2,
    "type": "multiple_choice",
    "question": "Q5. Why is the sky blue?",
    "answers": [
      { "id": 1, "answer": "Because of physics"},
      { "id": 2, "answer": "Because that the way it always was"},      
      { "id": 3, "answer": "I don't know"},      
    ],
    "correct_answer": 2
  },
];



let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let submit = document.getElementById("submit");
let answerCLass = document.querySelectorAll(".answer");
let result = document.getElementById("result");

let questionNumber = 0;
let marks = 0;
const loadQuestion = () =>{
  let questionList = quiz[questionNumber];
  // console.log(questionList.answers.id[]);

  // console.log(questionList.answers[0].answer);

  question.innerText = questionList.question;
  option1.innerText = questionList.answers[0].answer;
  option2.innerText = questionList.answers[1].answer;
  option3.innerText = questionList.answers[2].answer;
}
loadQuestion();

const getCheckedAnswer=()=>{
  let answered;

  answerCLass.forEach((curElem)=>{
    if(curElem.checked){
      console.log("curElem", curElem);
      answered = curElem.id;
    }
  });
  return answered;
};

submit.addEventListener('click', ()=>{
  // console.log("clicked");
  const checkedAnswer = getCheckedAnswer();
  console.log("checkedAnswer",typeof(parseInt(checkedAnswer)));

  if(parseInt(checkedAnswer) === quiz[questionNumber].id){
    marks++;
  }
  questionNumber++;
  if(questionNumber < quiz.length){
    loadQuestion();
  }
  else{
    submit.disabled= true;
    result.innerHTML=`
    <h3>Your Final Score ${marks} / ${quiz.length}</h3>
    <button class="button" onclick="location.reload()">Attemp Again</button>
    `;
    // document.getElementsByClassName("resultArea").style.display = "block";
    result.classList.remove('resultArea')

  }
});