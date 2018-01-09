/**
 * 在方法中需要对应的变量时，传入的参数里必须包含该变量。实现检测这个变量是否存在的方法称为接口
 */
// 定义接口类型：要求传入的对象必须包含一个string类型的参数label
interface labelledValue{
    label:string;
}
// 函数方法，接收一个对象，要包含string类型的label属性
function printLabel(labelledObj:labelledValue){
    console.log(labelledObj.label);
}
// 定义对象
let myObj = {size:10,label:'size 10 Object'};
// 函数调用
printLabel(myObj);




/**
 * 可选属性
 */
interface SquareConfig{
    color?:string;
    width?:number;
}
function createSquare(config:SquareConfig):{color:string;area:number}{
    let newSquare = {color:"white",area:100};
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width*config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color:"black"});

