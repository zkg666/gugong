// 鼠标进入小图片效果
$('.img_content li').mouseenter(function(){
    $(this).find('.fs_img').css({
        animationDuration:'0.2s'
    })
    $(this).find('.bot_img2').show().parent().siblings().show();

})
// 鼠标离开小图片效果
$('.img_content li').mouseleave(function(){
    $(this).find('.fs_img').css({
        animationDuration:'4s'
    })
    $(this).find('.bot_img2').hide().parent().siblings().hide();
})
//鼠标进入大图片效果
$('.img_content li').mouseenter(function(){
    $(this).find('.fs_maximg').css({
        animationDuration:'0.2s'
    })
    $(this).find('.bot_mimg2').show().parent().siblings().show();

})
//鼠标离开大图片效果
$('.img_content li').mouseleave(function(){
    $(this).find('.fs_maximg').css({
        animationDuration:'4s'
    })
    $(this).find('.bot_mimg2').hide().parent().siblings().hide();  
})
var lis = document.querySelectorAll('.img_content li');

// 点击li出现覆盖的盒子
var body = document.querySelector('html');
for(var i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        cover.style.display='block';
    }
}
//点击每一个显示不同的覆盖盒子
for(var i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        var covername = this.dataset.covername;
        var div1 = document.getElementById(covername);
        div1.style.display='block';
        
        
    }
}

//点击覆盖盒子里的a标签 .close
$('.close').click(function(){
    $(this).parents('.cover').hide();
})
// 覆盖盒子左侧向左滑动
$('.left_btn').click(function(){
    $(this).parents('.left_cbox').css('left','-440px');
    $(this).hide().siblings().show();
})
//点击向右滑动
$('.right_btn').click(function(){
    $(this).parents('.left_cbox').css('left','0');
    $(this).hide().siblings('.left_btn').show();
})


//  点击nav里的li改变主体图片内容
var navli = document.querySelectorAll('.nav1 li');
var arr=[];
for(var i=0;i<navli.length;i++){
    navli[i].onclick=function(){
        //再次点击回复原样
        if(this.style.backgroundColor == 'red'){
            //显示原来的样式
            this.style.backgroundColor = '#EAE3D6';
            this.firstElementChild.style.color= '#656663';
            //让全部图片显示
            var imgall = document.querySelectorAll('.img_content li')
            for(var j=0;j<imgall.length;j++){
                imgall[j].style.display = 'block';
            }     
        }else{//点击之后加样式
            //导航栏排他
           for(var n=0;n<navli.length;n++){
               navli[n].style.backgroundColor = '#EAE3D6';
               navli[n].firstElementChild.style.color= '#656663';
           }
        this.style.backgroundColor = 'red';
        this.firstElementChild.style.color= '#fff';
        
            //加入相关图片li
           //排他
           var imgall = document.querySelectorAll('.img_content li')
        
           for(var j=0;j<imgall.length;j++){
               imgall[j].style.display = 'none';
           }

           var imgli = document.querySelectorAll('.'+this.dataset.navname);
           console.log(imgli);
           for(var i=0;i<imgli.length;i++){
               imgli[i].style.display = 'block';
           }
    


        }  
    }
}




    



    


































// 给第一次刷新的网页设置样式
