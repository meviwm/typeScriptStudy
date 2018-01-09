/**==============================
 * 布尔类型 boolean
 */
var isDone = true;
/**==============================
 * 数字 number
 */
var num = 9;
/**==============================
 * 字符串 string
 */
var str = 'viwm';
/**==============================
 * 数组
 */
// 在元素类型后加[]，由此类型元素组成的数组
var array = [6, 9, 0, 8];
// 数组泛型
var array1 = [6, 9, 0, 8];
/**==============================
 * 元组 tuple
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 */
var x;
// 数据类型和值要对应
x = ['viwm', 69];
// x=[89,'viwm']   // 报错，类型不对应
// 访问数组
console.log(x[0]);
// 访问越界的元素，会使用联合类型替代
x[3] = 'word';
console.log(x);
/**==============================
 * 枚举 enum
 * 默认从0开始为元素编号，也可以手动进行编号
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Bule"] = 2] = "Bule";
    Color[Color["#ff3500"] = 3] = "#ff3500";
})(Color || (Color = {}));
;
console.log(Color); // {0: "Red", 1: "Green", 2: "Bule", 3: "#ff3500", Red: 0, Green: 1, Bule: 2, #ff3500: 3}
var c = Color.Green;
console.log(c); // 1
var sex;
(function (sex) {
    sex[sex["\u7537"] = 1] = "\u7537";
    sex[sex["\u5973"] = 2] = "\u5973";
})(sex || (sex = {}));
;
console.log(sex[1]); //男
console.log(sex.女); //2
var sex2;
(function (sex2) {
    sex2[sex2["\u7537"] = 1] = "\u7537";
    sex2[sex2["\u5973"] = 2] = "\u5973";
})(sex2 || (sex2 = {}));
;
console.log(sex2[1]); //男
console.log(sex2['女']); //2
// 通过值与名字进行匹配
/**==============================
 * 任意类型any,对未知类型或多种类型的变量进项标记
 * 在编译时可选择地包含或移除类型检查
 */
var notSure = 4;
var arr = [1, '2', true];
