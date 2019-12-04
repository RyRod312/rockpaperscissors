$(document).ready(function() {
  $("#shoot").click(function(){ 
    let userInput = $("#input").val().toUpperCase();

    $("#userChoice").text(userInput);
    $("#userChoice").addClass("choice")
    

    let choices = ["Rock", "Paper", "Scissors"];

    let fortune = Math.random();
    let index = Math.floor(fortune * choices.length);
    let choice = choices[index]

    $("#computerChoice").text(choice);
    $("#computerChoice").addClass("comp");

    $(".res").removeClass("win");
    $(".res").removeClass("lose");
    $(".res").removeClass("draw");
    if(userInput === "Rock" && choice === "Rock")
    {
      $(".res").text("Draw!");
      $(".res").addClass("draw");
    }
    else if(userInput === "ROCK" && choice === "Paper")
    {
      $(".res").text("You Lose");
      $(".res").addClass("lose");
    }
    else if(userInput === "ROCK" && choice === "Scissors")
    {
      $(".res").text("You Win");
      $(".res").addClass("win");
    }
    else if(userInput === "PAPER" && choice === "Rock")
    {
      $(".res").text("You Win");
      $(".res").addClass("win");
    }
    else if(userInput === "PAPER" && choice === "Paper")
    {
      $(".res").text("Draw");
      $(".res").addClass("draw");
    }
    else if(userInput === "PAPER" && choice === "Scissors")
    {
      $(".res").text("You Lose");
      $(".res").addClass("lose");
    }
    else if(userInput === "SCISSORS" && choice === "Rock")
    {
      $(".res").text("You Lose");
      $(".res").addClass("lose");
    }
    else if(userInput === "SCISSORS" && choice === "Paper")
    {
      $(".res").text("You Win");
      $(".res").addClass("win");
    }
    else if(userInput === "SCISSORS" && choice === "Scissors")
    {
      $(".res").text("Draw");
      $(".res").addClass("draw");
    }

   $("#input").val("");
 
  });
});