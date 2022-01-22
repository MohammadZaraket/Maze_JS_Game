window.onload = function(){



    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var x= document.getElementsByClassName("boundary");
    var h2 = document.getElementById("status");

 
    start.onclick=startGame;
    


    function startGame(){

        resetGame();
    
        for(var i =0; i<x.length; i++)

        {
            x[i].onmouseover = Lose;

        }

        end.onclick=Win;

    };




    function turnRed(){

        for(var i =0; i<x.length; i++)

        {
            x[i].style.backgroundColor="red";
        }

    };



    function resetGame(){

        for(var i =0; i<x.length; i++)

        {
            x[i].style.backgroundColor="#eeeeee";
        }

        h2.innerHTML = 'Begin by moving your mouse over the "S".';



    };


    function Win(){

       h2.innerHTML = "YOU WON BABY!";

    };

    function Lose(){

        h2.innerHTML = "YOU LOST ***** !";
        turnRed();
 
     };





};