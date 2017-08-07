var list = document.getElementById("list");
//添加文本
function addSum(direction) {
    var text = document.getElementById("text-input").value;
    
    console.log(text);
    //分割文本 
    var eleText = text.split(/[,，。.、 \n]/);
    //解决左侧输入顺序bug
    if (direction === "left") {
        eleText.reverse();
    }
    //创建元素并添加到节点树
    for (var i = 0; i < eleText.length; i++) {
        var ele = document.createElement("span");
        ele.innerHTML = eleText[i];
        if (direction === "left") {
            
            list.insertBefore(ele, list.firstChild);
        } else {
            list.appendChild(ele);
        }
    }
}

//删除数字
// function removeSum(direction) {     console.log(list.children.length-1);
// console.log(list.childNodes.length); if (list.children.length < 1) {
// alert("没有数字可以删除");     } else {         if (direction === "left") {
// alert(list.children[0].innerText + "被删除");
// list.removeChild(list.children[0]);         } else if (direction =="right")
// {             alert(list.lastChild.innerText + "被删除");
// list.removeChild(list.lastChild);         }     } }
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
var btnquery = document.getElementById("query-btn");
EventUtil.addHandler(btnLeftIn, "click", lefti);
EventUtil.addHandler(btnLeftOut, "click", lefto);
EventUtil.addHandler(btnRightIn, "click", righti);
EventUtil.addHandler(btnRightOut, "click", righto);
EventUtil.addHandler(btnquery, "click", query);

// 鼠标点击删除数字
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

//查询功能
function query() {
    var queryText = document.getElementById("query-text").value;
    var texts = list.children;
    console.log("查询文本是" + queryText);
    var pattern = new RegExp(queryText);
    
    for (var i = 0; i < texts.length; i++) {
        var oldText = texts[i].innerHTML.replace(/(<span class="bold">|<\/span>)/g, "");
        console.log("chushi文本是" + texts[i].innerHTML);
        console.log("o文本是" + oldText);
        texts[i].innerHTML = oldText;
        if(pattern.test(oldText)){
            console.log("c文本是" + texts[i].innerHTML);
            texts[i].innerHTML = texts[i].innerHTML.replace(RegExp(queryText), "<span class='bold'>" + queryText + "</span>");
            console.log("b文本是" + texts[i].innerHTML);
        }
    }
}