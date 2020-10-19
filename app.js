
const winningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    
    [1,4,7],
    [2,5,6],
    [3,6,9],
    
    [1,5,9],
    [3,5,7],

]
const winningMessageElement=document.querySelector(' [data-winning-message-text')
const restartButton = document.getElementById('startOverButton')

restartButton.addEventListener('click', startGame);




function startGame(){
    document.turn = "X";
    
    setMessage(document.turn + " 's turn");
 //   document.winner = null;
    
}



 function setMessage(turn) {
    document.getElementById("message").innerText= turn;
 }



function nextMove(cell){
    if (document.winner !=null){
        console.log("you won!");

    }
    else if(cell.innerText == ''){
          cell.innerText = document.turn;
    switchTurn();
    {
        
    }

    }else {
        console.log("pick an empty square");
    }
  }

  function displayWinningMessage() {
      document.getElementById("winningMessage").style.display = "flex";
  }


  function gameTie(){
      return [...cellElements].every(cell => {
          return cell.classList.contains("X") || cell.classList.contains("O")
      console.log("tie!")
        })
      
      document.getElementById("winningMessage").style.display = "flex";
  }




function switchTurn() {
    if (winningCombo(document.turn)){
        console.log('you win!')
      document.getElementById("winningMessage").style.display = "flex";
        
    
    }
      else if(document.turn == "X") {
        document.turn = "O";
    
    }else {
        document.turn = "X";
    setMessage("It's " +document.turn + " 's turn' ")
    
    }

}




//winning combo
function winningCombo(move) {
    let result = false;
    if(checkRow(1,2,3, move) ||
    checkRow(4, 5, 6, move) || 
    checkRow(7, 8, 9, move) || 
    checkRow(1, 4, 7, move) || 
    checkRow(2, 5, 8, move) || 
    checkRow(3, 6, 9, move) || 
    checkRow(1, 5, 9, move) || 
    checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
     let result = false;
     if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
         result = true;
     }
     return result
}

  function getBox(number) {
    return document.getElementById("c" + number).innerText
 }
 

console.log('matt is da best teacher ever <3')
