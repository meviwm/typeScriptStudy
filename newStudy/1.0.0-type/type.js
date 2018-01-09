/**
 * 布尔值
 */
var isDone = true;
/**
 * 数字
 */
var x = 9;
/**
 * 字符串
 */
var str = 'viwm';
// * 多行文本字符串和内嵌表达式
var text = "aaaaa" + x + "aaaaa\nbbbbb" + str + "bbbbb\nccccc" + isDone + "ccccc";
console.log(text);
/**
 * 数组
 */
// 1.可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
var arr = [8, 9, 0];
console.log(arr);
// arr = ['v','m','e'];     //报错：元素类型不是number类型
// console.log(arr);
// 2.数组泛型，Array<元素类型>
var list = ['v', 'm', 'e'];
console.log(list);
/**
 * 元组：元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 */
// 元素和类型必须对应
var v = ['viwm', 9];
console.log(v);
// 通过索引访问值，其类型依旧存在
console.log(v[0].substr(1)); //iwm
console.log(v[0]);
// * 联合类型：访问越界的元素，会使用联合类型替代
v[3] = 'meme';
console.log(v[5]);
/**
 * 枚举：enum
 * 使用枚举类型可以为一组数值赋予友好的名字
 * 从0开始为元素编号
 */
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
;
var c = Color.green;
console.log(c); // 1
// 指定编号
var sex;
(function (sex) {
    sex[sex["\u4FDD\u5BC6"] = 5] = "\u4FDD\u5BC6";
    sex[sex["\u7537"] = 6] = "\u7537";
    sex[sex["\u5973"] = 7] = "\u5973";
})(sex || (sex = {}));
// 获取编号
var me = sex['男'];
console.log(me); //1
// 通过编号访问枚举属性值
var meme = sex[6];
console.log(meme);
/**
 * Any
 * 不确定类型的情况或只知道部分数据类型的情况
 */
var notSure = 9;
notSure = 'me';
notSure = true;
console.log(notSure);
// 数组中的应用
var lists = [8, true, 'viwm'];
/**
 * Void
 * 表示没有任何类型
 */
// void类型只能为它赋予undefined和null
var unusable = undefined;
/**
 * Null和Undefined
 * null和undefined是所有类型的子类型
 */
var u = undefined;
var n = null;
/**
 * Never
 * 永不存在的值的类型
 * never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
 * 变量也可能是 never类型，当它们被永不为真的类型保护所约束时
 * never类型是任何类型的子类型，也可以赋值给任何类型
 * 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）
 * 即使 any也不可以赋值给never
 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
/**
 * 类型断言
 *
 */
// <>语法
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength); //16
// as 语法
var strL = someValue.length;
console.log(strL);
