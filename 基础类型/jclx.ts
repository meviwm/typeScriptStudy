/**==============================
 * 布尔类型 boolean
 */
let isDone:boolean = true;

/**==============================
 * 数字 number
 */
let num:number = 9;

/**==============================
 * 字符串 string
 */
let str:string = 'viwm';

/**==============================
 * 数组
 */
// 在元素类型后加[]，由此类型元素组成的数组
let array:number[] = [6,9,0,8];
// 数组泛型
let array1:Array<number> = [6,9,0,8];

/**==============================
 * 元组 tuple
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 */
let x:[string,number];
// 数据类型和值要对应
x=['viwm',69];
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
enum Color {Red,Green,Bule,'#ff3500'};
console.log(Color);     // {0: "Red", 1: "Green", 2: "Bule", 3: "#ff3500", Red: 0, Green: 1, Bule: 2, #ff3500: 3}
let c:Color = Color.Green;
console.log(c);     // 1

enum sex {男=1,女=2};
console.log(sex[1]);    //男
console.log(sex.女);     //2

enum sex2 {'男'=1,'女'=2};
console.log(sex2[1]);    //男
console.log(sex2['女']);     //2

// 通过值与名字进行匹配

/**==============================
 * 任意类型any,对未知类型或多种类型的变量进项标记
 * 在编译时可选择地包含或移除类型检查
 */
let notSure:any = 4;
let arr:any = [1,'2',true];

/**==============================
 * 空值void，它表示没有任何类型。
 * 只能为它赋予undefined和null
 */
let unus:void = undefined;

/**==============================
 * null和undefined
 * 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
 */
let n:null = null;

/**===============================
 * never:永不存在的值的类型
 * 死循环的函数返回never类型
 */
/**===============================
 * 类型断言
 */
// 确切知道是某种类型，使用<>
let me:any = "雨林沐风";
let strLength:number = (<string>me).length;
// as语法
let strL:number = (me as string).length;