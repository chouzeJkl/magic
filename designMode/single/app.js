const Singleton = function (name) {
	this.name = name;
	this.instance = null;
};

Singleton.prototype.getName = function() {
	console.log(this.name);
};
Singleton.getInstance = function (name){
	if (!this.instance) {
		this.instance = new Singleton(name);
	}
	return this.instance;
};

const a = Singleton.getInstance('hello');
const b = Singleton.getInstance('world');
console.log(a);
console.log(b);
console.log(a === b);