/** @type {CanvasRenderingContext2D} */
class Game {

  constructor(id, width, height) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.setAttribute('width', width);
    this.canvas.setAttribute('height', height);
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.w2 = this.w / 2;
    this.h2 = this.h / 2;
    this.PI2 = 2 * Math.PI;
    this.fps = 60;
    this.myBg = new Bg(this);
    this.worm = new Worm(this);
    this.food = new Food(this);
    this.power = new Power(this);
    this.obstacle = new Obstacles(this);
    //this.myAudio = new Audio("escribir aquí la ruta del audio en mp3");
    //this.myAudio.onload = this.startGame();
    this.pressDown = false;
    this.pressLeft = false;
    this.pressRight = true;
    this.pressUp = false;
    this.leftKey = 37;
    this.rightKey = 39;
    this.upKey = 38;
    this.downKey = 40;
    this.isGame = true;
    this.score = 0;
    this.frameCounter = 0;
    this.dir = 0;
    this.valueNav = 50;
    this.hasPower = false;
  }

  startGame() {
    if (this.isGame) {
      //this.myAudio.play();
      this.worm.initWorm();
      this.intervalID = setInterval(() => {
        this.frameCounter++;
        this.moveAll();
        this.drawAll();
      }, 1000 / this.fps);
    }
  }

  moveAll() {
    this.movements();
    this.worm.moveWorm();
  }

  drawAll() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    if (this.isGame) {
      this.drawValueNav();
      this.boundaries();
      if (this.score >= 500) {
        this.obstacle.drawObstacle();
      }
      this.power.drawPower();
      this.power.eatPower(this.worm);
      this.food.drawFood();
      this.food.eatFood(this.worm);
      this.obstacle.hitObstacle(this.worm);
      this.worm.drawWorm();
      this.drawScore();
    } else {
      //this.myAudio.pause();
      this.gameOver();
    }
  }

  gameOver() {
    clearInterval(this.intervalID);
    this.ctx.textBaseline = 'middle';
    this.ctx.textAlign = 'center';
    this.ctx.font = 'normal bold 40px Space Mono';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText('Game over', this.w2, this.h2);
    this.ctx.fillText(`Score: ${this.score}`, this.w2, this.h2+50);
    document.querySelector("#reset-button").style.display = "inline-block";
    window.onkeydown = function (e) {
      if (e.keyCode === 13) initGame();
    };
  }

  drawValueNav() {
    this.myBg.drawBg();
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0,0,this.w,this.valueNav);
    this.ctx.closePath();
  }

  drawScore() {
    this.ctx.font = "normal bold 30px Space Mono";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Score: ${this.score}`, 20, 35);
  }

  boundaries() {
    if (this.worm.listPosY[0] >= this.h - 20) {
      this.isGame = false;
    }
    if (this.worm.listPosY[0] < 50 + this.worm.r) {
      this.isGame = false;
    }
    if (this.worm.listPosX[0] >= this.w - 2 * this.worm.r) {
      this.isGame = false;
    }
    if (this.worm.listPosX[0] <= 0) {
      this.isGame = false;
    }
  }

  movements() {
    window.onkeydown = function (e) {
      //e.preventDefault();
      if ((e.keyCode == this.leftKey) && (!this.pressRight)) {
        this.dir = 135;
        this.pressLeft = true;
        this.pressUp = false;
        this.pressDown = false;
      }
      if ((e.keyCode == this.rightKey) && (!this.pressLeft)) {
        this.dir = 45;
        this.pressRight = true;
        this.pressUp = false;
        this.pressDown = false;
      }
      if ((e.keyCode == this.upKey) && (!this.pressDown)) {
        this.dir = 0;
        this.pressUp = true;
        this.pressRight = false;
        this.pressLeft = false;
      }
      if ((e.keyCode == this.downKey) && (!this.pressUp)) {
        this.dir = 90;
        this.pressDown = true;
        this.pressRight = false;
        this.pressLeft = false;
      }
    }.bind(this);
  }
}
