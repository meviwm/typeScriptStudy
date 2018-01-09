// 传入的对象必须有一个名称为label,类型为string的属性
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = {
    size: 10,
    label: 'mmmm'
};
printLabel(myObj);
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
var myObj1 = {
    size: 10,
    label: 'meme'
};
printLabel1(myObj1);
function createSquare(config) {
    var newSquare = {
        color: 'white',
        area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'green' });
console.log(mySquare);
var p1 = { x: 6, y: 9 };
console.log(p1);
/**
 * ReadonlyArray<T>类型
 * 只读数组：数组创建后再也不能被修改
 * 下面ro不能再次进行赋值、添加、.length()操作
 */
var a = [6, 9, 8, 0];
var ro = a;
console.log(ro);
console.log(a);
// ro[1] = 99;
// a[0] = 5;
// console.log(ro)
// console.log(a)
console.log(a.length);
console.log(ro.length);
// 解除锁定
a = ro;
// let mySearch:SearchFunc;
// mySearch = function(source:string,subString:string){
// let result = source.search(subString);
// return result > -1;
// }
// 该函数的参数类型和返回值类型
var mySearch = function (source, subString) {
    // search：用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
    // 如果没有找到任何匹配的子串，则返回 -1。
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch('abgdfdf', 'b'));
// console.log(mySearch(68909890,9))
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray = ['viwm', 'meme'];
var item = myArray[0];
console.log(item);
