window.onload = function(){



    var start = document.getElementById("start");
    var end = document.getElementById("end");

 



    function startGame(){


        var x= document.getElementsByClassName("boundary");
        var i =0;

        for(i; i<x.length; i++)

        {
            x[i].style.backgroundColor="#eeeeee";
        }

    };




    function turnRed(){

        
        var x= document.getElementsByClassName("boundary");
        var i =0;

        for(i; i<x.length; i++)

        {
            x[i].style.backgroundColor="red";
        }


    };











};