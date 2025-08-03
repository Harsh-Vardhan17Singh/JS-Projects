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
})