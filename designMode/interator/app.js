var Iterator = function (obj) {
    var current = 0;
    var next = function () {
        current += 1;
    };
    var isDone = function () {
        return current >= obj.length;
    };
    var getCurrentItem = function () {
        return obj[current];
    }
    return {
        next: next,
        isDone: isDone,
        getCurrentItem: getCurrentItem,
    }
};

var compare = function (arr1, arr2) {
   while (!arr1.isDone() && !arr2.isDone() ) {
        if(arr1.getCurrentItem() !== arr2.getCurrentItem()) {
            console.log('no');
            return;
        }
        arr1.next();
        arr2.next();
   }
   console.log('yes');
};

var arr1 = Iterator([1,233,4]);
var arr2 = Iterator([1,233,4]);
compare(arr1, arr2);