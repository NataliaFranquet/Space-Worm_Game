class Power {

  constructor(game) {
    this.game = game;
    this.colorFill = "#ec6433";
    this.sizePowerX = 100;
    this.sizePowerY = 50;
    this.xPower = 0;
    this.yPower = 0;
    this.accelerationFactor = 1;
    this.rocketImg = new Image();
    this.rocketImg.src = "./rocket.png";
    this.generatePower();
    this.currentFrame = 0;
  }

  drawPower() {
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.rocketImg, this.xPower, this.yPower, this.sizePowerX, this.sizePowerY);
    this.game.ctx.closePath();
  }


  eatPower(worm) {
    if (worm.listPosX[0] < this.xPower + this.sizePowerX &&
      worm.listPosX[0] + worm.r > this.xPower &&
      worm.listPosY[0] < this.yPower + this.sizePowerY &&
      worm.r + worm.listPosY[0] > this.yPower) {
      this.game.hasPower = true;
      this.game.score += 300;
      this.currentFrame = this.game.frameCounter;

      this.xPower = -Infinity;
      this.yPower = -Infinity;

      setTimeout(() => {
        this.generatePower();
      }, 10000)
    }

    if(this.game.hasPower === true){

      switch (this.game.dir) {
        case (0):
          worm.listPosY[0] -= worm.velocity *= this.accelerationFactor;
        break;

        case (45):
          worm.listPosX[0] += worm.velocity *= this.accelerationFactor;
          break;

        case (90):
          worm.listPosY[0] += worm.velocity *= this.accelerationFactor;
          break;

        case (135):
          worm.listPosX[0] -= worm.velocity *= this.accelerationFactor;
          break;
      }

      if(this.game.frameCounter >= this.currentFrame + 200){
        this.game.hasPower = false;
        worm.velocity = 4;
      }
    }
  }

  generatePower() {
    this.xPower = randomIntFromInterval(50, this.game.w - 50);
    this.yPower = randomIntFromInterval(80, this.game.h * .90);
  }
}