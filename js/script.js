let randomNumber = Math.floor(Math.random() * 3 + 1); //zapis 3 zmiennych i działań w jednym wierszu
console.log('wylosowana liczba to:' + randomNumber);
if(randomNumber == 1){
    computerMove = 'kamień';
}   else if (randomNumber == 2) {
    computerMove = 'papier';
}   else (randomNumber == 3){
    computerMove = 'nozyce';
}

let playerInput = prompt('Wybierz swój ruch: 1: Kamień, 2: Papier, 3: Nozyce.');
console.log('Gracz wpisał: ' + playerInput);
if (playerInput == '1'){
    playerMove = 'kamień';
}   else if (playerInput == '2'){
    playerMove = 'papier';
}   else (playerInput == '3'){
    playerMove = 'nozyce';
}

if (computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Wygrałeś!');
}   else if (computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('Komputer wygrał!');
}   else (playerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
}
if (playerInput != randomNumber){
    printMessage('Błędny wybór! Wybierz swój ruch: 1: Kamień, 2: Papier, 3: Nozyce.');
}
