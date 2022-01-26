/**
 * document.getElementsByClassName('slide');document.querySelectorAll(".slide");的区别
 * 当对相应的内容进行修改的时候，前者会动态的发生更改，而后者只是静态的，不会发生更改
 * 前者：HTMLCollection 后者NodeList
 */
// const slide = document.getElementsByClassName('slide')
const slides = document.querySelectorAll(".slide");
// 当前位置的下标
let currentIndex = 0
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
prev.addEventListener('click', handlePrevClicked)
next.addEventListener('click', handleNextClicked)

// const prev = document.getElementById('#prev')
// 通过getElementById 获取到的无法监听点击事件
// const next = document.getElementById('#next',()=>{
//   console.log('点击下一页')
// })
// 是否自动播放
const autoPlay = true
// 播放方向
var forward = false
const interval = 3000

if (autoPlay) {
  setInterval(forward ? handleNextClicked : handlePrevClicked, interval);
}

// 添加前进按钮事件处理函数
next.addEventListener("click", handleNextClicked);

// 添加后退按钮事件处理函数
prev.addEventListener("click", handlePrevClicked);
// setTimeout()
function handleNextClicked(){
   // 获取当前
    let current = slides[currentIndex]
    current.classList.remove('current')
    currentIndex++
    if(currentIndex >=slides.length){
      currentIndex = 0
    }
    slides[currentIndex].classList.add('current')

}
function handlePrevClicked(){
    let current = slides[currentIndex]
    current.classList.remove('current')
    currentIndex = (currentIndex % slides.length) + 1
    console.log(currentIndex)
    if(currentIndex >=slides.length){
      currentIndex = 0
    }
    slides[currentIndex].classList.add('current')
}
// console.log(current,slide[0])