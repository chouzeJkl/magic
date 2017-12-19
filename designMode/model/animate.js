var Animate = function (dom) {
  this.dom = dom;
  this.startTime = 0;
  this.startPosition = 0;
  this.endPosition = 0;
  this.propertyName = null;
  this.easing = null;
  this.duration = null;
};
Animate.prototype.start = function (propertyName, endPos, duration, easing) {
    this.startTime = + new Date();
    this.startPosition = this.dom.getBoundingClientRect()[propertyName];
    this.propertyName = propertyName;
    this.endPosition = endPos;
    this.duration = duration;
    this.easing = tween[easing];

    var self = this;
    var timeId = setInterval(function () {
        if (self.step() === false) {
            clearInterval(timeId);
        }
    }, 19);
};

Animate.prototype.step = function () {
    var t = + new Date();
    if (t >= this.startTime + this.duration) {
        this.update(this.endPosition);
        return false;
    }
    var pos = this.easing(t - this.startTime,this.startPosition, this.endPosition - this.startPosition, this.duration );
    this.update(pos);
};
Animate.prototype.update = function (pos) {
    this.dom.style[this.propertyName] = pos + 'px';
};