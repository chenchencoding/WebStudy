/*
 * @Date: 2022-01-05 16:30:09
 * @LastEditTime: 2022-01-06 09:24:29
 * @LastEditors: your name
 * @Description: 
 * 1. 单例模式的核心是确保只有一个实例，并提供全局访问
 */

let singleTon = function (name) {
  this.name = name;
  this.instance = null;
}
//  new singleTon () 函数构造器会默认返回一个this指针，这个指针指向singleTon
console.log('singleTon', new singleTon('Franker'))  

// 理解为简单属性在prototype上
singleTon.prototype.getName = function(){
  console.log('singeTon.name',this.name)
}
//理解为对象属性在singleTon上
singleTon.getInstance = function (name) {
   if(!this.instance){
      this.instance = new singleTon(name);
   }
   return this.instance
}
console.log(singleTon.getName)
console.log(singleTon.getInstance('Frank') === singleTon.getInstance('Leo'))

singleTon.getInstance1 = (function(){
  let instance = null;
  return function (name) {
    if(!instance) {
      instance = new singleTon(name)
    }
    return instance
  }
})();
console.log(singleTon.getInstance1('Frank') === singleTon.getInstance1('Leo'))

// 透明处理
// 在页面中创建唯一的div节点

let creatDiv = (function(){
  
  let instance = null;
  // 给instance进行初始化
  let creatDiv = function(html){
    console.log('[html,this]',html,this)
    if(instance){
      return instance
    }
    this.html = html
    this.init()
    console.log('[instance,this]',instance,this)
    return instance = this
  }
  creatDiv.prototype.init = function() {
      let div = document.createElement('div')
      div.innerHTML = this.html
      document.body.appendChild(div)
  }
  return creatDiv

})()
console.log(new creatDiv('frank') === new creatDiv('leo'))


// 使用代理

let creatDiv1 = function  (html){
  this.html = html
  this.init()
}
creatDiv1.prototype.init = function() {
  let div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}

let ProxySingletonCreateDiv = (function(){
   let instance ;
   return function(html) {
     if(!instance){
       instance = new creatDiv1(html)
     }
     return instance
   }
})()

console.log('[proxy在页面生成唯一一个节点]',new ProxySingletonCreateDiv('DALIAN') === new ProxySingletonCreateDiv('QINGTAO') )


/** 
 * buglist:
 * 1. Uncaught TypeError: Cannot read properties of null (reading 'append')
 * js在页面生成前就已经执行所以获取不到body
   解决方法：将appendhild或者需要获取body标签的js代码或文件放在body内部或者body标签后
 */