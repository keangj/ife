// 跨浏览器的事件处理函数 js高程第二版353页。
// addHandler()方法接受3个参数：要操作的元素、事件名称和事件处理程序函数。
// 例：EventUtil.addHandler(btn, "click", handler);
//     EventUtil.removeHandler(btn, "click", handler);
var EventUtil = {
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);  //IE11已不再支持，兼容IE8及以下。
        } else {
            element["on" + type] = handler;
        }
    },//  注意这里有个 “,”。
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
// 跨浏览器事件对象;
    //取得event对象。
    getEvent: function(event) {
        return event ? event : window.event;
    },
    // 取得事件的目标。
    getTarget: function(event) {
        return event.tatget || event.srcElement;
    },
    // 取消事件的默认行为。
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnVaule = false;
        }
    },
    // 取消事件的进一步捕获或冒泡。
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBunnle = true;
        }
    }
}