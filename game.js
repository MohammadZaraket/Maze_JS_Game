window.onload = function(){

    // THE GAME STARTS WHEN CLICKING ON S THEN GOING INSIDE THE MAZE >>> ENDS BY CLICKING ON E
    // YOU GET +5 FOR WINNING AND -10 FOR LOOSING

    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var boundaries= document.getElementsByClassName("boundary");
    var status = document.getElementById("status");
    var score_div = document.getElementsByClassName("example");
    var game_space = document.getElementById("game");
    var in_game_space = false;
    var score = 0;
 
    start.onclick=startGame;
    

    function startGame(){

        resetGame();

        in_game_space = true;
        game_space.onmouseleave=gotOut;

        for(var i =0; i< 5; i++)

        {
            boundaries[i].onmouseover = Lose;
        }

        end.style.pointerEvents = "auto";
        end.onclick=checkWin;


    };



    function resetGame(){

        for(var i =0; i< 5; i++)

        {
            boundaries[i].style.backgroundColor="#eeeeee";
            boundaries[i].style.pointerEvents = "auto";
            
        }


        status.innerHTML = 'Begin by moving your mouse over the "S".';
    };


    function Win(){

       status.innerHTML = "YOU WON BABY!";
       end.style.pointerEvents = "none";
       turnGreen()
       score +=5;

       for(var i =0; i<5; i++){

        boundaries[i].style.pointerEvents = "none";

       }

       score_div[0].innerHTML = score;

    };

    function Lose(){

        status.innerHTML = "YOU LOST ***** !";
        turnRed();

        score-=10;
        score_div[0].innerHTML = score;
 
     };


     function gotOut(){

        in_game_space= false;
     }


     function checkWin(){ // To check if the player clicked the END button without going inside the Maze.

        if (in_game_space==true)
        {
            Win();
        }
        else
        {
            status.innerHTML = "I know what You DID:)";
        }
     }


     function turnRed(){

        for(var i =0; i< 5; i++)

        {
            boundaries[i].style.backgroundColor="red";
            boundaries[i].style.pointerEvents = "none";
        }

    };

    function turnGreen(){

        for(var i =0; i< 5; i++)

        {
            boundaries[i].style.backgroundColor="green";
        }

    };

};