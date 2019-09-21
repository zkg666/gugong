  //  导航栏
  var btn=document.querySelector('.nav ul li:nth-child(7) a');
  var search=document.querySelector('.sousuokuang');
  var flag=true;
  (function(){
    btn.onclick=function(){   
    if(flag){
        search.style.display='block';
        flag=false; 
    }else{
        search.style.display='none';
        flag=true;
    }
  }
  })();
  //导航啦的下拉列表
var bottom_list0 = document.querySelector('.bottom_list0');
var bottom_list1 = document.querySelector('.bottom_list1');
var li1 = document.querySelector('.three');
var li2 = document.querySelector('.four');
//获取下拉菜单的li元素
var bottom_li = document.querySelectorAll('.bottom_list li');
// 鼠标进入显示
li1.onmouseenter=function(){
    bottom_list0.style.display='block';
    for(var i=0;i<bottom_li.length;i++){
        bottom_li[i].onmouseenter=function(){
            this.className='active';
            this.children[0].style.color='red';          
        }
        bottom_li[i].onmouseleave=function(){
            this.className='';
            this.children[0].style.color='';   
        }
    }
}
//鼠标离开隐藏
li1.onmouseleave=function(){
    bottom_list0.style.display='none';
}
// 鼠标进入显示
li2.onmouseenter=function(){
    bottom_list1.style.display='block';
    for(var i=0;i<bottom_li.length;i++){
        bottom_li[i].onmouseenter=function(){
            this.className='active';
            this.children[0].style.color='red';          
        }
        bottom_li[i].onmouseleave=function(){
            this.className='';
            this.children[0].style.color='';   
        }
    }
}
//鼠标离开隐藏
li2.onmouseleave=function(){
    bottom_list1.style.display='none';
}


//旁边的小导航滚动事件
var tips = document.querySelector('.tips');
var top1 = document.querySelector('.top');
$(window).scroll(function(){
    var t = $('html').scrollTop();
    if( t >= 300 ) {
        top1.style.display = 'block';
    } else {
        top1.style.display = 'none';
    }
})
$('.top').click(function(){
    $('html').animate({
        scrollTop:0
    },1000)
})



var erweima=document.querySelector('.erweima');
 var center=document.querySelector('.center');
    center.onclick=function(){
    erweima.classList.toggle('active1');
    }
    center.onmouseleave=function(){
    erweima.style.opacity=0.5; 
    }
    center.onmouseenter=function(){
    erweima.style.opacity=1;
    }
    erweima.onmouseenter=function(){
    erweima.style.opacity=1;
    }
    erweima.onmouseleave=function(){
    erweima.style.opacity=0.5;
    }
    

    // 底部
    var relink=document.querySelector(' .relink');
    var relink_ul=document.querySelector(' .relink ul');
 
    relink.onmouseenter=function(){
        relink_ul.style.display='block';
    }
    relink.onmouseleave=function(){
        relink_ul.style.display='none';
    }

    // 弹框
    var zhezhao=document.querySelector('.zhezhao');
    var tanchaung=document.querySelector('#kaishi');
    tanchaung.onclick=function(){
        zhezhao.style.display='block';
    }
    var guanbi=document.querySelector('#guanbi');
    guanbi.onclick=function(){
        zhezhao.style.display='none';
    }