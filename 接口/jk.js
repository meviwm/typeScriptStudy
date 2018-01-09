// 函数方法，接收一个对象，要包含string类型的label属性
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
// 定义对象
var myObj = { size: 10, label: 'size 10 Object' };
// 函数调用
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
