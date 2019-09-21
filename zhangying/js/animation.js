var timeID=null;
function animation(element,start,end,step,time){
    //始终保持开始位置和元素实际位置保持一致
   start=element.offsetLeft;
 if(element.timeID){
       //说明页面中已经有定时器，要立即清除定时器
       clearInterval(element.timeID);
       element.timeID=null;
   }
   element.timeID=setInterval(function(){
       if(start>end){
           step=-Math.abs(step);
       }
     if(Math.abs(start-end)<=Math.abs(step)){
         //如果到达终点，起始位置和目标位置相同
         start=end;
         clearInterval(element.timeID);
     }else{
         //一直累加
         start+=step;
     }       
     element.style.left=start+'px';
 },time)
}  