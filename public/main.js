let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]
let perms = 0
function checkBoard(){
    console.log('\n')
    // Setting DOM to all boxes or input field
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
  
    // Checking if Player X won or not and after 
    // that disabled all the other fields
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById('print').innerHTML = "Player Won"
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById('print').innerHTML = "Player Won"
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById('print').innerHTML = "Player Won"
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById('print').innerHTML = "Player Won"
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById('print').innerHTML = "Player Won"
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById('print').innerHTML = "Player Won"
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById('print').innerHTML = "Player Won"
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById('print').innerHTML = "Player Won"
    }
  
    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((b1 == 'O' || b1 == 'O') && (b2 == 'O' || 
        b2 == 'O') && (b3 == 'O' || b3 == 'O')) {
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById('print').innerHTML = "AI Won"
        document.getElementById('roboText').innerHTML = 'Good Game!'
    }
    else if ((b1 == 'O' || b1 == 'O') && (b4 == 'O' || 
        b4 == 'O') && (b7 == 'O' || b7 == 'O')) {
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById('print').innerHTML = "AI Won"
        document.getElementById('roboText').innerHTML = 'Good Game!'
    }
    else if ((b7 == 'O' || b7 == 'O') && (b8 == 'O' || 
        b8 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById('print').innerHTML = "AI Won"
        document.getElementById('roboText').innerHTML = 'Good Game!'
    }
    else if ((b3 == 'O' || b3 == 'O') && (b6 == 'O' || 
        b6 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById('print').innerHTML = "AI Won"
        document.getElementById('roboText').innerHTML = 'Good Game!'
    }
    else if ((b1 == 'O' || b1 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b9 == 'O' || b9 == 'O')) {
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById('print').innerHTML = "AI Won"
        document.getElementById('roboText').innerHTML = 'Good Game!'
    }
    else if ((b3 == 'O' || b3 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b7 == 'O' || b7 == 'O')) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById('print').innerHTML = "AI Won"
        document.getElementById('roboText').innerHTML = 'Good Game!'
    }
    else if ((b2 == 'O' || b2 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b8 == 'O' || b8 == 'O')) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById('print').innerHTML = "AI Won"
        document.getElementById('roboText').innerHTML = 'Good Game!'
    }
    else if ((b4 == 'O' || b4 == 'O') && (b5 == 'O' || 
        b5 == 'O') && (b6 == 'O' || b6 == 'O')) {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById('print').innerHTML = "AI Won"
        document.getElementById('roboText').innerHTML = 'Good Game!'
    }
  
    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' 
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
        b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
        b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById('print').innerHTML = "Tie"
        document.getElementById('roboText').innerHTML = 'You are a worthy opponent!'
    }
}

function start() {
    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    //minimax call
    //make sure im passing array by value
    let moves = getMoves(board)
    let best = {}
    let bestVal = -1
    perms = 0
    //console.log(moves)
    if(moves){
        for (let move of moves){//do a minimax call for each possible strating move
            let newBoard = copyBoard(board)
            newBoard[move.y][move.x] = 'O'
            let currVal = minimax(newBoard, false)
            if(currVal > bestVal){ //take the best move
                best = move
                bestVal = currVal
            }
        }
        if(bestVal == 1){
            document.getElementById('roboText').innerHTML = `I have analyzed ${perms} positions and you have lost!`
        }
        else if(bestVal == 0){
            document.getElementById('roboText').innerHTML = `I have analyzed ${perms} positions and we are evenely matched`
        }
        
        console.log(bestVal)
        //console.log(best)
        board[best.y][best.x] = 'O'
        if(best.y == 0 && best.x == 0){
            document.getElementById("b1").value = 'O';
            document.getElementById("b1").disabled = true;
        }
        else if(best.y == 0 && best.x == 1){
            document.getElementById("b2").value = 'O';
            document.getElementById("b2").disabled = true;
        }
        else if(best.y == 0 && best.x == 2){
            document.getElementById("b3").value = 'O';
            document.getElementById("b3").disabled = true;
        }
        else if(best.y == 1 && best.x == 0){
            document.getElementById("b4").value = 'O';
            document.getElementById("b4").disabled = true;
        }
        else if(best.y == 1 && best.x == 1){
            document.getElementById("b5").value = 'O';
            document.getElementById("b5").disabled = true;
        }
        else if(best.y == 1 && best.x == 2){
            document.getElementById("b6").value = 'O';
            document.getElementById("b6").disabled = true;
        }
        else if(best.y == 2 && best.x == 0){
            document.getElementById("b7").value = 'O';
            document.getElementById("b7").disabled = true;
        }
        else if(best.y == 2 && best.x == 1){
            document.getElementById("b8").value = 'O';
            document.getElementById("b8").disabled = true;
        }
        else if(best.y == 2 && best.x == 2){
            document.getElementById("b9").value = 'O';
            document.getElementById("b9").disabled = true;
        }
        else{
            console.log('error printing move')
        } 
        checkBoard()
    }
}

//AI positive eval
//Player negative eval
//consider: win, draw (1 = AI win, 0 = draw, -1 = player win)
//assume: I am able to calculate moves to max depth

function minimax(currentBoard, maximizing){ 
  //get valid moves, if no valid moves then reached depth
  let curr = 0
  
  //console.log(currentBoard)
  if(winningMove(currentBoard, 'O') && !maximizing){
    return 1
  }
  if(winningMove(currentBoard, 'X') && maximizing){
    return -1
  }
  perms++
  if(maximizing){ //Looking at moves for AI
    let moves = getMoves(currentBoard)
    if(moves.length == 0){
        return 0
    }
    if(winningMove(currentBoard, 'O')){ //Check if current board is winning for AI, if so then no need to evaluate beyond this
        return 1
    }
    curr = -1
    for(let move of moves){
        let newBoard = copyBoard(currentBoard)
        newBoard[move.y][move.x] = 'O'    
        curr = Math.max(minimax(newBoard, false), curr)
    }
    
  }
  else{//Looking at moves for player
    let moves = getMoves(currentBoard)
    if(moves.length == 0){
        return 0
    }
    if(winningMove(currentBoard, 'X')){ //Check if current board is winning for player, if so then no need to evaluate beyond this
        return -1
    }
    curr = 1
    for(let move of moves){
        let newBoard = copyBoard(currentBoard)
        newBoard[move.y][move.x] = 'X'    
        curr = Math.min(minimax(newBoard, true), curr)
    }
    
  }
  return curr
}

//return an array of valid moves
function getMoves(currentBoard){
    let moves = []
    for(let i = 0; i < board[0].length; i++){
        for(let j = 0; j < board.length; j++){
            if(!currentBoard[i][j]){
                moves.push({y: i, x: j})
            }
        }
    }
    return moves
}

function winningMove(newBoard, player){
    let currentBoard = copyBoard(newBoard)
    //console.log(currentBoard)
    for(let i = 0; i <= 2; i++){ //check horizontal lines
        for(let j = 0; j <= 2; j++){
            if(currentBoard[i][j] != player){ 
                break;
            }
            if(j == 2){
                return true
            }
        }
    }
    for(let i = 0; i <= 2; i++){ //check vertical lines
        for(let j = 0; j <= 2; j++){
            if(currentBoard[j][i] != player){ 
                break;
            }
            if(j == 2){
                return true
            }
        }
    }
    for(let i = 0; i <= 2; i++){//top left to bottom right line
        if(currentBoard[i][i] != player){
            break;
        }
        if(i == 2){
            return true
        }
    }
    if(currentBoard[0][2] == player && currentBoard[1][1] == player && currentBoard[2][0] == player){ //top right to bottom left
        return true
    }
    return false
}



  

function copyBoard(arr){ //copy board by value
    let temp = [[]]
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[0].length; j++){
        if(!temp[i]){
          temp[i] = []
        }
        temp[i][j] = arr[i][j]
      }
    }
    return temp
}

// Function to reset game
function reset() {
    //location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';

    document.getElementById('b1').disabled = false;
    document.getElementById('b2').disabled = false;
    document.getElementById('b3').disabled = false;
    document.getElementById('b4').disabled = false;
    document.getElementById('b5').disabled = false;
    document.getElementById('b6').disabled = false;
    document.getElementById('b7').disabled = false;
    document.getElementById('b8').disabled = false;
    document.getElementById('b9').disabled = false;

    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
    document.getElementById('print').innerHTML = ''
    if(document.getElementById('AI_First').checked){
        //console.log('AI moving first')
        start()
    }
    document.getElementById('roboText').innerHTML = 'Lets see if you can beat me!'
}
  
function myfunc_3() {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").disabled = true;
    board[0][0] = 'X'
    checkBoard()
    start()
}
  
function myfunc_4() {
    document.getElementById("b2").value = "X";
    document.getElementById("b2").disabled = true;
    board[0][1] = 'X'
    checkBoard()
    start()
}
  
function myfunc_5() {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").disabled = true;
    board[0][2] = 'X'
    checkBoard()
    start()
}
  
function myfunc_6() {
    document.getElementById("b4").value = "X";
    document.getElementById("b4").disabled = true;
    board[1][0] = 'X'
    checkBoard()
    start()
}
  
function myfunc_7() {
    document.getElementById("b5").value = "X";
    document.getElementById("b5").disabled = true;
    board[1][1] = 'X'
    checkBoard()
    start()
}
  
function myfunc_8() {
    document.getElementById("b6").value = "X";
    document.getElementById("b6").disabled = true;
    board[1][2] = 'X'
    checkBoard()
    start()
}
  
function myfunc_9() {
    document.getElementById("b7").value = "X";
    document.getElementById("b7").disabled = true;
    board[2][0] = 'X'
    checkBoard()
    start()
}
  
function myfunc_10() {
    document.getElementById("b8").value = "X";
    document.getElementById("b8").disabled = true;
    board[2][1] = 'X'
    checkBoard()
    start()
}
  
function myfunc_11() {
    document.getElementById("b9").value = "X";
    document.getElementById("b9").disabled = true;
    board[2][2] = 'X'
    checkBoard()
    start()
}