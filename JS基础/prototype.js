/*
 * @Date: 2021-12-30 17:18:48
 * @LastEditTime: 2022-01-25 10:24:00
 * @LastEditors: your name
 * @Description: 
 */
/*
 * @Date: 2021-12-30 17:18:48
 * @LastEditTime: 2021-12-30 17:18:48
 * @LastEditors: your name
 * @Description: 不理解复制对象的过程
 */

function Person (name) {
  this.name = name;
};

Person.prototype.getName = function(){
  return this.name
}

let objectFactory = function () {
   let obj = new Object();
   Constructor = [].shift.call(arguments);
  //  console.log('object, args,constructor',obj, ';', arguments,',',Constructor)
    obj._proto_ = Constructor.prototype;
   let ret = Constructor.apply(obj,arguments);
   return typeof res === 'object' ? ret : obj;
}

let a = objectFactory(Person,'seven')

console.log(a.name)

console.log(a)

console.log(Object.getPrototypeOf(a)=== Person.prototype)