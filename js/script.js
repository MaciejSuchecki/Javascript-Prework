function playGame(){    
    clearMessages();
    const playerInput = function(playerInput){
        if(playerInput == document.getElementById('rock')){
            return '1';
        }
        else if (playerInput == document.getElementById('paper')){
            return '2';
        }
        else (playerInput == document.getElementById('scissors')){
            return '3';
        }
    }

    const getMoveName = function(moveId){
        if(moveId == 1){
            return 'kamień';
        }
        else if (moveId == 2){
            return 'papier';
        }
        else (moveId == 3{
            return 'nozyce';
        }
    }
    const randomNumber = Math.floor(Math.random() * 3 + 1); //zapis 3 zmiennych i działań w jednym wierszu
    console.log('wylosowana liczba to:' + randomNumber);

    const ComputerMove = getMoveName(randomNumber);

    /*
    if(randomNumber == 1){
        computerMove = 'kamień';
    }   else if (randomNumber == 2) {
        computerMove = 'papier';
    }   else (randomNumber == 3){
        computerMove = 'nozyce';
    }
    */

    /*
    let playerInput = prompt('Wybierz swój ruch: 1: Kamień, 2: Papier, 3: Nozyce.');
    console.log('Gracz wpisał: ' + playerInput);
    */

    const PlayerMove = getMoveName(playerInput);

    /*
    if (playerInput == '1'){
        playerMove = 'kamień';
    }   else if (playerInput == '2'){
        playerMove = 'papier';
    }   else (playerInput == '3'){
        playerMove = 'nozyce';
    }
    */

    /*
    if (playerInput != randomNumber){
        printMessage('Błędny wybór! Wybierz swój ruch: 1: Kamień, 2: Papier, 3: Nozyce.');
    }
    */

    function displayResault(ComputerMove, PlayerMove){
        printMessage('Komputer ' + computerMove + ', a ty ' + playerMove + '. Wygrał: ');
        if (ComputerMove == 'kamień' && PlayerMove == 'papier'){
            printMessage('Wygrałeś!');
        }   else if (ComputerMove == 'kamień' && PlayerMove == 'nozyce'){
            printMessage('Komputer wygrał!');
        }   else (ComputerMove == 'kamień' && PlayerMove == 'kamień'){
            printMessage('Remis!');
        }
    }
}
const rockBtn = document.getElementById('rock');
    rockBtn.addEventListener('click', playGame(1){
});

const paperBtn = document.getElementById('paper')
    paperBtn.addEventListener('click', playGame(2){
});

const scissorsBtn = document.getElementById('scissors')
    scissorsBtn.addEventListener('click', playGame(3){
});