$(function(){
    $(window).scroll(function(){    
        if($(window).scrollTop() >= 230){
            $(".gs").addClass('sc1');
        }
        if($(window).scrollTop() >= 550){
            $(".people").addClass('psc1');
        }
        if($(window).scrollTop() >= 1150){
            $(".lia").addClass('at');
        }
        if($(window).scrollTop() >= 1400){
            $(".imperial img").addClass('isc1');
            $(".ancient_1").addClass('asc1');
        }
        if($(window).scrollTop() >= 1700){
            $(".history_tip img").addClass('hsc1');
            
        }
        if($(window).scrollTop() >= 2600){
            $(".hc_l img").addClass('csc'); 
        }
        
    }); 
})



 $('.test1').hover(function () {
    $(this).find('.test2').animate({
            strokeDashoffset:-860
         });
     }, function () {
         $(this).find('.test2').animate({
             strokeDashoffset:0
         });         
     });
 $('.history_l').hover(function () {
    $(this).find('.his1').animate({
           strokeDashoffset:-860
        });
    }, function () {
        $(this).find('.his1').animate({
            strokeDashoffset:0
        });         
    });


//轮播
//获取两个按钮
var h_l = document.querySelector('.dotted a:nth-child(1)');
var h_r = document.querySelector('.dotted a:nth-child(2)');
var ul = document.querySelector('.hc_r ul');
var dotted = document.querySelector('.dotted');
//点击点的页面
var index = 0;
h_r.onclick = function() {
    if(index == 2){
        index = 0;
        ul.style.left = 0;
    }
    index++;
    animation(ul, ul.offsetLeft, -index*820,50, 20);
    dottedMove();
   
}
h_l.onclick = function() {
    if(index == 0){
        index = 2;
        ul.style.left = -index*820+'px';
    }
    index--;
    animation(ul, ul.offsetLeft, -index*820,50, 20);
    dottedMove();
   
}

function dottedMove() {
    for(var i = 0; i < dotted.children.length; i++) {
         dotted.children[i].className = '';
     }
     if(index == 2) {
        dotted.children[0].className = 'now';
     }else {
        dotted.children[index].className = 'now';
     }
  }



//自动播放
var hc_r = document.querySelector('.hc_r');

hc_r.onmouseenter = function() {
    clearInterval(id);
}

hc_r.onmouseleave = function() {
    autoPlay();
}

var id = null;

function autoPlay() {
    id = setInterval(function(){
        h_r.click();
    },2000)
}

autoPlay();

 //将第一个li动态的复制到ul的末尾
var newNode = ul.firstElementChild.cloneNode(true); 
ul.appendChild(newNode);

