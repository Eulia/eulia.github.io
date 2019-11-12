// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++)
{
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}




// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++)
{
    close[i].onclick = function ()
    {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var change = document.querySelector('ul');


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
    if (inputValue === '')
    {
        alert("You must write something!");
    }
    else
    {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++)
    {
        close[i].onclick = function ()
        {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


//function ShowElement(element) {
//    var oldhtml = element.innerHTML;
//    //如果已经双击过，内容已经存在input，不做任何操作
//    if (oldhtml.indexOf('type="text"') > 0) {
//        return;
//    }
//    //创建新的input元素
//    var newobj = document.createElement('input');
//    //为新增元素添加类型
//    newobj.type = 'text';
//    //为新增元素添加value值
//    newobj.value = oldhtml;
//    //为新增元素添加光标离开事件
//    newobj.onblur = function () {
//        //当触发时判断新增元素值是否为空，为空则不修改，并返回原有值 
//        if (this.value && this.value.trim() !== "") {
//            element.innerHTML = this.value == oldhtml ? oldhtml : this.value;
//        } else {
//            element.innerHTML = oldhtml;
//        }
//    }
//    //设置该标签的子节点为空
//    element.innerHTML = '';
//    //添加该标签的子节点，input对象
//    element.appendChild(newobj);
//    //设置选择文本的内容或设置光标位置（两个参数：start,end；start为开始位置，end为结束位置；如果开始位置和结束位置相同则就是光标位置）
//    newobj.setSelectionRange(0, oldhtml.length);
//    //设置获得光标
//    newobj.focus();

//}