//订阅者 ，接收数据更新视图，更改数据反馈到model中
function Watcher(vm,exp,cb){
  this.vm = vm;
  this.exp = exp;
  this.cb = cb;
  this.depIds = {};
  this.value = this.get();
}

Watcher.prototype = {
  update:function(){
    this.run();
  },
  run:function(){
      var value = this.get();
      var oldVal = this.value;
      if (value !== oldVal) {
        this.value = value;
        this.cb.call(this.vm,value,oldVal);
      }
  },
  addDep:function(dep){
    if (!this.depIds.hasOwnProperty(dep.id)) {
      dep.addSub(this);
      this.depIds[dep.id] = dep;
    }
  },
  get:function(){
    Dep.target =this;
    var value = this.getVMVal();
    Dep.target = null;
    return value;
  },
  getVMVal:function(){
    var exp = this.exp.split('.');
    var val = this.vm._data;
    exp.forEach(function(k){
        val =val[k];
    });
    return val;
  }

};


















