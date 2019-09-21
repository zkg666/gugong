   //封装成一个函数
    //element：给哪个哪个标签 哪个元素调用  x : 开始位置  y : 结束位置 step:每次移动多少  time :间隔时间是多少

    var timeId =null;
    function annimation(element,x,y,step,time) {
        //4.要是多次点击都从头开始 ，可以用dom.offsetleft解决；
        x = element.offsetLeft;
        if(x>y) {
            step=-Math.abs(step);
        }

if(element.timeId) {
      //2.先把定时器清理掉 
      clearInterval(element.timeId);
      element.timeId = null;
  }


  element.timeId=setInterval(function(){

      if(Math.abs(x-y)<=Math.abs(step)) {
          x=y;
      clearInterval(element.timeId);
      }
      else {
          x= x+step;
         
      }
      element.style.left=x+'px';   //1.left 必须要在定位中使用
  
  },time);

}