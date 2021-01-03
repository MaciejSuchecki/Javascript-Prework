function printMessage(msg){
    let div = document.createElement('div');
    let computerMove = 'kamień';
    let playerMove = 'papier';
	div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
    printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to 'playerMove' , to wygrywasz');
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}