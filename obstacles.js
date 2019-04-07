class Obstacles {

  constructor(game) {
    this.game = game;
    this.blackHole = new Image();
    this.blackHole.src = "./blackHole.png";
    this.sizeObstacle = 120;
    this.xObstacle = 0;
    this.yObstacle = 0;
    this.locateObstacle();
  }

  drawObstacle() {
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.blackHole, this.xObstacle, this.yObstacle, this.sizeObstacle, this.sizeObstacle);
    this.game.ctx.closePath();
  }

  hitObstacle(worm) {

    if (worm.listPosX[0] < this.xObstacle + this.sizeObstacle / 2 &&
      worm.listPosX[0] + worm.r > this.xObstacle &&
      worm.listPosY[0] < this.yObstacle + this.sizeObstacle / 2 &&
      worm.r + worm.listPosY[0] > this.yObstacle) {
      this.game.isGame = false;
    }
  }

  locateObstacle() {
    this.xObstacle = randomIntFromInterval(50, this.game.w - 50);
    this.yObstacle = randomIntFromInterval(80, this.game.h * .90);
  }
}