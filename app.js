const buttons = document.querySelectorAll("#buttons");
const winnerText = document.getElementById("winner-text");

const winnerTextContainer = document.getElementById("winner-text-container")
const content = document.getElementById("content-div");

const resetButton = document.getElementById("reset-button")

const firstColumn = [buttons[0], buttons[3], buttons[6]];
const secondColumn = [buttons[1], buttons[4], buttons[7]];
const thirdColumn = [buttons[2], buttons[5], buttons[8]];

const firstRow = [buttons[0], buttons[1], buttons[2]];
const secondRow = [buttons[3], buttons[4], buttons[5]];
const thirdRow = [buttons[6], buttons[7], buttons[8]];

const firstCross = [buttons[0], buttons[4], buttons[8]];
const secondCross = [buttons[2], buttons[4], buttons[6]];

const nextContainer = function(){
    content.style.display = "none";
    winnerTextContainer.style.display = "flex";
}

let i = 0;



let changePlayer = true;

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        e.preventDefault()
        if (changePlayer){
            button.innerHTML = "X";
            changePlayer = false;
            i++
            console.log(i)
            console.log(winnerText.innerHTML)
        }
        else{
            button.innerHTML = "O";
            changePlayer = true;
            i++
            console.log(i)
            console.log(winnerText.innerHTML)
        }
    })
})

content.addEventListener("click", function(e){
    e.preventDefault()
    if(
        firstColumn[0].innerHTML === "X" && firstColumn[1].innerHTML === "X" && firstColumn[2].innerHTML === "X" ||
        secondColumn[0].innerHTML === "X" && secondColumn[1].innerHTML === "X" && secondColumn[2].innerHTML === "X" ||
        thirdColumn[0].innerHTML === "X" && thirdColumn[1].innerHTML === "X" && thirdColumn[2].innerHTML === "X" ||
        firstRow[0].innerHTML === "X" && firstRow[1].innerHTML === "X" && firstRow[2].innerHTML === "X" ||
        secondRow[0].innerHTML === "X" && secondRow[1].innerHTML === "X" && secondRow[2].innerHTML === "X" ||
        thirdRow[0].innerHTML === "X" && thirdRow[1].innerHTML === "X" && thirdRow[2].innerHTML === "X" ||
        firstCross[0].innerHTML === "X" && firstCross[1].innerHTML === "X" && firstCross[2].innerHTML === "X" ||
        secondCross[0].innerHTML === "X" && secondCross[1].innerHTML === "X" && secondCross[2].innerHTML === "X"){
        winnerText.innerHTML = "PLAYER X WINS";
        nextContainer()
    }
    else if (
        firstColumn[0].innerHTML === "O" && firstColumn[1].innerHTML === "O" && firstColumn[2].innerHTML === "O" ||
        secondColumn[0].innerHTML === "O" && secondColumn[1].innerHTML === "O" && secondColumn[2].innerHTML === "O" ||
        thirdColumn[0].innerHTML === "O" && thirdColumn[1].innerHTML === "O" && thirdColumn[2].innerHTML === "O" ||
        firstRow[0].innerHTML === "O" && firstRow[1].innerHTML === "O" && firstRow[2].innerHTML === "O" ||
        secondRow[0].innerHTML === "O" && secondRow[1].innerHTML === "O" && secondRow[2].innerHTML === "O" ||
        thirdRow[0].innerHTML === "O" && thirdRow[1].innerHTML === "O" && thirdRow[2].innerHTML === "O" ||
        firstCross[0].innerHTML === "O" && firstCross[1].innerHTML === "O" && firstCross[2].innerHTML === "O" ||
        secondCross[0].innerHTML === "O" && secondCross[1].innerHTML === "O" && secondCross[2].innerHTML === "O"
    ){
        winnerText.innerHTML = "PLAYER O WINS";
        nextContainer()
    }
    else if(i === 9 && winnerText.innerHTML === ""){
        winnerText.innerHTML = "DRAW";
        nextContainer()
    }
})

resetButton.addEventListener("click", function(e){
    e.preventDefault()
    i = 0;
    winnerText.innerHTML = "";
    buttons.forEach(function(button){
        button.innerHTML = "";
    })
    content.style.display = "flex";
    winnerTextContainer.style.display = "none";
})
