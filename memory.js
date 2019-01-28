var cards = ["brachiosaurus.png", "velociraptor.png", "apatosaurus.png",
"tyranosaurus.png", "triceratops.png", "diplodocus.png"];

var card0 = document.getElementById("card0"); // 1. add element from HTML and give the ID to it
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");

var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");

var card8 = document.getElementById("card8");
var card9 = document.getElementById("card9");
var card10 = document.getElementById("card10");
var card11 = document.getElementById("card11");

card0.addEventListener("click", function() {openCard(0);}); // 2. listening to the click event next --> function
card1.addEventListener("click", function() {openCard(1);});
card2.addEventListener("click", function() {openCard(2);});
card3.addEventListener("click", function() {openCard(3);});

card4.addEventListener("click", function() {openCard(4);});
card5.addEventListener("click", function() {openCard(5);});
card6.addEventListener("click", function() {openCard(6);});
card7.addEventListener("click", function() {openCard(7);});

card8.addEventListener("click", function() {openCard(8);});
card9.addEventListener("click", function() {openCard(9);});
card10.addEventListener("click", function() {openCard(10);});
card11.addEventListener("click", function() {openCard(11);});

var firstCard = false; // 4. boolean for first card
var numberOfMoves = 0; // 5. turn counter
var visibleCardNumber; // 8. adding var that shows opened cards' number

function openCard(nr) // 3. the core of the game is here
{
    var picture = "url(img/" + cards[nr] + ")";

    $("#card" + nr).css("background-picture", picture); //9. jQuery adds class, here we add class to the card from css and then picture
    $("#card" + nr).addClass("cardFirst"); // 10.we are adding class when clicking card the name of class is in second quote
    $("#card" + nr).removeClass("card"); // 11. removing class after revealing second card

    if (firstCard== false)// 12.opening first card
    {
        firstCard = true; //13.first card is changed to true
        //visibleCardNumber = nr; //14. when card is opened, it becomes number in the openCard function
    }
    else // second card
    {
        numberOfMoves++;
    }
    

  }


