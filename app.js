let boxes = document.querySelectorAll(".box");
// console.log(boxes);
let resetGameBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true; //player O

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerHTML = "X"
            turnO = true;
        }
        count++;
        box.disabled = true;
        if(count===9){
            drawWinner();
        }
        checkWinner();
    })
})

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add('hide');
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const drawWinner = () => {
    msg.innerHTML = `Oops Game is Draw`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const disabledBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0]);
        // console.log(boxes[pattern[0]].innerText);
        // console.log(boxes[pattern[1]].innerText);
        // console.log(boxes[pattern[2]].innerText);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                // console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
            
           
        }
        
    }
}

newGameBtn.addEventListener('click', resetGame)
resetGameBtn.addEventListener('click', resetGame)