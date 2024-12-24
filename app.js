const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset-btn');


const newGameBtn = document.querySelector("#newGame-btn"); 
const msgContainer = document.querySelector(".msg-container")
const msg = document.querySelector("#msg");

let user0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(user0 === true){
            box.innerText = "0";
            user0 = false;
        }else{
            box.innerText = "X";
            user0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1==posVal2 && posVal2==posVal3){
                console.log("winner",posVal1);
                showWinner(posVal1);
            }
        }
     }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = ()=>{
    boxes.forEach((box)=>{
        box.disabled = true;
    })
}

const enableBoxes = ()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText="";
    })
}
const resetGame = ()=>{
    user0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener('click',resetGame);
newGameBtn.addEventListener('click',resetGame);
