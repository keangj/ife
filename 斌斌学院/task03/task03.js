var list = document.getElementById("list");
//获得数字
//添加数字
function addSum(direction) {
    var num = document.getElementById("text-input").value;
    var ele = document.createElement("span");
    console.log(num);
    if (!isNaN(num) && num !== ""){
        ele.innerHTML = num;
        if (direction === "left") {
            list.insertBefore(ele, list.firstChild);
        } else {
            list.appendChild(ele);
        }
    } else {
        alert("输入错误！请输入一个数字。");
    }
}
//删除数字
// function removeSum(direction) {
//     console.log(list.children.length-1);
//     console.log(list.childNodes.length);
//     if (list.children.length < 1) {
//         alert("没有数字可以删除");
//     } else {
//         if (direction === "left") {
//             alert(list.children[0].innerText + "被删除");
//             list.removeChild(list.children[0]);
//         } else if (direction =="right") {
//             alert(list.lastChild.innerText + "被删除");
//             list.removeChild(list.lastChild);
//         }
//     }
// }
function removeSum(direction) {
    // console.log(list.children.length-1);
    // console.log(list.childNodes.length);
    var listLastIndex = list.children.length-1;
    if (list.children.length < 1) {
        alert("没有数字可以删除");
    } else {
        if (direction === "left") {
            alert(list.children[0].innerText + "被删除");
            list.removeChild(list.children[0]);
        } else if (direction =="right") {
            alert(list.lastChild.innerText + "被删除");
            list.removeChild(list.children[listLastIndex]);
        }
    }
}

function lefti(){
    addSum("left");
}
function righti(){
    addSum("right");
}
function lefto(){
    removeSum("left");
}
function righto(){
    removeSum("right");
}
//绑定事件处理函数
var btnLeftIn = document.getElementById("left-in");
var btnLeftOut = document.getElementById("left-out");
var btnRightIn = document.getElementById("right-in");
var btnRightOut = document.getElementById("right-out");
EventUtil.addHandler(btnLeftIn, "click", lefti);
EventUtil.addHandler(btnLeftOut, "click", lefto);
EventUtil.addHandler(btnRightIn, "click", righti);
EventUtil.addHandler(btnRightOut, "click", righto);
// 删除点击数字
EventUtil.addHandler(list, "click", deleteSum);
// function deleteSum(event) {
//     event = event || window.event;
//     target = event.target || event.srcElement;
//     if (target.nodeType.UpperCase = "LI") {
//         list.removeChild(target);
//     }
// }

// list.onclick = function(event) {
//     event = event || window.event;
//     target = event.target || event.srcElement;
//     if (target.nodeType.UpperCase = "LI") {
//         list.removeChild(target);
//     }
// }
// 调用EventUtil对象
function deleteSum(event) {
    event = EventUtil.getEvent(event);
    target = EventUtil.getTarget(event);
    list.removeChild(target);
}
