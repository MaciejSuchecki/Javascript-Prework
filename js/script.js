let randomNumber = Math.floor(Math.random() * 3 + 1); //zapis 3 zmiennych i działań w jednym wierszu
console.log('wylosowana liczba to:' + randomNumber);
if(randomNumber == 1){
    computerMove = 'kamień';
}   else if (randomNumber == 2) {
    computerMove = 'papier';
}   else (randomNumber == 3){
    computerMove = 'nozyce';
}