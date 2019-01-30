var cards = ["apatosaurus.png","apatosaurus.png", "tyranosaurus.png", "velociraptor.png", "diplodocus.png", "triceratops.png", 
"brachiosaurus.png", "tyranosaurus.png", "velociraptor.png", "diplodocus.png", "triceratops.png", "brachiosaurus.png"];
// can't find this bad dino to open card

var k0 = document.getElementById('k0'); // 1. add element from HTML and give the ID to it
var k1 = document.getElementById('k1');
var k2 = document.getElementById('k2');
var k3 = document.getElementById('k3');

var k4 = document.getElementById('k4');
var k5 = document.getElementById('k5');
var k6 = document.getElementById('k6');
var k7 = document.getElementById('k7');

var k8 = document.getElementById('k8');
var k9 = document.getElementById('k9');
var k10 = document.getElementById('k10');
var k11 = document.getElementById('k11');

k0.addEventListener("click", function() {openCard(0);}); // 2. listening to the click event next --> function
k1.addEventListener("click", function() {openCard(1);});
k2.addEventListener("click", function() {openCard(2);});
k3.addEventListener("click", function() {openCard(3);});

k4.addEventListener("click", function() {openCard(4);});
k5.addEventListener("click", function() {openCard(5);});
k6.addEventListener("click", function() {openCard(6);});
k7.addEventListener("click", function() {openCard(7);});

k8.addEventListener("click", function() {openCard(8);});
k9.addEventListener("click", function() {openCard(9);});
k10.addEventListener("click", function() {openCard(10);});
k11.addEventListener("click", function() {openCard(11);});

var firstCard = false; // 4. boolean for first card
var numberOfMoves = 0; // 5. turn counter
var secondOpenedCard; // 8. adding var that shows opened cards' number

function openCard(nr) // 3. the core of the game is here
{  // alert(nr);
    var picture = "url(Pictures/" + cards[nr] + ")";

    $('#k' + nr).css("background-image", picture); //9. jQuery adds class, here we add class to the card from css and then picture
    $('#k' + nr).addClass("cardFirst"); // 10.we are adding class when clicking card the name of class is in second quote
    $('#k' + nr).removeClass("card"); // 11. removing class after revealing second card

    if (firstCard== false)// 12.opening first card
    {
        firstCard = true; //13.first card is changed to true
        secondOpenedCard = nr; //14. when card is opened, it becomes number in the openCard function
    }
    else // second card
    {   //alert(nr);

        if (cards[secondOpenedCard]=[cards])
        {
            alert("pair");// 18. checking if there is a pair
        }// when clicking second card I need to show  it to the js then pair
        numberOfMoves++; //15. the turn counter goes up one concatenate
        $(".points").html("Number of moves: " + numberOfMoves);// 16. Added jQuery how to add one point in moves, adding to HTML
       firstCard = false; //17. first card is covered
    }
    

  }


