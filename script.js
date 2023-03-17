const quizData = [
    {
      question: "WHICH TYPE OF PARTNER YOU WANT?",
      a: "Loyal",
      b: "Caring",
      c: "Lovable",
      d: "All of the above",
      correct: "d",
    },
    {
      question: "HOW LONG YOU WANT THAT RELATIONSHIP WITH YOUR PARTNER?",
      a: "Forever",
      b: "Two Year",
      c: "Four Year",
      d: "One Year",
      correct: "a",
    },
    {
      question: "ARE YOU CUTE AND BEAUTIFUL?",
      a: "NO",
      b: "YES",
      c: "NOPE",
      d: "LIL",
      correct: "b",
    },
    {
      question: "Your Partner can only Be",
      a: "Anyone",
      b: "Me",
      c: "Someone",
      d: "None",
      correct: "b",
    }
  ];
  
  let index = 0;
  let correct = 0;
  let incorrect = 0;
  total = quizData.length;
  let questionBox = document.getElementById("questionBox");
  let allInputs = document.querySelectorAll("input[type='radio']")
  
  const loadQuestion = () => {
    if (total === index) {
      return quizEnd()
    }
    reset();
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
  }
  
  document.querySelector("#submit").addEventListener(
    "click",
    function () {
      const data = quizData[index];
      const ans = getAnswer();
      if (ans === data.correct) {
       correct++
      } else {
        incorrect++
      }
      index++
      loadQuestion()
    }
  )
  
  const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputE1) => {
      if (inputE1.checked) {
        ans = inputE1.value;
      }
    });
    return ans;
  };
  
  const reset = () => {
    allInputs.forEach(
        (inputE1) => {
      inputE1.checked = false;
    }
    )
  }
const quizEnd = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
       <div class="col">
       <h3 class="w-100"> Thankyou For selecting me!! I Love You ❤️ </h3>
       
       </div> 
`
  }

  loadQuestion(index);
  















