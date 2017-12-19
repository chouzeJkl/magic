function MVVM(options){
  this.$options = options;
  var data = this._data = this.$options.data;
  var that = this;
  Object.keys(data).forEach(function(key){
    that._proxy(key);
  });
  observer(data,this);
  this.$compile = new Compile(options.el||document.body,this);
}
MVVM.prototype = {
  $watch:function(key,cb,options){
    new Watcher(this,key,cb);
  },
  _proxy:function(key){
    var that = this;
    Object.defineProperty(that,key,{
        configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return that._data[key];
            },
            set: function proxySetter(newVal) {
                that._data[key] = newVal;
            }
    });
  }
}
