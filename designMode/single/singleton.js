var CreateDiv = (function () {
    var instance;
    var CreateDiv = function (html){
        if(instance) {
            return instance;
        }
        this.html = html;
        this.init();
        return instance = this;
    };
    CreateDiv.prototype.init = function() {
        console.log('a');
    };
    return CreateDiv;
})();
var a = new CreateDiv('aa');
var b = new CreateDiv('bb');
console.log(a === b);