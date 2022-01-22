window.onload = function(){



    var start = document.getElementById("start");
    var end = document.getElementById("end");

 
    start.onclick=startGame;
    end.onclick= turnRed;


    function startGame(){
        
        resetColor();



    };




    function turnRed(){

        
        var x= document.getElementsByClassName("boundary");
        var i =0;

        for(i; i<x.length; i++)

        {
            x[i].style.backgroundColor="red";
        }


    };



    function resetColor(){

        
        var x= document.getElementsByClassName("boundary");
        var i =0;

        for(i; i<x.length; i++)

        {
            x[i].style.backgroundColor="#eeeeee";
        }

    };







};