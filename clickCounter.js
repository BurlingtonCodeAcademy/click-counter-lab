/*----------------------DOM--------------------*/
let racer = document.getElementById("name");
let submitName = document.getElementById("submit-btn");
let racerDisplay = document.getElementById("output");
let gas = document.getElementById("count-btn");
let count = document.getElementById("count");
let speedClick = document.getElementById("speedClick");
let winner = document.getElementById("winner");

/*-------------------Evt Listener-----------------*/
//name submit button
submitName.addEventListener("click", (evt) => {
  evt.preventDefault();
  gas.disabled = false;
  setInterval(() => {
    speedClick.innerHTML = racingClicks++;
  }, 1000);
  racerDisplay.innerHTML = racer.value;
});

//click counter button
gas.addEventListener("click", (evt) => {
  evt.preventDefault();
  raceOn();
});

/*---------------------Globals------------------*/
//count starts
let racingClicks = 75;
let clickCount = 0;

/*-------------------Function--------------------*/
//click count the increments the count and displays it
function raceOn() {
  //increments count
  clickCount++;
  //displays it
  count.innerHTML = clickCount;
  //win checks
  if (racingClicks === 100) {
    clearInterval(speedClick);
    clickCount = 0;
    racingClicks = 75;
    winner.textContent = "Speed Clicker Wins again!";
  }
  if (clickCount === 100) {
    clearInterval(speedClick);
    clickCount = 0;
    racingClicks = 75;
    winner.textContent = "In an Upset! " + racer.value + " is the winner";
  }
}
