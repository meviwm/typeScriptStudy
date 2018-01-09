/*
    2018-01-02
    安装：npm install -g typescript
    编译：tsc <fileName.ts>
*/
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.log(greeter(user));
/*
    给 person函数的参数添加: string类型注解
*/
function greeter1(person1) {
    return "Hello, " + person1;
}
var user1 = "Jane User";
console.log(greeter1(user1));
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = {
    firstName: "Jane",
    lastName: "User"
};
console.log(greeter2(user2));
/*
    类：

*/
//类
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
//方法
function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//实例化类
var user3 = new Student("Jane", "M.", "User");
console.log(greeter3(user3));
