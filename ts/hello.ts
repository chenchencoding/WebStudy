function greeter(person) {
  return "Hello, " + person;
}

let user = "Jane User";

console.log(user)
let str = greeter(user)
console.log(user)
// document.getElementById('#app').innerHTML = greeter(user);

let myAdd = function (x, y) { return x + y; };

console.log("myAdd", myAdd(3, 5))
// 返回值类型可以忽略
function add( x: number, y: number): number {
  return x + y;
}
let add2 = add(3, 7)
console.log('add2', typeof add2)
// 书写完整函数类型
let myAdd2: (x: number, y: number) => number =
  function (x: number, y: number): number { return x + y; };

console.log("myAdd2", myAdd2(100, 1))

// 类型推断： 