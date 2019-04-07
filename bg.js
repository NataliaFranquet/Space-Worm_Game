class Bg {

  constructor(game) {
    this.game = game;
    this.bg = new Image();
    this.bg.src = "./spaceBg.jpg";
  }

  drawBg() {
    this.game.ctx.beginPath();
    this.game.ctx.drawImage(this.bg, 0, this.game.valueNav, this.game.w, this.game.h);
    this.game.ctx.closePath();
  }




} 