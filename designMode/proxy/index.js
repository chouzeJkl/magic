var Flower = function () {};
var xiaoming = {
    send: function (target) {
     var flower = new Flower();
     target.receiveFlower(flower);
    }
};

var A = {
    receiveFlower: function (target) {
        console.log(target);
    }
};
xiaoming.send(A);