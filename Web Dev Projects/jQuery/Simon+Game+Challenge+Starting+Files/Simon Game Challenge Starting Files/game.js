
var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];
var gamePattern = [];
var started = false;
var level = 0


$(document).keypress(function (){
    if (!started){
        $("#level-title").text('Level '+ level)
        nextSequence();
        started=true;
    }
    
})

$('.btn').click(function (){
    var userColor = $(this).attr("id");
    userClickedPattern.push(userColor);
    playSound(userColor);
    animatePress(userColor);

    checkAnswer(userClickedPattern.length-1);
})

function nextSequence() {
  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
};


function playSound (sound) {
    console.log(sound);
    var audio = new Audio('sounds/' + sound +".mp3" );
    audio.play();
}

function animatePress (color) {
    $("#"+color).addClass('pressed');
    setTimeout(function() {
        $("#"+color).removeClass('pressed')
    },100)
}



function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
    }

}