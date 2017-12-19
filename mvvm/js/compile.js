//编译指令，解析成函数执行，然后更新数据
function Compile(el,vm){
  this.$vm = vm;
  this.$el = this.isElementNode(el)?el: document.querySelector(el);
  if (this.$el) {
    this.$fragment = this.node2Fragment(this.$el);
    this.init();
    this.$el.appendChild(this.$fragment);
  }
}

Compile.prototype = {
  node2Fragment:function(el){
    var fragment = document.createDocumentFragment();
    var child;
    while(child = el.firstChild){
        fragment.appendChild(child);
    }
    return fragment;
  },
  init:function(){
    this.compileElement(this.$fragment);
  },
  compileElement:function(el){
    var childNodes = el.childNodes;
    var that = this;
    [].slice.call(childNodes).forEach(function(node){
        var text = node.textContent;
        var reg = /\{\{.*\}\}/;
        if (that.isElementNode(node)) {
          that.compile(node);
        }else if (that.isTextNode(node)&&reg.test(text)) {
           that.compileText(node,RegExp.$1);
        }
        if (node.childNodes&&node.childNodes.length) {
          that.compileElement(node);
        }
    });
  },
  compile:function(node){
    var nodeAttrs = node.attributes,
    that = this;
    [].slice.call(nodeAttrs).forEach(function(attr){
       var attrName = attr.name;
       if (that.isDirective(attrName)) {
          var exp = attr.value;
          var dir = attrName.substring(2);
          if (that.isEventDirective(dir)) {
            compileUtil.eventHandler(node,that.$vm,exp,dir);
          }else{
            compileUtil[dir]&&compileUtil[dir](node,that.$vm,exp);
          }
          node.removeAttribute(attrName);
       }
    });
  },
  compileText:function(node,exp){
    compileUtil.text(node,this.$vm,exp);
  },
  isDirective:function(attr){
    return attr.indexOf('v-') === 0;
  },
  isEventDirective:function(dir){
    return dir.indexOf('on') === 0 ;
  },
  isElementNode:function(node){
      return node.nodeType == 1;
  },
  isTextNode:function(node){
    return node.nodeType == 3;
  }
};

var compileUtil = {
  text:function(node,vm,exp){
    this.bind(node,vm,exp,'text');
  },
  html:function(node,vm,exp){
      this.bind(node, vm, exp, 'html');
  },
  model:function(node,vm,exp){
    this.bind(node,vm,exp,'model');
    var that = this,
    val = this._getVMVal(vm,exp);
    node.addEventListener('input',function(e){
      var newValue = e.target.value;
      if (val === newValue) return;
      that._setVMVal(vm,exp,newValue);
      val = newValue;
    });
  },
  class:function(node,vm,exp){
    this.bind(node,vm,exp,'class');
  },
  bind:function(node,vm,exp,dir){
    var updaterFn = updater[dir+'Updater'];
    updaterFn && updaterFn(node, this._getVMVal(vm, exp));
    new Watcher(vm, exp, function(value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue);
        });
  },
  eventHandler:function(node,vm,exp,dir){
    var eventType = dir.split(':')[1];
    var fn = vm.$options.methods && vm.$options.methods[exp];
    if (eventType&&fn) {
      node.addEventListener(eventType,fn.bind(vm),false);
    }
  },
  _getVMVal:function(vm,exp){
    var val = vm._data;
    exp = exp.split('.');
    exp.forEach(function(k){
      val = val[k];
    });
    return val;
  },
  _setVMVal:function(vm,exp,value){
    var val = vm._data;
     exp = exp.split('.');
     exp.forEach(function(k,i){
        if (i<exp.length-1) {
          val = val[k];
        }else{
          val[k] = value;
        }
     });
  }

};

var updater = {
  textUpdater:function(node,value){
    node.textContent = typeof value == 'undefined'?'':value;
  },
   htmlUpdater: function(node, value) {
        node.innerHTML = typeof value == 'undefined' ? '' : value;
    },
    classUpdater:function(node,value,oldValue){
      var className = node.className;
      className = className.replace(oldValue, '').replace(/\s$/, '');
        var space = className && String(value) ? ' ' : '';
        node.className = className + space + value;
    },
    modelUpdater:function(node,value,oldValue){
        node.value = typeof value == 'undefined' ? '' : value;
    }
}















