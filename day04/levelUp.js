let player1 = Number(prompt("플레이어1 차례"))


const 승리조건 = 
[[0, 1, 2], [3, 4, 5], [6, 7, 8],    // 가로 승리조건
[0, 3, 6], [1, 4, 7], [2, 5, 8],     // 세로 승리조건
[0, 4, 8], [2, 4, 6]]                //대각선 승리 조건

let board = ["","","","","","","","",""]
if(player1 == 0 || player1 == 1 || player1 == 2 || player1 == 3 || player1 == 4 || player1 == 5 || player1 == 6 || player1 == 7|| player1 == 8 || player1 == 9)
    {console.log(`${board[player1][player1]='O'}`);
    console.log(board)

}

            