//  (lätt) array för att välja ut vilka som är minor //
function R() {
    return {
        "mine": false,
        "revealed": false,
        "flagged": false,
        "number": 0,
    }
}

//grid

const U = [];
for (let i = 1; i <= 81; i++) {
  U.push(R());
}

const grid = []; 

for (let i = 0; i < 9; i++) {
  grid.push(U.slice(i * 9, i * 9 + 9));
}

// för att välja minorna//

let mines = 10
while (mines > 0) {
    let Xindex = Math.floor(Math.random() *9);
    let Yindex = Math.floor(Math.random() *9);
    if (!grid[Yindex][Xindex].mine) {
        grid[Yindex][Xindex].mine = true;
        mines -= 1
    }
}

//räkna minor

function countmines(x, y) {
    let count = 0;

    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {

            let nx = x + dx;
            let ny = y + dy;

            if (dx === 0 && dy === 0) continue;
            if (nx >= 0 && nx < 9 && ny >= 0 && ny < 9) {
                if (grid[ny][nx].mine) {
                    count++;
                }
            }
        }
    }

    return count;
}

let board = document.getElementById("board");

//gameover
function gameover(){
      alert("Gameover vill du spela igen?");
      location.reload();
}

//knappar

for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
        
        let btn = document.createElement("button");
    
    btn.onclick = () => {
        if(grid[y][x].mine) { 
             btn.textContent = gameover();

        }

        else{
            btn.textContent = countmines(x,y);
            
        }       
    }
    btn.oncontextmenu =() => {
      btn.textContent = "🚩"
    }

    board.appendChild(btn);
    }    
}

