// 透明度
$(function(){
   $('.kaifang').mouseenter(function(){
       $(this).css('opacity',0.5).siblings().css('opacity',1);   
   });
   $('.kaifang').mouseleave(function(){
       $(this).css('opacity',1);
   })
});

// 优惠
$(function(){
   $('.stu').click(function(){
       $('.tan').css('display','block');
       $('.cover').css('display','block');
   });
   $('.tan span').click(function(){
      $(this).parent().css('display','none')
      $('.cover').css('display','none');
   })
});

// tab切换
$(function(){
    $('.youhui .s2').click(function(){
        $('.youhui .s1').css('background-position','left top');
        $('.youhui .s2').css('background-position','right bottom');
        var i = $(this).index();
        $('.yh').eq(i).slideDown(600).siblings().hide();
    });
    $('.youhui .s1').click(function(){
        $('.youhui .s1').css('background-position','left bottom');
        $('.youhui .s2').css('background-position','right top');
        var i = $(this).index();
        $('.yh').eq(i).slideDown(600).siblings().hide();
    });
    
});

// 四个门切换
$(function(){
    $('.wumen span').click(function(){
        $(this).addClass('qie').siblings().removeClass('qie');
        var i = $(this).index();
        $('.wu').eq(i).slideDown(600).siblings().hide();
})
});
// 游览路线
$(function(){
    $('.things').mouseenter(function(){
        $(this).css('opacity',0.5).siblings().css('opacity',1);   
    });
    $('.things').mouseleave(function(){
        $(this).css('opacity',1);
    })
});
// 导览地图
$(function(){
    var n=1;
    $('.nav2 h2').click(function(){
        
        if(n%2==0){
          $('.nav3').hide(); 
          $('.nav4').show();
        }else{
           $(this).siblings('.nav3').show();
           $('.nav4').show(); 
        }
        n++;
    });

    $('.nav1 h1').click(function(){
        if(n%2==0){
            $(this).siblings('.item2').show();
          }else{
            $(this).siblings('.item2').hide(); 
          }
          n++;
    })
});
// 图片缩小
$(function(){
    $('.dianji').click(function(){
        $(this).siblings('.r_ditu').children('.zhongjian').css('width','570');
        // $('.you').show();
        $(this).hide();
        $('.xiangyou').show();
    })
});
// 两小时路线1
$(function(){
    $('.hour').click(function(){
        $('.zhongjian').css('width','570');
        $('.you').show();
        $('.dianji').hide();
        $('.xiangyou').show();
    })
});
// 向右回去
$(function(){
    $('.xiangyou').click(function(){
        $('.zhongjian').css('width','910');
        $(this).hide();
        $('.dianji').show();
        $('.you').hide();
    })
})
