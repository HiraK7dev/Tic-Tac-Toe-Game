let btn0 = document.createElement("button");
btn0.className = `btn`;
let btn1 = document.createElement("button");
btn1.className = `btn`;
let btn2 = document.createElement("button");
btn2.className = `btn`;
let btn3 = document.createElement("button");
btn3.className = `btn`;
let btn4 = document.createElement("button");
btn4.className = `btn`;
let btn5 = document.createElement("button");
btn5.className = `btn`;
let btn6 = document.createElement("button");
btn6.className = `btn`;
let btn7 = document.createElement("button");
btn7.className = `btn`;
let btn8 = document.createElement("button");
btn8.className = `btn`;

let hd = document.querySelectorAll(".horizentalDiv");   //hd = horizentalDiv
let playerTurn = document.querySelector("#playerTurn");
let reload = document.querySelector("#reload"); //reload button
let scoreX = document.querySelector("#scoreX");
let scoreO = document.querySelector("#scoreO");
let resetScore = document.querySelector("#resetScore");

let playerX = 0;    //X
let playerO = 0;    //O

playerTurn.innerText = `O TURN`;

let X = localStorage.getItem(`X`);
scoreX.innerText = `X: ${X}`;
if(X === null){
    scoreX.innerText = `X: 0`;
}
let O = localStorage.getItem(`O`);
scoreO.innerText = `O: ${O}`;
if(O === null){
    scoreO.innerText = `O: 0`;
}

//row 1
hd[0].append(btn0);
hd[0].append(btn1);
hd[0].append(btn2);
//row2
hd[1].append(btn3);
hd[1].append(btn4);
hd[1].append(btn5);
//row3
hd[2].append(btn6);
hd[2].append(btn7);
hd[2].append(btn8);

let flag = 0;

const logic = (obj) => {
    if(obj.innerText === `` && flag === 0){
        obj.classList.add("O");
        obj.innerText = `O`;
        flag = 1;

        //turn controlling
        playerTurn.innerText = `X TURN`;
        playerTurn.setAttribute("id", "playerTurn1");
    }
    else if(obj.innerText === `` && flag === 1){
        obj.classList.add("X");
        obj.innerText = `X`;
        flag = 0;

        //turn controlling
        playerTurn.innerText = `O TURN`;
        playerTurn.setAttribute("id", "playerTurn");
    }
    setTimeout(checkWinner, 500);
}

//Checking Winner
const checkWinner = () => {
    if(btn0.innerText === `X` && btn1.innerText === `X` && btn2.innerText === `X` || btn3.innerText === `X` && btn4.innerText === `X` && btn5.innerText === `X` || btn6.innerText === `X` && btn7.innerText === `X` && btn8.innerText === `X` || btn0.innerText === `X` && btn3.innerText === `X` && btn6.innerText === `X` || btn1.innerText === `X` && btn4.innerText === `X` && btn7.innerText === `X` || btn2.innerText === `X` && btn5.innerText === `X` && btn8.innerText === `X` || btn2.innerText === `X` && btn4.innerText === `X` && btn6.innerText === `X` || btn0.innerText === `X` && btn4.innerText === `X` && btn8.innerText === `X` ){
        playerX = X;
        playerX++;
        localStorage.setItem(`X`, `${playerX}`);
        
        alert("PLAYER X WON!");
        location.reload();
    }
    else if(btn0.innerText === `O` && btn1.innerText === `O` && btn2.innerText === `O` || btn3.innerText === `O` && btn4.innerText === `O` && btn5.innerText === `O` || btn6.innerText === `O` && btn7.innerText === `O` && btn8.innerText === `O` || btn0.innerText === `O` && btn3.innerText === `O` && btn6.innerText === `O` || btn1.innerText === `O` && btn4.innerText === `O` && btn7.innerText === `O` || btn2.innerText === `O` && btn5.innerText === `O` && btn8.innerText === `O` || btn2.innerText === `O` && btn4.innerText === `O` && btn6.innerText === `O` || btn0.innerText === `O` && btn4.innerText === `O` && btn8.innerText === `O` ){
        playerO = O;
        playerO++;
        localStorage.setItem(`O`, `${playerO}`);
        
        alert("PLAYER O WON!");
        location.reload();
    }
}

btn0.addEventListener("click", () => { logic(btn0) });
btn1.addEventListener("click", () => { logic(btn1) });
btn2.addEventListener("click", () => { logic(btn2) });
btn3.addEventListener("click", () => { logic(btn3) });
btn4.addEventListener("click", () => { logic(btn4) });
btn5.addEventListener("click", () => { logic(btn5) });
btn6.addEventListener("click", () => { logic(btn6) });
btn7.addEventListener("click", () => { logic(btn7) });
btn8.addEventListener("click", () => { logic(btn8) });

reload.addEventListener("click", () => { location.reload() });
resetScore.addEventListener("click", () => { localStorage.clear(); location.reload() });

