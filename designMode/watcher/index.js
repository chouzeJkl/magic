var  saleOffices = {};
saleOffices.list = [];
saleOffices.listen = function (fn) {
    this.list.push(fn);
};
saleOffices.trigger = function () {
    for (var i = 0, fn; fn = this.list[i++];) {
        fn.apply(this, arguments);
    }
};
saleOffices.listen(function (a, b) {
    console.log(a,b);
});
saleOffices.listen(function (a, b) {
    console.log(a,b);
});
saleOffices.trigger('a', 'b');
saleOffices.trigger('c', 'd');

/** 观察者模式 设置一个监听器，一个触发器，
 * 一个队列，触发事件时监听的用户，收到通知，缺点：没有过滤消息，可能收到不是自己想要的信息
 */

