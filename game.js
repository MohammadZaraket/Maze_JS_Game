window.onload = function(){



    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var x= document.getElementsByClassName("boundary");

 
    start.onclick=startGame;
    end.onclick= turnRed;


    function startGame(){
        
        resetColor();
    

        for(var i =0; i<x.length; i++)

        {
            x[i].onmouseover = turnRed;

        }



    };




    function turnRed(){

        for(var i =0; i<x.length; i++)

        {
            x[i].style.backgroundColor="red";
        }

    };



    function resetColor(){

        for(var i =0; i<x.length; i++)

        {
            x[i].style.backgroundColor="#eeeeee";
        }

    };







};