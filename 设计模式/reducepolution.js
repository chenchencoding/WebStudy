/*
 * @Date: 2022-01-06 09:20:44
 * @LastEditTime: 2022-01-06 09:52:06
 * @LastEditors: your name
 * @Description: 降低全局变量带来的命名污染。
 */
// 命名空间
var namespace1 = {
  name: function(){
    return 'first'
  },
  age: function(){
    return '24'
  }
}
console.log('[namespace1:name,age]',namespace1.name(),namespace1.age())

// 动态创建命名空间
var myApp  = {}
myApp.namespace = function(name) {
  var parts = name.split('.')
  var current = myApp
  for(var i in parts) {
    if(!current[parts[i]]){
      current[parts[i]] = {}
    }
    console.log('[before]',parts[i],current)
    current = current[parts[i]]
  }
}
myApp.namespace('event')
myApp.namespace('dom.style')
// 相当于
var MyApp = {
  event :{},
  dom: {
    style: {}
  }
}
console.log(myApp)
console.dir(myApp)


// 闭包

var user = (function(){
    var _name = 'seven', _age = '23';
    return {
      getUserInfo: function (){
        return _name + '-' + _age
      }
    }

})();

console.log('[user]',user.getUserInfo().split('-'))
