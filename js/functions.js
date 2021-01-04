function printMessage(msg){
    let div = document.createElement('div');
    let playerMove = 'papier';
    let randomFraction = Math.random(); // losowanie z zakresu 0 - 0.999
    let calculation = randomFraction * 3 + 1; // wprowadzenie losowania 1 - 4
    let roundNumber = Math.floor(calculation); // zaokrąglenie wyniku losowania w dół, wynik: 1-3 
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ' , to wygrywasz');
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}