类型检测在开发中时常需要用到，例如判断ajax获得的数据类型，判断字符串或者是数组等。
es5中有两大类的数据类型，分为基本数据类型和引用数据类型:
>null
>undefined
>number
>boolean
>string
>object
以上的数据类型可以使用typeof进行检测
```
typeof null //object
typeof undefined // undefined
typeof number //number
typeof boolean // boolean
typeof function //function
typeof object //object
```
但是JavaScript中的内置对象有很多种，所以使用typeof并不能检测出属于哪一种对象类型。object原生的toString方法会返回一个[object,nativeconstructorName]格式的字符串。

```
function isArray(value){
    return Object.prototype.toString.call(value) == "[object,Array]";
}
```
通过上面的例子写一个公共函数

```
function type(value){
    if(value==null){
        return value + ""; 
    }
    return (typeof value === "object")||(typeof value === "function")? Object.prototype.toString.call(value).slice(8,-1).toLowerCase()||"object":typeof value;
}
function isArray(value){
    return type(value) === "array";
}
```
另一种方式实现：

```
var class2type = {};
// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})

function type(obj) {
    if (obj == null) {
        return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}
```

以上基本实现了基本数据类型和引用数据类型的检测，但是还有plainObject、空对象、Window对象、类数组对象等检测没有完成。

类数组对象的检测：

```
function isArrayLike(o){
    if(o &&                                    // o不是null、undefined等
       typeof o === 'object' &&                // o是对象
       isFinite(o.length) &&                   // o.length是有限数值
       o.length >= 0 &&                        // o.length为非负值
       o.length === Math.floor(o.length) &&    // o.length是整数
       o.length < 4294967296){                  // o.length < 2^32
       return true
    }else{
       return false
    }    
}
function isArrayLike(o){
    if(o.length)var length = o.length;
    return typeof o ==="object"&&typeof length ==="number"&&length>=0&&length <= MAX_ARRAY_INDEX;
}
function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length,
        // 检测obj的类型
        type = jQuery.type(obj)
        if (type === "function" || jQuery.isWindow(obj)) {
            return false
        }
        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && (length - 1) in obj;
}
```
window和空对象:

```
function isWindow(obj){
    return obj !=null &&obj ===obj.window;
}
function isEmptyObject( obj ) {
    var name;
    for ( name in obj ) {
        return false;
    }
    return true;
},
```

参考：
    https://github.com/mqyqingfeng/Blog/issues/28
    https://github.com/jquery/jquery/blob/ac9e3016645078e1e42120822cfb2076151c8cbe/src/core.js#L269


