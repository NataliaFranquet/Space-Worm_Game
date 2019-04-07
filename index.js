window.onload = function () {
  document.querySelector("#start-button").onclick = function () {
    initGame();
  };
  document.querySelector("#reset-button").onclick = function () {
    initGame();
  };
};

window.onkeydown = function (e) {
  if (e.keyCode === 13) initGame();
};

function initGame() {
  document.querySelector("#canvas").style.display = "flex";
  document.querySelector(".start").style.display = "none";
  document.querySelector(".gameName").style.display = "none";
  document.querySelector(".bg-transp").style.display = "none";
  document.querySelector(".bg-img").style.display = "none";
  document.querySelector("#reset-button").style.display = "none";
  var game = new Game("canvas", window.innerWidth, window.innerHeight * 0.95);
  game.startGame();
}

