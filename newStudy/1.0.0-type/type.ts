/**
 * 布尔值
 */
let isDone:boolean = true;


/**
 * 数字
 */
let x:number = 9;

/**
 * 字符串
 */
let str:string = 'viwm';


 // * 多行文本字符串和内嵌表达式
let text:string = `aaaaa${x}aaaaa
bbbbb${str}bbbbb
ccccc${isDone}ccccc`;
console.log(text);

/**
 * 数组
 */
// 1.可以在元素类型后面接上 []，表示由此类型元素组成的一个数组
let arr:number[] = [8,9,0];
console.log(arr);
// arr = ['v','m','e'];     //报错：元素类型不是number类型
// console.log(arr);

// 2.数组泛型，Array<元素类型>
let list:Array<string> = ['v','m','e'];
console.log(list);

/**
 * 元组：元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 */
// 元素和类型必须对应
let v:[string,number] = ['viwm',9];
console.log(v);
// 通过索引访问值，其类型依旧存在
console.log(v[0].substr(1));    //iwm
console.log(v[0]);
// * 联合类型：访问越界的元素，会使用联合类型替代
v[3] = 'meme';
console.log(v[5]);

/**
 * 枚举：enum
 * 使用枚举类型可以为一组数值赋予友好的名字
 * 从0开始为元素编号
 */
enum Color{red,green,yellow};
let c:Color = Color.green;
console.log(c);     // 1
// 指定编号
enum sex {'保密'=5,'男','女'}
// 获取编号
let me:sex = sex['男'];
console.log(me);    //1
// 通过编号访问枚举属性值
let meme : string = sex[6];
console.log(meme);

/**
 * Any
 * 不确定类型的情况或只知道部分数据类型的情况
 */
let notSure : any = 9;
notSure = 'me';
notSure = true;
console.log(notSure);
// 数组中的应用
let lists:any[]=[8,true,'viwm'];

/**
 * Void
 * 表示没有任何类型
 */
// void类型只能为它赋予undefined和null
let unusable:void = undefined;

/**
 * Null和Undefined
 * null和undefined是所有类型的子类型
 */
let u: undefined = undefined;
let n: null = null;
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
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

/**
 * 类型断言
 * 
 */
// <>语法
let someValue:any = "this is a string";
let strLength:number = (<string>someValue).length;
console.log(strLength); //16
// as 语法
let strL:number = (someValue as string).length;
console.log(strL);