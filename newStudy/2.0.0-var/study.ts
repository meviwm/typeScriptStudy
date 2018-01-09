// 传入的对象必须有一个名称为label,类型为string的属性
function printLabel(labelledObj:{label:string}){
    console.log(labelledObj.label);
}

let myObj = {
    size:10,
    label:'mmmm'
}

printLabel(myObj);


// 使用接口更改上面的示例
interface LabelledValue {
    label:string;
}

function printLabel1(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}

let myObj1 = {
    size:10,
    label:'meme'
}

printLabel1(myObj1);


/**
 * 可选属性
 * ?
 */
interface SquareConfig{
    color?:string;
    width?:number;
}

function createSquare(config:SquareConfig):{color:string;area:number}{
    let newSquare = {
        color:'white',
        area:100
    };
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color:'green'});
console.log(mySquare);


/**
 * 只读属性
 * readonly
 */
interface Point{
    readonly x:number;
    readonly y:number;
}

let p1:Point = {x:6,y:9};

console.log(p1);

/**
 * ReadonlyArray<T>类型
 * 只读数组：数组创建后再也不能被修改
 * 下面ro不能再次进行赋值、添加、.length()操作
 */
let a:number[] = [6,9,8,0];
let ro:ReadonlyArray<number> = a;
console.log(ro);
console.log(a);
// ro[1] = 99;
// a[0] = 5;
// console.log(ro)
// console.log(a)
console.log(a.length);
console.log(ro.length);

// 解除锁定
a=ro as number[];


/**
 * 额外的属性检查
 */


 /**
  * 函数类型
  */

// 调用签名：
// 参数列表和返回值类型
interface SearchFunc{
    (source:string,subString:string):boolean;
}

// let mySearch:SearchFunc;
// mySearch = function(source:string,subString:string){
    // let result = source.search(subString);
    // return result > -1;
// }

// 该函数的参数类型和返回值类型
let mySearch:SearchFunc= function(source:string,subString:string){
    // search：用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
    // 如果没有找到任何匹配的子串，则返回 -1。
    let result = source.search(subString);
    return result > -1;
}

console.log(mySearch('abgdfdf','b'));
// console.log(mySearch(68909890,9))

mySearch = function(src:string,sub:string):boolean{
    let result = src.search(sub);
    return result > -1;
}

/**
 * 可索引的类型
 * index
 */
interface StringArray{
    [index:number]:string;
}
let myArray:StringArray = ['viwm','meme'];
let item:string = myArray[0];
console.log(item);

