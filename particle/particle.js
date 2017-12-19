import Circle from './circle';

export default class Particle {
  constructor(val) {
    this.ctx = this.getCanvas(val).getContext('2d');
    this.getCanvas(val).width = window.innerWidth;
    this.getCanvas(val).height = window.innerHeight;
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.circles = [];
  }
  getCanvas = (val) => {
    return val;
  };
  draw = () => {
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (let i = 0; i < this.circles.length; i++) {
      this.circles[i].drawCircle(this.ctx);
      this.circles[i].move(this.w / 1.2, this.h / 1.2);
      for (let j = 0; j < this.circles.length; j++) {
        this.circles[i].drawLine(this.ctx, this.circles[j]);
      }
    }
    requestAnimationFrame(this.draw);
  };
  // 初始化
  init = (num) => {
    for (let i = 0; i < num; i++) {
      this.circles.push(new Circle(Math.random() * this.w, Math.random() * this.h));
    }
    this.draw();
  };
}