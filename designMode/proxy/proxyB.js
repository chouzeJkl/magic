var Flower = function () {};
var xiaoming = {
    send: function (target) {
        var flower = new Flower();
        target.receiveFlower(flower);
    }
};
var A = {
    receiveFlower: function (flower) {
        B.receiveFlower(flower);
    }
};
var B = {
    receiveFlower: function (flower) {
        console.log(flower);
    }
};
xiaoming.send(B);
/**
 * 代理：虚拟代理把一些耗时的初始化的操作放在代理里面，减少资源的消耗,高内聚，低耦合.
 * 保护代理：过滤一些请求。
 */
