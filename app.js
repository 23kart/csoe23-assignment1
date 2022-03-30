function upDate(element){
  document.getElementById('image').innerHTML = element.alt;
}
function unDo(){
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
function openFunction(){
  el = document.getElementById("content");
  el.style.display = "block";
}
function closeFunction(){
  el = document.getElementById("content");
  el.style.display = "none";
}

function tog() {
  var x = document.getElementById("schedule");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var trivia = []
trivia[0]="CSK has won the most Fair Play Awards, with a total of 6."
trivia[1]="CSK has the most final appearances in the IPL."
trivia[2]="CSK is the first team to win all home matches."
trivia[3]="Suresh Raina has captained 5 matches for CSK."
trivia[4]="CSK is one of the only two teams to defend their IPL championship."
trivia[5]="CSK's highest score is 246/5 against RR."
trivia[6]="CSK's highest batting partnership is between Shane Watson and Faf duPlessis"
trivia[7]="Ravindra Jadeja has CSK's best bowling figures of 5/16."

function triviagen(){
  var randomtrivia=Math.floor(Math.random()*(trivia.length));
  document.getElementById('ptrivia').innerHTML = trivia[randomtrivia];
}

let playSound = () => new Audio("images/Whistling.mp3").play()
