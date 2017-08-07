var list = document.getElementById("list");
//获得数字
//添加数字
function addSum(direction) {
    var num = document.getElementById("text-input").value;
    var ele = document.createElement("span");
    console.log(num);
    if (list.children.length >= 60) {
        alert("数字数量已达上限！")
    } else {
        //判断是否为数字，和数字大小。
        if (!isNaN(num) && num !== "" && num >= 10 && num <=100){
            ele.style.height = num * 2 + "px";
            //ele.innerText = num;
            if (direction === "left") {
                list.insertBefore(ele, list.firstChild);
            } else {
                list.appendChild(ele);
            }
        } else {
            alert("输入错误！请输入一个 10-100 的数字。");
        }
    }
    num = "";
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
            alert(parseInt(list.children[0].style.height) / 2 + "被删除");
            list.removeChild(list.children[0]);
        } else if (direction =="right") {
            alert(parseInt(list.lastChild.style.height) / 2 + "被删除");
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
var btnSort = document.getElementById("sort");
EventUtil.addHandler(btnLeftIn, "click", lefti);
EventUtil.addHandler(btnLeftOut, "click", lefto);
EventUtil.addHandler(btnRightIn, "click", righti);
EventUtil.addHandler(btnRightOut, "click", righto);
EventUtil.addHandler(btnSort, "click", bubbleSort);
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
// 冒泡排序
function bubbleSort() {
    var numList = list.children;
    var len = numList.length;
    var temp;

    console.log(numList[0].style.height);
    console.log(len);
    if (len > 0) {
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len-i-1; j++) {
                var num1 = parseInt(numList[j].style.height);
                console.log(num1);
                var num2 = parseInt(numList[j + 1].style.height);
                console.log(num2);
                if (num1 > num2) {
                    numList[j].style.height = num2 + "px";
                    numList[j + 1].style.height = num1 + "px";
                }
            }
        }
    }
}