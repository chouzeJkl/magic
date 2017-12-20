/**
 * Created by king on 2017/10/31.
 */
export default class Circle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      // 半径
      this.r = (Math.random() * 15) < 8 ? 8 : (Math.random() * 15);
      this._mx = Math.random();
      this._my = Math.random();
    }
    // 绘制圆
    drawCircle(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 12, 0, 360);
      ctx.closePath();
      ctx.fillStyle = 'rgba(204, 204, 204, 0.15)';
      ctx.fill();
    }
    /**
     * 绘制直线
     * @param {*} ctx canvas元素
     * @param {*} _circle  设置的圆的位置
     */
    drawLine(ctx, _circle) {
      let dx = this.x - _circle.x;
      let dy = this.y - _circle.y;
      let d = Math.sqrt(dx * dx + dy * dy);
      if (d < 300 && d > 200) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(_circle.x, _circle.y);
        ctx.closePath();
        ctx.width = '0.5';
        ctx.strokeStyle = 'rgba(204, 204, 204, 0.1)';
        ctx.stroke();
      }
    }
    move(w, h) {
      this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx);
      this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);
      this.x += this._mx / 4;
      this.y += this._my / 4;
    }
  }
  