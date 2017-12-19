/*单例模式，需要通过方法去判断单例*/
const Singleton = function (name) {
	this.name = name;
};

Singleton.prototype.getName = function() {
	console.log(this.name);
};
Singleton.getInstance = (function (){
	var instance = null;
	return function(name){
		if (!instance) {
		instance = new Singleton(name);
	}
		return instance;
	}
	
})();

const a = Singleton.getInstance('hello');
const b = Singleton.getInstance('world');
console.log(a);
console.log(b);
console.log(a === b);