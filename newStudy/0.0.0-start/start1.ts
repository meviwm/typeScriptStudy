/*
    2018-01-02
    安装：npm install -g typescript
    编译：tsc <fileName.ts>
*/
function greeter(person){
    return "Hello, "+person;
}
let user = "Jane User";
console.log(greeter(user));


/*
    给 person函数的参数添加: string类型注解
*/
function greeter1(person1:string){
    return "Hello, "+person1;
}
let user1  = "Jane User";
console.log(greeter1(user1));


/*
    接口:
    函数的参数传入对象时检查是否包含这需要的字段
*/
interface Person {
    firstName:string;
    lastName:string;
}

function greeter2(person:Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = {
    firstName:"Jane",
    lastName:"User"
};

console.log(greeter2(user2));


/*
    类：

*/
//类
class Student{
    fullName:string;
    constructor (public firstName,public middleInitial,public lastName){
        this.fullName = firstName+" "+middleInitial + " " +lastName;
    }
}
//接口
interface Person1{
    firstName:string;
    lastName:string;
}
//方法
function greeter3(person:Person1){
    return "Hello, "+ person.firstName+" "+person.lastName;
}
//实例化类
let user3 = new Student("Jane","M.","User");

console.log(greeter3(user3));