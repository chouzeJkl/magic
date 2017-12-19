var event = {
    list: {},
    listen: function (key,fn) {
        if(!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    trigger: function () {
        var key = Array.prototype.shift.call(arguments),
            fns = this.list[key];
        if (!fns && fns.length === 0 ) {
            return false;
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    },
    remove:function (key,fn) {
        var fns = this.list[key];
        if (!fns) {
           return false
        }
        if (!fn) {
            fns && (fns.length === 0);
        } else {
            for(var l = fns.length - 1; l > 0; l --) {
                var _fn = fns[l];
                if (_fn === fn) {
                    fns.splice(l,i);
                }
            }
        }
    }
};

var installEvent = function (obj) {
    for (var i in event) {
        obj[i] = event[i];
    }
};

/** 封装成一个对象的方式，添加删除事件的方法，添加一个动态安装事件
 *
 */
