// 专家名录人名列表
// 右侧按钮
$('.btns .r_btn').click(function(){   
    var n = $(this).siblings('span').text().substr(0,1); 
    n++;   
    if(n>3){
        n=1;
        $(this).siblings('span').text(n + ' / 3');
    }else{
        $(this).siblings('span').text(n + ' / 3'); 
    }

    $('.list2 .ul1').eq(n-1).stop().fadeIn().siblings().stop().fadeOut();   
})

// 左侧按钮
$('.btns .l_btn').click(function(){
    var n=$(this).siblings('span').text().substr(0,1);
    n--;
    if(n<1){
        n=3;
        $(this).siblings('span').text(n+' / 3');
    }else{
        $(this).siblings('span').text(n+' / 3');
    }

    $('.list2 .ul1').eq(n-1).stop().fadeIn().siblings().stop().fadeOut();
})
// **************************************************************************
// 文字下滑动画
var wzColor = "#517A9A"; //文字颜色
var newOne = 800;//文字出现间隔800毫秒
var wz = $("<div></div>").html("叁組").css({"position":"absolute","z-index":-10});
setInterval(function(){
    var dWidth =$('.content').width();//获取页面宽度
    var dHeight = $('.content').height();//获取页面高度
    var startLeft =(dWidth-200)*Math.random();//文字随机出现位置
    var endLeft =(dWidth-200)*Math.random();//文字随机结束位置
    var wzSize=100*Math.random();//文字大小
    var durationTime=9000+9000*Math.random();// 文字出现到消失的时间
    var startOpacity=0.7+0.3*Math.random();//出现时文字透明度
    var endOpacity=0.4+0.3*Math.random();//消失时文字透明度
    wz.clone().prependTo($(".content")).css({
        "left":startLeft,
        "top":"-400px",
        "opacity":startOpacity,
        "font-size":wzSize,
        "color":wzColor,
    }).stop().animate({
        "left":endLeft,
        "top":dHeight-wzSize+100,
        "opacity":endOpacity
    },durationTime,function(){
        $(this).remove();
    })
},newOne);

// *********************************************************************
// 学术活动右侧图片轮播图
var btn1=document.querySelector('.buttn1'); 
var btn2=document.querySelector('.buttn2');
var ul=document.querySelector('.lb_img ul');
var imgs=document.querySelector('.lb_img');

// 右侧按钮点击事件
var index=0;
btn1.onclick=function(){
    if(index==5){
        index=0;
        ul.style.left='0px';
    }
    index++;
    animation(ul,ul.offsetLeft,-index*436,20,20);
}
var newli=ul.firstElementChild.cloneNode(true);
ul.appendChild(newli);

// 左侧按钮点击事件
btn2.onclick=function(){
    if(index==0){
        index=5;
        ul.style.left=-index*436+'px';
    }
    index--;
    animation(ul,ul.offsetLeft,-index*436,20,20);
}
// 动画封装函数
var timeID=null;
function animation(element,current,target,step,time){
    current=element.offsetLeft;
    if(element.timeID){
        clearInterval(element.timeID)
        element.timeID=null;
    }
    element.timeID=setInterval(function(){
        if(current>target){
            step=-Math.abs(step);
        }
        if(Math.abs(current-target)<=Math.abs(step)){
            current=target;
            clearInterval(element.timeID);
        }else{
            current+=step;
        }
        element.style.left=current+'px';
    },time)

}

// 加定时器实现轮播效果并进行封装
var id=0;
function autoPlay(){
    id=setInterval(function(){
        btn1.click();
    },3000);
}
autoPlay();

// 鼠标悬停时轮播停止
var buttn=document.querySelector('.buttn');
imgs.onmouseenter=function(){
    clearInterval(id);
    this.style.cursor='pointer';
    buttn.style.display='block';
}
// 鼠标离开轮播开始
imgs.onmouseleave=function(){
    autoPlay();
    buttn.style.display='none';
}

// ***********************************************************************
// '更多'在鼠标悬停时的边框效果
$('.test1').hover(function () {
    $(this).find('.test2').animate({
        strokeDashoffset: -860
    },500);
}, function () {
    $(this).find('.test2').animate({
        strokeDashoffset: 0
    },500);
});


