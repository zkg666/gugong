var timeid = null;
function animation(element, current, target, step,time) {
    //current位置等于当前元素的位置
    current = element.offsetTop;
    if(element.timeid) {
        //将已经存在的定时器清掉
        clearInterval(element.timeid);
        element.timeid = null;
    }
    element.timeid = setInterval(function(){
        //如果移动到了目标位置，那么就停止累加，同时要停止定时器
        if(current > target) {
            step = -Math.abs(step);
        }
        if(Math.abs(current-target) <= Math.abs(step)) {
            current = target;
            clearInterval(element.timeid);
        }else {
            current += step;
        }
        //将值赋值给element
        element.style.top = current +'px';
    },time)
}