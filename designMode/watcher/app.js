var  saleOffices = {};
saleOffices.list = {};
saleOffices.listen = function (key, fn) {
    if (!this.list[key]) {
        this.list[key] = [];
    }
    this.list[key].push(fn);
};
saleOffices.trigger = function () {
    var key = Array.prototype.shift.call(arguments),
        fns = this.list[key];
    if (!fns && fns.length === 0) {
        return false;
    }
    for (var i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments);
    }
};
saleOffices.listen('90', function (b) {
    console.log(b);
});
saleOffices.listen('100', function (d) {
    console.log(d);
});

saleOffices.trigger('90', 900);
saleOffices.trigger('100', 1000);