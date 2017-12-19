/**
 * 队列 先进先出
 * @constructor
 */
var Queue = function () {
    var items = [];
    function QueueElement(element,priority) {
        this.element = element;
        this.priority = priority;
    };
    /**
     * 最小优先级队列
     * @param ele
     * @param priority
     */
    this.enqueue = function (ele,priority) {
        var queueElement = new QueueElement(ele,priority);
        if (this.isEmpty()) {
            items.push(ele);
        } else {
            var added = false;
            for(var i = 0;i < items.length;i++){
                if(queueElement.priority < items[i].priority) {
                    items.splice(i,0,queueElement);
                    added = true;
                    break;
                }
            }
            if(!added) {
                items.push(queueElement);
            }
        }

    };
    this.dequeue = function () {
        items.shift();
    };
    this.front = function () {
        return items[0];
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
 var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
queue.dequeue();
console.log(queue.front());
queue.print();
