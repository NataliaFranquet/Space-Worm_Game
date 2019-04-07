class Worm {

  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.r = 12;
    this.velocity = 4;
    this.listPosX = new Array(900);
    this.listPosY = new Array(900);
    this.wormSize = 50;
    this.colorHead = "rgba(255,255,255,0.4)";
    this.colorTail = generateRandomRGBA(0.4);
  }

  drawCircle(x, y, color) {
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle = color;
    this.game.ctx.arc(x, y, this.r, 0, this.game.PI2);
    this.game.ctx.fill();
    this.game.ctx.closePath();
  }

  drawWorm() {
    for (var i = 0; i < this.wormSize; i++) {
      if (i < 5) this.drawCircle(this.listPosX[i], this.listPosY[i], this.colorHead);
      else this.drawCircle(this.listPosX[i], this.listPosY[i], this.colorTail);
    }
  }

  initWorm() {
    for (var i = 0; i < this.wormSize; i++) {
      this.listPosX[i] = this.game.w2;
      this.listPosY[i] = this.game.h2;
    }
  }

  moveWorm() {
    for (var i = this.wormSize; i > 0; i--) {
      this.listPosX[i] = this.listPosX[(i - 1)];
      this.listPosY[i] = this.listPosY[(i - 1)];
    }
    if (this.game.pressLeft) {
      this.listPosX[0] -= this.velocity;
    }
    if (this.game.pressRight) {
      this.listPosX[0] += this.velocity;
    }
    if (this.game.pressUp) {
      this.listPosY[0] -= this.velocity;
    }
    if (this.game.pressDown) {
      this.listPosY[0] += this.velocity;
    }
    this.checkCollision();
  }

  checkCollision() {
    for (var i = 1; i < this.wormSize; i++) {
      if (this.listPosX[0] === this.listPosX[i] && this.listPosY[0] === this.listPosY[i])
        this.game.isGame = false;
    }
  }
}




