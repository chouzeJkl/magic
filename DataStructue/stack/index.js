/** stack 栈 后进先出
 */
function Stack () {
    var items = [];
    this.push = function (element) {
        items.push(element);
    };
    this.pop = function () {
        items.pop();
    };
    this.peek = function () {
        return items[items.length - 1];
    };
    this.isEmpty = function () {
        return items.length === 0;
    };
    this.size = function () {
        return items.length;
    };
    this.clear = function () {
        items = [];
    };
    this.print = function () {
        console.log(items.toString());
    };
};
var stack = new Stack();
console.log(stack.isEmpty());
var phone = '14718090449';
var str = phone.replace(/(\d{3})(?=\d)/, "$1 ").replace(/(\d{4})(?=\d)/, "$1 ");
console.log(str,'--------------');
stack.push(1);
stack.push(3);
stack.print();