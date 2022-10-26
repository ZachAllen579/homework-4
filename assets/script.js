let score = 0
let q4 = ["What does null mean?"];
let q4Answer1 = ["The object has value"]
let q4Answer2 = ["The object has no value"]
let q4Answer3 = ["The object is a string"]
let q4Answer4 = ["The object is an object"]

questionOne()

function right() {
    let right = "right"
    let rightOrWrong = document.getElementById("rightOrWrong")
    rightOrWrong.innerHTML = right
}

function wrong() {
    let wrong = "wrong"
    let rightOrWrong = document.getElementById("rightOrWrong")
    rightOrWrong.innerHTML = wrong
}

function questionOne() {
    
    let question = document.getElementById("question")
    let answer1 = document.getElementById("answer1")
    let answer2 = document.getElementById("answer2")
    let answer3 = document.getElementById("answer3")
    let answer4 = document.getElementById("answer4")
    
    let q1 = ["What is a Boolean?"];
    let q1Answer1 = ["A boolean is either true or false"]
    let q1Answer2 = ["False"]
    let q1Answer3 = ["True"]
    let q1Answer4 = ["Don't pick this one"]
    
    question.innerHTML = q1;
    
    answer1.innerHTML = q1Answer1
    answer2.innerHTML = q1Answer2
    answer3.innerHTML = q1Answer3
    answer4.innerHTML = q1Answer4

    answer1.addEventListener("click", function() {
        score++;
        right()
        questionTwo()
    })

    answer2.addEventListener("click", function() {
        wrong()
        questionTwo()
    })

    answer3.addEventListener("click", function() {
        wrong()
        questionTwo()
    })

    answer4.addEventListener("click", function() {
        wrong()
        questionTwo()
    })
}

function questionTwo() {
    
    let question = document.getElementById("question")
    let answer1 = document.getElementById("answer1")
    let answer2 = document.getElementById("answer2")
    let answer3 = document.getElementById("answer3")
    let answer4 = document.getElementById("answer4")
    
    let q2 = ["What does concat mean?"];
    let q2Answer1 = ["Creates an array"]
    let q2Answer2 = ["It will add the numbers inside of the array for you"]
    let q2Answer3 = ["Combines two strings and returns the newer string",]
    let q2Answer4 = ["It wil remove the last element from the array"]
    
    question.innerHTML = q2;
    
    answer1.innerHTML = q2Answer1
    answer2.innerHTML = q2Answer2
    answer3.innerHTML = q2Answer3
    answer4.innerHTML = q2Answer4

    answer1.addEventListener("click", function() {
        wrong()
        questionThree()
    })
    
    answer2.addEventListener("click", function() {
        wrong()
        questionThree()
    })
    
    answer3.addEventListener("click", function() {
        score++;
        right()
        questionThree()
    })

    answer4.addEventListener("click", function() {
        wrong()
        questionThree()
    })
}

function questionThree() {
    
    let question = document.getElementById("question")
    let answer1 = document.getElementById("answer1")
    let answer2 = document.getElementById("answer2")
    let answer3 = document.getElementById("answer3")
    let answer4 = document.getElementById("answer4")
    
   
    let q3 = ["What does toUpperCase() do to the text"];
    let q3Answer1 = ["Converts all strings to objects"]
    let q3Answer2 = ["Converts a text to uppercase"]
    let q3Answer3 = ["Converts a text to lowercase"]
    let q3Answer4 = ["Converts all objects to strings"]
    
    question.innerHTML = q3;
    
    answer1.innerHTML = q3Answer1
    answer2.innerHTML = q3Answer2
    answer3.innerHTML = q3Answer3
    answer4.innerHTML = q3Answer4
    answer1.addEventListener("click", function() {
        wrong()
        questionFour()
    })
    
    answer2.addEventListener("click", function() {
        score++;
        right()
        questionFour()
    })

    answer3.addEventListener("click", function() {
        wrong()
        questionFour()
    })

    answer4.addEventListener("click", function() {
        wrong()
        questionFour()
    })
}

function questionFour() {
    
    let question = document.getElementById("question")
    let answer1 = document.getElementById("answer1")
    let answer2 = document.getElementById("answer2")
    let answer3 = document.getElementById("answer3")
    let answer4 = document.getElementById("answer4")
    
   
    let q4 = ["What does null mean?"];
    let q4Answer1 = ["The object has value"]
    let q4Answer2 = ["The object has no value"]
    let q4Answer3 = ["The object is a string"]
    let q4Answer4 = ["The object is an object"]
    
    question.innerHTML = q4;
    
    answer1.innerHTML = q4Answer1
    answer2.innerHTML = q4Answer2
    answer3.innerHTML = q4Answer3
    answer4.innerHTML = q4Answer4
    answer1.addEventListener("click", function() {
        wrong()
        showScore()
    })
    
    answer2.addEventListener("click", function() {
        score++;
        right()
        showScore()
    })

    answer3.addEventListener("click", function() {
        wrong()
        showScore()
    })

    answer4.addEventListener("click", function() {
        wrong()
        showScore()
    })
}
function showScore(){
    console.log(score)
    let finalScore = document.getElementById("finalScore")
    finalScore.innerHTML = score
}