var googleMap = {
    show:function () {
        console.log('googleMap');
    }
};
var baiduMao = {
    show:function () {
        console.log('baiduMap');
    }
};
var renderMap = function (show) {
    if (map.show instanceof Function) {
        map.show();
    }
};
/**
 * 现在自己写的接口是一致的show方法，但是如果有第三方的接口方法会不一致，这个时候我们需要改写成我们支持的形式，所以需要一个适配器去包装
 */
var tencent = {
    display: function () {
        console.log('tencentMap');
    }
};
var tencentAdapter = {
    show:function () {
        return tencent.display();
    }
};
renderMap(tencentAdapter);