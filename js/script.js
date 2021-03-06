{

    const playGame = function (playerInput){

        clearMessages()

        // Help functions
        const getMoveName = function (argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            } else if(argMoveId == '2'){
                return 'papier';
            } else if(argMoveId == '3'){
                return 'nożyce';
            }
            // nie potrzebne, bo ruchy gracz są uzależnione od przycisków, a nie od wpisywania
            /*printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';*/
        }

        const displayResult = function (argComputerMove, argPlayerMove){

            console.log('moves:', argComputerMove, argPlayerMove);

            if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                printMessage('Ja wygrywam!');
            } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Ty wygrywasz!');
            } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                printMessage('Ja wygrywam!');
            } else if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                printMessage('Ty wygrywasz!');
            } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                printMessage('Ja wygrywam!');
            } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('Ty wygrywasz!');
            } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
                printMessage('Remis.');
            } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
                printMessage('Remis.');
            } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
                printMessage('Remis.');
            } else if(argPlayerMove == 'nieznany ruch'){
                printMessage('Nie da się rozstrzygnąć gry. Musisz wybrać odpowiedni ruch!')
            }

        }

        {
        // Computer move
        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);

        printMessage('Mój ruch to: ' + computerMove);

        // Player move
        /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

        console.log('Gracz wpisał: ' + playerInput);*/

        const playerMove = getMoveName(playerInput);

        printMessage('Twój ruch to: ' + playerMove);

        // Game result

        displayResult(computerMove,playerMove);
        }
    }

    // Game

    document.getElementById('play-rock').addEventListener('click',function(){playGame(1);});
    document.getElementById('play-paper').addEventListener('click',function(){playGame(2);});
    document.getElementById('play-scissors').addEventListener('click',function(){playGame(3);});
}
