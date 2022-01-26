function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.log(user);
var str = greeter(user);
console.log(user);
// document.getElementById('#app').innerHTML = greeter(user);
var myAdd = function (x, y) { return x + y; };
console.log("myAdd", myAdd(3, 5));
// 返回值类型可以忽略
function add(x, y) {
    return x + y;
}
var add2 = add(3, 7);
console.log('add2', typeof add2);
var myAdd2 = function (x, y) { return x + y; };
console.log("myAdd2", myAdd2(100, 1));
