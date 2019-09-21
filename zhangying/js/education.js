$(function(){
    //更多教育信息特效
    $('.test1').hover(function () {
              $(this).find('.test2').animate({
                      strokeDashoffset:-860
                   });
               }, function () {
                   $(this).find('.test2').animate({
                       strokeDashoffset:0
                   });         
               });
      
         //按钮切换颜色
        $('.lb_right').click(function(){
            $('.dian2').addClass('dian_circle').siblings().removeClass('dian_circle')
        //滑动4
        $('#dong4').css({
            opacity: 1,
            top : 520
        });
         //滑动5
         $('#dong5').css({
            opacity: 1,
            left : 60
        });
        //滑动6
        $('#dong6').css({
            transform: 'scale(1)'
        })
        });

        $('.lb_left').click(function(){
            $('.dian1').addClass('dian_circle').siblings().removeClass('dian_circle')
        });

        $('.lb_right1').click(function(){
            $('.dian2').addClass('dian_circle').siblings().removeClass('dian_circle')
                //滑动4
        $('#dong4').css({
            opacity: 1,
            top : 520
        });
         //滑动5
         $('#dong5').css({
            opacity: 1,
            left : 60
        });
        //滑动6
        $('#dong6').css({
            transform: 'scale(1)'
        })
        });

        $('.lb_left1').click(function(){
            $('.dian1').addClass('dian_circle').siblings().removeClass('dian_circle')
        });

        //滑动1
        //封装函数
        function lb_HD(){
            if($(document).scrollTop()>=$('.lb_content').offset().top){
                $('#dong1').css({
                    opacity:1,
                    left:10
                });
            }

        //滑动2
        if($(document).scrollTop()>=$('.lb_wz2').offset().top){
            $('#dong2').css({
                opacity:1,
                left:-10
            });
        }
        //滑动3
        if($(document).scrollTop()>=$('.lb_wz3').offset().top){
            $('#dong3').css({
               transform:'scale(1)'
               
            });
            }
            
        //故宫文创儿童中心的小女孩滑动
        if($(document).scrollTop()>=$('.lb_wz4').offset().top){
            $('#dong7').css({
               opacity:1,
               left:0
               
            });
        }
        }
        //调用一次函数
        lb_HD();
        //在滚动事件中再调用函数
        $(window).scroll(function(){
            lb_HD();
        })
})

