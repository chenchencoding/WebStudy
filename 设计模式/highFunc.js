/*
 * @Date: 2021-12-31 13:50:52
 * @LastEditTime: 2021-12-31 14:22:56
 * @LastEditors: your name
 * @Description: 
 */
/**
 * 1. 函数作为参数来传递：
 *  回调函数的应用不仅只在异步请求中，当一个函数不适合执行一些请求时，
 *  我们也可以把这些请求封装成一个函数，并把它作为参数传递给另外一个函数，
 *  “委托”给另外一个函数来执行。
 */

//  Array.prototype.sort
let arr = [0,3,5,7,9,2,4,6,10]

arr.sort((a,b)=>{
  return a - b
})

/**
 * 2. 函数作为返回值输出
 *  函数继续返回一个可执行的函数，意味着运算过程是可延续的。
 */

// 判断数据类型
let isType = function(type){
  return function (obj){
      return Object.prototype.toString.call(obj) === '[object '+type +']'
  }
}
let isString = isType('String');
let isArray = isType('Array');
let isNumber = isType('Number');

console.log(isArray([1,2,3]))   // true

//批量注册

let Type = {}
for (let i = 0, type ; type =['String','Array','Number'][i++]; ){
    (function(type){
      Type['is'+type] = function (obj) {
        return Object.prototype.toString.call(obj) === '[object '+ type +']';
      }
    })(type)
}
Type.isArray([]) // true
Type.isString('Str')

// 单例模式 【未学】

// 立即执行函数 
// refs: https://www.cnblogs.com/fumo/p/7853418.html
function IMF(type){
  console.log(type) // MODEL
}('MODEL') 

(function(params){
  console.log(params) // params
})('params')

((args)=>{
  console.log(args) // [1,2,3]
})([1,2,3])