/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function (){
    "use strict"

    function Start(){
        // local variable
        let title = document.title;

        switch(title){
            case "COMP125 - Home":
                let AboutButton = document.getElementById("AboutButton");

                AboutButton.addEventListener("click", function(){
                    console.log("About Button was clicked!")
                });
            break;
            
            case "COMP125 - About":
            break;
        }

        



        console.log("App Started!");
        console.log("-----------------");
        console.log("Title: " + title);
    }

    window.onload = Start;
})();