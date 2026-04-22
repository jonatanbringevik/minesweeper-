//  (lätt) array för att välja ut vilka som är minor //
let U = [];
for (let i = 1; i <= 81; i++){
    U.push(i)
}

// för att välja minorna//
let mine = [];
for (let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * U.length);
    mine.push(U.splice(index, 1)[0]);
}
//knappar//
let board = document.getElementById("board");

for (let i = 1; i <= 81; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;

    btn.onclick = () => {
        const buttonclicked = btn.textContent;
        if (mine.includes(i)) {
            btn.textContent = "💣";
        } else {
            btn.textContent = countmines(buttonclicked);
        }
    };
    btn.oncontextmenu =() => {
      btn.textContent = "🚩"
    }

    board.appendChild(btn);
}


function countmines(buttonclicked){
    





    //return 
}
