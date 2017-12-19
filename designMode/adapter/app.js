var allCity = function () {
    var city = [
        {
            name: 'guangzhou',
            id: 11,
        },
        {
            name: 'shenzhen',
            id: 12,
        },
    ];
    return city;

};
var render =function (fn) {
    console.log('guangdong');
    document.write(JSON.stringify(fn));
};
render(allCity);