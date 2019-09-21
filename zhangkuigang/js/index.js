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
//获取轮播图中的ul
var ul = document.querySelector('.topbg ul');
var li = document.querySelectorAll('.topbg ul li');
var list_box = document.querySelector('.list_box');
//获取动画图片
//第一个图片中的动画
var img_44 = document.querySelector('.img_44');
var img_42 = document.querySelector('.img_42');
var img_43 = document.querySelector('.img_43');
var img_45 = document.querySelector('.img_45');
var img_444 = document.querySelector('.img_444');
var img_422 = document.querySelector('.img_422');
var img_433 = document.querySelector('.img_433');
var img_455 = document.querySelector('.img_455');
//第二个图片中的动画
var img_33 = document.querySelector('.img_33');
var img_34 = document.querySelector('.img_34');
var img_35 = document.querySelector('.img_35');
var img_36 = document.querySelector('.img_36');
var img_31 = document.querySelector('.img_31');
//第三张图的动画
var img_23 = document.querySelector('.img_23');
var img_21 = document.querySelector('.img_21');
var img_24 = document.querySelector('.img_24');
// 第四张图的动画
var img_12 = document.querySelector('.img_12');
var img_11 = document.querySelector('.img_11');
var img_14 = document.querySelector('.img_14');
var img_13 = document.querySelector('.img_13');
//获取盒子的高度
var list_boxh = list_box.offsetHeight;
//定义一个索引
var index = 0;
setInterval(function(){        
    if(index==4){
        index=0;
        ul.style.top=0;
        img_444.classList.remove('aimg_44');
        img_422.classList.remove('aimg_42');
        img_433.classList.remove('aimg_43');
        img_455.classList.remove('aimg_45');
        img_33.classList.remove('aimg_33');
        img_34.classList.remove('aimg_34');
        img_35.classList.remove('aimg_35');
        img_36.classList.remove('aimg_36');
        img_31.classList.remove('aimg_31');
        img_23.classList.remove('aimg_23');
        img_21.classList.remove('aimg_21');
        img_24.classList.remove('aimg_24');
        img_12.classList.remove('aimg_12');
        img_11.classList.remove('aimg_11');
        img_14.classList.remove('aimg_14');
        img_13.classList.remove('aimg_13');
    }
    if(index==3){
        img_444.classList.add('aimg_44');
        img_422.classList.add('aimg_42');
        img_433.classList.add('aimg_43');
        img_455.classList.add('aimg_45');
        img_33.classList.remove('aimg_33');
        img_34.classList.remove('aimg_34');
        img_35.classList.remove('aimg_35');
        img_36.classList.remove('aimg_36');
        img_31.classList.remove('aimg_31');
        img_23.classList.remove('aimg_23');
        img_21.classList.remove('aimg_21');
        img_24.classList.remove('aimg_24');
        img_12.classList.remove('aimg_12');
        img_11.classList.remove('aimg_11');
        img_14.classList.remove('aimg_14');
        img_13.classList.remove('aimg_13');
    }
    if(index==2){
        img_444.classList.remove('aimg_44');
        img_422.classList.remove('aimg_42');
        img_433.classList.remove('aimg_43');
        img_455.classList.remove('aimg_45');
        img_33.classList.remove('aimg_33');
        img_34.classList.remove('aimg_34');
        img_35.classList.remove('aimg_35');
        img_36.classList.remove('aimg_36');
        img_31.classList.remove('aimg_31');
        img_23.classList.remove('aimg_23');
        img_21.classList.remove('aimg_21');
        img_24.classList.remove('aimg_24');
        img_12.classList.add('aimg_12');
        img_11.classList.add('aimg_11');
        img_14.classList.add('aimg_14');
        img_13.classList.add('aimg_13');
    }
    if(index==1){
        img_444.classList.remove('aimg_44');
        img_422.classList.remove('aimg_42');
        img_433.classList.remove('aimg_43');
        img_455.classList.remove('aimg_45');
        img_33.classList.remove('aimg_33');
        img_34.classList.remove('aimg_34');
        img_35.classList.remove('aimg_35');
        img_36.classList.remove('aimg_36');
        img_31.classList.remove('aimg_31');
        img_23.classList.add('aimg_23');
        img_21.classList.add('aimg_21');
        img_24.classList.add('aimg_24');
        img_12.classList.remove('aimg_12');
        img_11.classList.remove('aimg_11');
        img_14.classList.remove('aimg_14');
        img_13.classList.remove('aimg_13');
    }
    if(index==0){
        img_444.classList.remove('aimg_44');
        img_422.classList.remove('aimg_42');
        img_433.classList.remove('aimg_43');
        img_455.classList.remove('aimg_45');
        img_33.classList.add('aimg_33');
        img_34.classList.add('aimg_34');
        img_35.classList.add('aimg_35');
        img_36.classList.add('aimg_36');
        img_31.classList.add('aimg_31');
        img_23.classList.remove('aimg_23');
        img_21.classList.remove('aimg_21');
        img_24.classList.remove('aimg_24');
        img_12.classList.remove('aimg_12');
        img_11.classList.remove('aimg_11');
        img_14.classList.remove('aimg_14');
        img_13.classList.remove('aimg_13');
    }
    index++;
    //调用动画
    
    animation(ul,ul.offsetTop,-list_boxh*index,50,20);
    gety();

},5000)
//轮播图小点点-.-
var pub = document.querySelectorAll('.pub0');
var dot1 = document.querySelector('.dot1');
var dot2 = document.querySelector('.dot2');
var dot3 = document.querySelector('.dot3');
var dot4 = document.querySelector('.dot4');
img_44.classList.add('aimg_44');
img_42.classList.add('aimg_42');
img_43.classList.add('aimg_43');
img_45.classList.add('aimg_45');
dot1.onclick=function(){
    for(var j=0;j<pub.length;j++){
        pub[j].classList.remove('dot_active');
    }
    this.classList.add('dot_active'); 
    animation(ul,ul.offsetTop,-list_boxh*0,50,20);
    img_44.classList.add('aimg_44');
    img_42.classList.add('aimg_42');
    img_43.classList.add('aimg_43');
    img_45.classList.add('aimg_45');

    img_33.classList.remove('aimg_33');
    img_34.classList.remove('aimg_34');
    img_35.classList.remove('aimg_35');
    img_36.classList.remove('aimg_36');
    img_31.classList.remove('aimg_31');

    img_23.classList.remove('aimg_23');
    img_21.classList.remove('aimg_21');
    img_24.classList.remove('aimg_24');

    img_12.classList.remove('aimg_12');
    img_11.classList.remove('aimg_11');
    img_14.classList.remove('aimg_14');
    img_13.classList.remove('aimg_13');
    index=0;
}
dot2.onclick=function(){
    for(var j=0;j<pub.length;j++){
        pub[j].classList.remove('dot_active');
    }
    this.classList.add('dot_active'); 
    animation(ul,ul.offsetTop,-list_boxh*1,50,20);
    img_44.classList.remove('aimg_44');
    img_42.classList.remove('aimg_42');
    img_43.classList.remove('aimg_43');
    img_45.classList.remove('aimg_45');

    img_33.classList.add('aimg_33');
    img_34.classList.add('aimg_34');
    img_35.classList.add('aimg_35');
    img_36.classList.add('aimg_36');
    img_31.classList.add('aimg_31');

    img_23.classList.remove('aimg_23');
    img_21.classList.remove('aimg_21');
    img_24.classList.remove('aimg_24');

    img_12.classList.remove('aimg_12');
    img_11.classList.remove('aimg_11');
    img_14.classList.remove('aimg_14');
    img_13.classList.remove('aimg_13');
    index=1;
}
dot3.onclick=function(){
    for(var j=0;j<pub.length;j++){
        pub[j].classList.remove('dot_active');
    }
    this.classList.add('dot_active'); 
    animation(ul,ul.offsetTop,-list_boxh*2,50,20);
    img_44.classList.remove('aimg_44');
    img_42.classList.remove('aimg_42');
    img_43.classList.remove('aimg_43');
    img_45.classList.remove('aimg_45');
    
    img_33.classList.remove('aimg_33');
    img_34.classList.remove('aimg_34');
    img_35.classList.remove('aimg_35');
    img_36.classList.remove('aimg_36');
    img_31.classList.remove('aimg_31');

    img_23.classList.add('aimg_23');
    img_21.classList.add('aimg_21');
    img_24.classList.add('aimg_24');

    img_12.classList.remove('aimg_12');
    img_11.classList.remove('aimg_11');
    img_14.classList.remove('aimg_14');
    img_13.classList.remove('aimg_13');
    index=2;
}
dot4.onclick=function(){
    for(var j=0;j<pub.length;j++){
        pub[j].classList.remove('dot_active');
    }
    this.classList.add('dot_active'); 
    animation(ul,ul.offsetTop,-list_boxh*3,50,20);
    img_44.classList.remove('aimg_44');
    img_42.classList.remove('aimg_42');
    img_43.classList.remove('aimg_43');
    img_45.classList.remove('aimg_45');
    
    img_33.classList.remove('aimg_33');
    img_34.classList.remove('aimg_34');
    img_35.classList.remove('aimg_35');
    img_36.classList.remove('aimg_36');
    img_31.classList.remove('aimg_31');

    img_23.classList.remove('aimg_23');
    img_21.classList.remove('aimg_21');
    img_24.classList.remove('aimg_24');

    img_12.classList.add('aimg_12');
    img_11.classList.add('aimg_11');
    img_14.classList.add('aimg_14');
    img_13.classList.add('aimg_13');
    index=3;
}
// 封装动画的样式
// 封装小点点的样式
function gety(){
    for(var i = 0 ;i<pub.length;i++){ 
        pub[i].classList.remove('dot_active');
    }
    if(index==4){
        pub[0].classList.add('dot_active');
    }else{
        pub[index].classList.add('dot_active');
    }
}
//旁边的小导航滚动事件
var tips = document.querySelector('.tips');
var top1 = document.querySelector('.top');
window.onscroll = function(){
    //获取页面滚动的距离
    var t = document.documentElement.scrollTop;
    if( t >= 300 ) {
        top1.style.display = 'block';
    } else {
        top1.style.display = 'none';
    }
    top1.onclick=function(){
        timeid=setInterval(function(){ 
            var t = document.documentElement.scrollTop;
            document.documentElement.scrollTop=t-t/10;
            if(document.documentElement.scrollTop==0){
                clearInterval(timeid);
            }
        },10)  
        // 节流bug没有解决-.-
    }
}
//果冻获取下面的文字
var lis = document.querySelectorAll('.tale li');

for(var i=0;i<lis.length;i++){
    lis[i].onmouseenter=function(){
        this.children[0].children[1].style.color='red';
    }
    lis[i].onmouseleave=function(){
        this.children[0].children[1].style.color='';
    }
}
var erweima=document.querySelector('.erweima');
var center=document.querySelector('.center');
var body=document.querySelector('body');
center.onclick=function(){
    erweima.classList.toggle('active');
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
//底部
var relink=document.querySelector(' .relink');
    var relink_ul=document.querySelector(' .relink ul');
 
    relink.onmouseenter=function(){
        relink_ul.style.display='block';
    }
    relink.onmouseleave=function(){
        relink_ul.style.display='none';
    }
