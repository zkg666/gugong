//故宫博物院总说部分
//li样式变换，tab栏切换（含排他思想）
$('.content1 .l_content1 li').click(function() {

    $(this).addClass('active').siblings().removeClass('active');
    $(this).children('div').css('display', 'block').parent().siblings().children('div').css('display', 'none');
    $('.content1 .r_content1 .item').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');

});

//院年编史部分
//鼠标淡入淡出
$('.content2 li').mouseenter(function(){
    $(this).stop().fadeTo(50, 0.8, 'linear');
});
$('.content2 li').mouseleave(function () {
    $(this).stop().fadeTo(50, 1, 'linear');
});

//tap栏样式变换
$('.content2 .tap li').click(function() {

    $(this).addClass('act').siblings().removeClass('act');
    $('.content2 .lists .list').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');

});

//向前向后按钮效果
//获取每个li元素的宽度
var liW = $('.tap_list li').outerWidth(true);
// $('.tap_list li').each(function(index,ele){
//     console.log($(ele).outerWidth(true));
// });

//获取li元素的长度(个数)
var len = $(".tap_list li").length;
//获取ul的总宽度
var ulW = $(".tap_list ul").width();
var current = $(".tap_list ul").offset().left; 

    var index = 0;
    $('.prev').click(function() {

        index++ ;  //索引自加
        moveLi(index);
    })
    $('.next').click(function() {

        index-- ; //索引自减
        moveLi(index);
    })
			
    function moveLi(index) {
        var move = -index * liW;
        $(".tap_list ul").offset({ left: move });
    }

//机构设置部分
//字体动画效果
$('.content3 .m_content3 li').hover(function () {
    $(this).children('a').stop().animate({
         fontSize:'18px'
    },50,'linear');
}, function () {
    $(this).children('a').stop().animate({
         fontSize:'16px'
    },50,'linear');         
});

$('.content3 .m_content3 li').click(function(){
    $(this).parents('.lbs').siblings().slideDown(500);
});

$('.m_content3 .pop span').click(function(){
    $(this).parent().slideUp(500);
});


//故宫资讯部分
//自动轮播图
//点击图下部小龙图标，对应的图片显示，并更改图标的样式
// $('.content4 .l_content4 .dotted span').click(function() {
//     $(this).addClass('special').siblings().removeClass('special');
//     $('.content4 .l_content4 .img_list li').eq($(this).index()).show().siblings().hide();
// });

//鼠标淡入淡出
$('.r_content4 .list li').hover(function(){
    $(this).css('opacity',0.8);
},function(){
    $(this).css('opacity',1);
});

//“更多”部分四周鼠标进入动画  
// $('.test1').hover(function () {
//     $(this).find('.test2').animate({
//           strokeDashoffset:-860
//     });
// }, function () {
//     $(this).find('.test2').animate({
//           strokeDashoffset:0
//     });         
// });