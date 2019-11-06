// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }



// 设置图片切换
let myImage = document.querySelector('img');
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/timg.png') {
    myImage.setAttribute ('src','images/QQ图片20190706155107。jpg');
  } else {
    myImage.setAttribute ('src','images/timg.jpg');
  }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '派哥 酷毙了，' + myName;
  }
}

// 初始化代码：在页面初次读取时进行构造工作：
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '派哥 酷毙了，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
  setUserName();
};