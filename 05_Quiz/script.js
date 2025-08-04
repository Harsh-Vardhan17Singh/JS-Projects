document.addEventListener("DOMContentLoaded",()=>{
   const startBtn =document.getElementById("start-btn")
   const  nextBtn =document.getElementById("next-btn")
   const restartBtn = document.getElementById("restart-btn")
   const questionContainer=document.getElementById("question-container")
   const questionText = document.getElementById("question-text")
   const choicesList = document.getElementById("choices-list")


    const question =[
        {
            question: "What is the capital of Gemany?",
            choices:["Paris","London","Berlin","Madrid"],
            Answer:"Berlin"
        },

        {
            question:"Which Planet is Known as the Red Planet?",
            choices:["Earth","Mars","Jupiter","Saturn"],
            Answer:"Mars"

        },

        {
            question:"Who Wrote The Book 'Think and Grow rich?'",
            choices:[
                "Charles Dickens",
                "Napolean Hill",
                "Robin Sharma",
                "Mark Twin",
            ],
            Answer:"Napolean Hill"
        },

        {
            question:"Which Man is called the 'Steel Man of India'?",
            choices:[
                "Jawarhlal Nehru",
                "Sardar Vallabhbhai Patel",
                "Gandhi Ji",
                "Subhash Chandra Bose"
            ],
            Answer:"Sardar Vallabhbhai Patel"
        },

        {
            question:"Which City is Known as 'City of Lakes'?",
            choices:[
                "Udaipur","Jaipur","Noida","Chennai"
            ],
            Answer:"Udaipur"
        }
    ]
   let currentQuestionIndex = 0
    let score = 0

    startBtn.addEventListener('click', startQuiz)

    nextBtn.addEventListener('click', () =>{
        currentQuestionIndex++
        if(currentQuestionIndex < questions.length){
            showQuestion()
        }else{
            showResult()
        }

    })

    restartBtn.addEventListener('click',()=>{
        currentQuestionIndex  = 0
        score = 0
        resultContainer.classList.add('hidden')
        startQuiz()
    })


    function startQuiz(){
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
          
    }

    function showQuestion(){
        nextBtn.classList.add('hidden')
        questionText.textContent = questions[currentQuestionIndex].question
        choicesList.innerHTML = "" //clear previous choices
        questions[currentQuestionIndex].choices.forEach(choices =>{
            const li = document.createElement('li')
            li.textContent = choices
            li.addEventListener('click', () => SelectAnswer(choices)) 
            choicesList.appendChild(li)





            //SelectAnswer() would run this function immediately and we don't want it , we want it to execute when the anyone click on it

            //But by using this callback function we are refering to the selectAnswer and also pass parameter to it , it can solve both the instances

        })
    }

    function SelectAnswer(choice){
        const correctAnswer = questions[currentQuestionIndex].Answer
        if(choice == correctAnswer){
            score++
        }

        nextBtn.classList.remove('hidden')
    }

    function showResult(){
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent = `${score} out of ${questions.length}`
    }
})
})
