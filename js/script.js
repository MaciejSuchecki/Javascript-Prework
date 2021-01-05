function playGame(){    
    clearMessages();
    function playerInput(playerInput){
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

    function getMoveName(moveId){
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
    let randomNumber = Math.floor(Math.random() * 3 + 1); //zapis 3 zmiennych i działań w jednym wierszu
    console.log('wylosowana liczba to:' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

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

    let argPlayerMove = getMoveName(playerInput);

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

    function displayResault(argComputerMove, argPlayerMove){
        printMessage('Komputer ' + computerMove + ', a ty ' + playerMove + '. Wygrał: ');
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Wygrałeś!');
        }   else if (argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
            printMessage('Komputer wygrał!');
        }   else (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis!');
        }
    }
}
document.getElementById('rock').addEventListener('click', playGame(1){

});
document.getElementById('paper').addEventListener('click', playGame(2));
document.getElementById('scissors').addEventListener('click', playGame(3));