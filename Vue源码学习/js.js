/*
 * @Date: 2022-01-20 12:14:21
 * @LastEditTime: 2022-01-20 17:19:41
 * @LastEditors: your name
 * @Description: js 隐氏类型转换
 */
/**
 * 1. 原始类型：number string boolean null undefined object
 * 2. null == undefined
 *    number == string 转 number
 *    boolean == ? 转 number
 *    object == number | string 尝试转换为基本类型
 * 3. 
 */

console.log(12 === 12)
console.log("12" === 12)
console.log('12' === '12')

