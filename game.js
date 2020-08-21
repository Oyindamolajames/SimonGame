
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern =[];
function welcome() {
    var name = prompt("Hello, What is your Name?");
             $(".alert").text("Welcome " + name + ", Ensure you read the rules before you proceed to the game!");
}

             $(document).click(function(){
                var yellow = new Audio("sounds/yellow.mp3");
                 yellow.play();
             });

var started = false;

var level = 0;

$(document).keypress(function(){
    if (!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$("h1").click(function(){
    if (!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){
    var userChosenColor =  $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        // playSound("wrong");
var wrong = new Audio("sounds/wrong.mp3");
wrong.play();
$("body").addClass("game-over")
setTimeout(function(){
    $("body").removeClass("game-over");
}, 2000)
$("#level-title").text("Game Over, press any key to restart");
 startOver();
    }
}

function nextSequence(){

    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

        $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
       playSound(randomChosenColor);
       animatePress(randomChosenColor);
       level++;
       $("#level-title").text("Level " + level);    
}

function playSound(name) {
    switch (name) {
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
        yellow.play();
            break;
            case "red":
            var red = new Audio("sounds/red.mp3");
        red.play();
            break;
            case "blue":
            var blue = new Audio("sounds/blue.mp3");
        blue.play();
            break;
            case "green":
            var green = new Audio("sounds/green.mp3");
        green.play();
            break;
        default:
            break;
    }
}

function animatePress(currentColor){
    $("#" +currentColor).addClass("pressed");
    setTimeout(() =>{
      $("#" + currentColor).removeClass("pressed")  
    }, 100);
}

function startOver(){
    level = 0;
    gamePattern =[];
    started = false;
}




