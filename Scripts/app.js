/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function () {
    "use strict"

    // think of this function as the event handler
    // About Button Click event handler
    function AboutButtonClick() {
        console.log("About Button Clicked!");
    }

    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    // event is implicitly passed
    function AboutButtonOut() {
        event.currentTarget.style.opacity = 1;
    }

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";

        // About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    function AboutContent() {
        console.log(Math.PI);

        let paragraph = document.getElementById("paragraph");
        // inject text, can use innerText or textContent(all browser can use)
        paragraph.textContent = "We will be changing the content of this paragraph throughout the semester.";

        let mySentence = "Here is my sentence.";
        paragraph.textContent = mySentence;
    }

    function Start() {

        // local variable
        let title = document.title;

        console.log("App Started!");
        console.log("-----------------");
        console.log("Title: " + title);

        switch (title) {
            case "COMP125 - Home":
                HomeContent();
                break;

            case "COMP125 - About":
                AboutContent();
                break;

            default:
                break;
        }
    }
    // window.onload = Start;
    window.addEventListener("load", Start);
})();