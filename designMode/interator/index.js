
function each(array, fn) {
    const len = array.length;
    for (var i = 0; i < len; i++) {
        fn.call(array[i], array[i], i);
    }
}
each([1,2,3,4],function (item, index) {
   console.log(item,index);
});

const compare = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.log('no');
        return;
    }
    each(arr1 ,function (i ,n) {
        if (i !== arr2[n]) {
            console.log('no');
            return;
        }
    });
    console.log('yes');
};
compare([2, 3], [2, 3]);