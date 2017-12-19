var CreateDiv = function (html) {
  this.html = html;
  this.init();
};
CreateDiv.prototype.init = function () {
    console.log('a');
};
var Proxy = (function () {
    var instance;
    return function (data) {
        if (!instance) {
            instance = new CreateDiv(data);
        }
        return instance;
    }
})();
// 代理模式  还有两个例子
var a = new Proxy('a');
var b = new Proxy('b');
console.log(a === b);