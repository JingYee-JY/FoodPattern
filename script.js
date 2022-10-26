const start = document.querySelector(".start")
const startButton = document.querySelector(".startButton")
const questionNumber = document.querySelector(".number")
const squence = document.querySelector(".squence")
const game = document.querySelector(".game")
const final = document.querySelector(".final")
const emoji = document.querySelector(".emoji")
const encouragment = document.querySelector(".encouragment")
const againButton = document.querySelector(".againButton")
const homeButton = document.querySelector(".homeButton")

const clickSound = document.getElementById("click")
const completed = document.getElementById("completed")
const clap = document.getElementById("clap")
const correct = document.getElementById("correct")
const wrong = document.getElementById("wrong")
const lose = document.getElementById("lose")

let totalQuestion;
let current;
let choice;
let answer;
let answerImage;
let rightBtn;
let gotRight;
let once;
let score;

var randomBtn1
var randomBtn2
var randomBtn3
var randomBtn4

let foods = [
    {number: "1",image:"./img/AngKuKueh.png"},
    {number: "2",image:"./img/ChickenRice.png"},
    {number: "3",image:"./img/ChweeKueh.png"},
    {number: "4",image:"./img/CurryPuffs.png"},
    {number: "5",image:"./img/HuatKueh.png"},
    {number: "6",image:"./img/IceKachang.png"},
    {number: "7",image:"./img/NasiLemak.png"},
    {number: "8",image:"./img/Otah.png"},
    {number: "9",image:"./img/Satay.png"},
    {number: "10",image:"./img/ChickenFeet.png"},
    {number: "11",image:"./img/HawFlakes.png"},
    {number: "12",image:"./img/IceCreamSandwich.png"},
    {number: "13",image:"./img/IcedGemBiscuits.png"},
    {number: "14",image:"./img/Laksa.png"},
    {number: "15",image:"./img/PandanCake.png"}
]

Start()
Question()

function Start(){
    current = score = 0
    gotRight = once = false
    totalQuestion = Math.floor(Math.random() * 10) + 5;
}

function Question(){
    if(current == totalQuestion){
        game.classList.add("hide")
        final.classList.remove("hide");
        let pass = totalQuestion/2
        if(score == totalQuestion){
            clap.currentTime = 0
            clap.play()
            emoji.src = "./img/excellentJob.png"
            encouragment.innerHTML = "Excellent job!"
        }
        else if(score >= pass){
            completed.currentTime = 0
            completed.play()
            emoji.src = "./img/great.png"
            encouragment.innerHTML = "Great!"
        }
        else{
            lose.currentTime = 0
            lose.play()
            emoji.src = "./img/tryAgain.png" 
            encouragment.innerHTML = "Try Again!"
        }
        return
    }

    current += 1;
    choice = false
    questionNumber.innerHTML = current + "/" + totalQuestion;

    qIndex = Math.floor(Math.random() * 3);

    let food1 = Math.floor(Math.random() * foods.length);
    let food2 = Math.floor(Math.random() * foods.length);
    let food3 = Math.floor(Math.random() * foods.length);

    randomBtn1 = Math.floor(Math.random() * foods.length);
    randomBtn2 = Math.floor(Math.random() * foods.length);
    randomBtn3 = Math.floor(Math.random() * foods.length);
    randomBtn4 = Math.floor(Math.random() * foods.length);

    for(let i = 0; i < 20; i++){
        if(food1 == food2 || food1 == food3){
            food1 = Math.floor(Math.random() * foods.length);
        }
        if(food2 == food3){
            food2 = Math.floor(Math.random() * foods.length);
        }
        if(randomBtn1 == randomBtn2 || randomBtn1 == randomBtn3 || randomBtn1 == randomBtn4){
            randomBtn1 = Math.floor(Math.random() * foods.length);
        }
        if(randomBtn2 == randomBtn3 || randomBtn2 == randomBtn4){
            randomBtn2 = Math.floor(Math.random() * foods.length);
        }
        if(randomBtn3 == randomBtn4){
            randomBtn3 = Math.floor(Math.random() * foods.length);
        }
    }

    console.log(qIndex)
    console.log(food1,food2,food3)
    if(qIndex == 0){
        squence.innerHTML =`
        <img class="example" src="${foods[food1].image}">
        <img class="example" src="${foods[food2].image}">
        <img class="example" src="${foods[food1].image}">
        <img class="example" src="./img/question.png">
        <img class="direction" src="./img/help.png">`

        answerImage = foods[food2].image
        answer = foods[food2].number
    }
    if(qIndex == 1){
        squence.innerHTML =`
        <img class="example" src="${foods[food1].image}">
        <img class="example" src="${foods[food1].image}">
        <img class="example" src="${foods[food1].image}">
        <img class="example" src="./img/question.png">
        <img class="direction" src="./img/help.png">`

        answerImage = foods[food1].image
        answer = foods[food1].number
    }
    if(qIndex == 2){
        squence.innerHTML =`
        <img class="example" src="${foods[food3].image}">
        <img class="example" src="${foods[food2].image}">
        <img class="example" src="${foods[food1].image}">
        <img class="example" src="./img/question.png">
        <img class="direction" src="./img/help.png">`

        answerImage = foods[food3].image
        answer = foods[food3].number
    }

    console.log("answer" + answer)

    for (let i = 1; i < 5; i ++){
        let currentClass = "btn" + (i)

        let randomfood = "randomBtn" + i
        console.log(randomfood)
        randomfood = window[randomfood]

        console.log(randomfood)
        let currentBtn = document.getElementById(currentClass)
        
        currentBtn.innerHTML=`
        <img src="${foods[randomfood].image}">`

        if(foods[randomfood].number == answer){
            rightBtn = currentBtn
            gotRight = true
        }

        currentBtn.setAttribute("data",foods[randomfood].number)

        if(once == false){
            currentBtn.addEventListener("click", () => {
                if(choice == false){
                    let number = currentBtn.getAttribute("data")

                let sign = document.createElement("img");
                sign.classList.add("sign")

                if(number == answer){
                    correct.currentTime = 0
                    correct.play()
                    score += 1
                    currentBtn.style.backgroundColor = "green"
                    sign.src = "./img/right.png"
                }
                if(number != answer){
                    wrong.currentTime = 0
                    wrong.play()
                    let rightSign = document.createElement("img");
                    rightSign.classList.add("sign")

                    currentBtn.style.backgroundColor = "red"
                    sign.src = "./img/wrong.png"
                    
                    rightBtn.style.backgroundColor = "green"
                    rightSign.src = "./img/right.png"
                    rightBtn.appendChild(rightSign);
                }
                currentBtn.appendChild(sign);
                choice = true
                
                let delay = setTimeout(() => {
                    currentBtn.style.backgroundColor = "white"
                    rightBtn.style.backgroundColor = "white"
                    Question()
                }, 1500);
                }
            })
        }
    }

    once = true
    console.log(gotRight)
    if(gotRight == false){
        console.log("r")
        let index = Math.floor(Math.random() * 4) + 1;
        let randomRight = "btn" + index
        rightBtn = document.getElementById(randomRight)
    
        rightBtn.setAttribute("data", answer)

        rightBtn.innerHTML = `
        <img src="${answerImage}">`
    }
    else{
        gotRight = false
    }
}

startButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        start.classList.add("hide")
        game.classList.remove("hide")
    }, 200);
})

againButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        final.classList.add("hide")
        start.classList.remove("hide")
    }, 200);
})


homeButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        location.assign('https://gimme.sg/activations/dementia/');
    }, 200);
})

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });