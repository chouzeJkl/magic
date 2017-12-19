var obj = {
    name: 'qiuze',
    address: 'shenzhen',
};
obj.address = obj.address + 'futian';

var demo = function (obj,value) {
    this.obj = obj;
    this.obj.address = value;
};