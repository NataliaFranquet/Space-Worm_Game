class Food {

  constructor(game) {
    this.game = game;
    this.xFood = 0;
    this.yFood = 0;
    this.ballFood = new Image();
    this.ballFood.src = "./bolita2.png";
    this.foodSize = 30;
    this.locateFood();
  }

  drawFood() {
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.ballFood, this.xFood, this.yFood, this.foodSize, this.foodSize);
    this.game.ctx.closePath();
  }

  eatFood(worm) {
    if (worm.listPosX[0] < this.xFood + this.foodSize &&
      worm.listPosX[0] + worm.r > this.xFood &&
      worm.listPosY[0] < this.yFood + this.foodSize &&
      worm.r + worm.listPosY[0] > this.yFood) {
      worm.wormSize += 25;
      this.game.score += 100;
      this.locateFood();
    }
  }

  locateFood() {
    this.xFood = randomIntFromInterval(50, this.game.w - 50);
    this.yFood = randomIntFromInterval(80, this.game.h * .90);
  }
}
