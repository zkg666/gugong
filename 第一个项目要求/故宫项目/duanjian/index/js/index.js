// 为导航栏注册鼠标事件
$(function () {
    // 为导航栏设置鼠标事件
    for (var i = 2; i <= 8; i++) {
        let li = '#li' + i;
        let box = '#box' + i;
        let tr = '#tr' + i;
        $(li).hover(function () {
            $('.nav_child public').hide();
            $('#ul_tr div').hide();
            $('#nav_child').show();
            $(tr).show();
            $(box).stop().slideDown();
        }, function () {
            $(tr).hide();
            $(box).hide();
        });
        $(box).hover(function () {
            $(tr).show();
            $(box).show();
        }, function () {
            $(tr).hide();
            $(box).hide();
        });
    }

    // 为登录图标注册鼠标事件
    $('#login_icon').hover(function () {
        $('#login').css('marginTop', '-20px');
        $('#login_box').stop().fadeIn();
    }, function () {
        $('#login').css('marginTop', '');
        $('#login_box').fadeOut();
    });

    $('#login_box').hover(function () {
        $(this).show();
    }, function () {
        $(this).stop().fadeOut();
    });

    // 为语言图标注册鼠标事件
    $('#zhong_icon').hover(function () {
        $('#zhong').css('marginTop', '-26px');
        $('#zhong_box').stop().fadeIn();
    }, function () {
        $('#zhong').css('marginTop', '');
        $('#zhong_box').stop().fadeOut();
    });

    // 为菜单图标注册鼠标事件
    $('#menu').hover(function () {
        this.style.marginTop = '-34px';
        $('#menu_box').stop().fadeIn();
    }, function () {
        this.style.marginTop = '';
        $('#menu_box').stop().fadeOut();
    });

    // 为菜单图标注册点击事件
    $('#menu_btn').click(function () {
        $('#nav_list').stop().fadeIn();
    });

    // 为菜单栏关闭按钮注册点击事件
    $('#close').click(function () {
        $('#nav_list').stop().fadeOut();
    });

    // 封装页面动画效果
    function animation() {
        // 判断当前元素到页面顶部的距离
        if ($('.w').offset().top - $('body,html').scrollTop() < 550) {
            // 右侧盒子首先出现
            $('#animate4,#animate5,#animate6').animate({
                opacity: 1,
                top: 0
            }, 800, 'linear');

            // 250ms后下一个盒子出现

            $(window).oneTime(250, function () {
                $('#animate7').animate({
                    opacity: 1,
                    top: 0
                }, 800, 'linear');
            });

            // 500ms后下一个盒子出现

            $(window).oneTime(500, function () {
                $('#animate1').animate({
                    opacity: 1,
                    top: 0
                }, 800, 'linear');
                // 时间出现动画效果
                $('#word1').animate({
                    opacity: 1,
                    right: 0
                }, 800, 'linear');

                $(window).oneTime(250, function () {
                    $('#word2').animate({
                        opacity: 1,
                        right: 0
                    }, 800, 'linear');
                });

                $(window).oneTime(500, function () {
                    $('#word3').animate({
                        opacity: 1,
                        right: 0
                    }, 800, 'linear');
                });

                $(window).oneTime(750, function () {
                    $('#word4').animate({
                        opacity: 1,
                        right: 0
                    }, 800, 'linear');
                });
            });

            // 600ms后下一个盒子出现

            $(window).oneTime(700, function () {
                $('#animate3').animate({
                    opacity: 1,
                    top: 50
                }, 800, 'linear');
            });

            // 750ms后下一个盒子出现

            $(window).oneTime(750, function () {
                $('#animate2').animate({
                    opacity: 1,
                    top: 0
                }, 800, 'linear');
            });
        }

    }
    // 封装计数功能函数
    function interval() {
        // 页面加载完毕先判断一次当前位置距离页面顶部的距离是否小于750
        if ($('.collect').offset().top - $('body,html').scrollTop() < 750) {
            // 初始化计数器
            var num = 0;
            // 设置计时器，每1ms执行一次，总共执行一次
            $('body').everyTime('1ms', function () {
                num = num * 1 + parseInt(1862690 / 600);
                var sum = '';
                if (num >= 1000 && num < 1000000) {
                    sum = parseInt(num / 1000) + ',' + (num % 1000);
                } else if (num >= 1000000) {
                    sum = parseInt(num / 1000000) + ',' + parseInt((num % 1000000) / 1000) + ',' + (num % 1000);
                } else {
                    sum = num;
                }
                if (num >= 1862690) {
                    sum = '1,862,690';
                    $('body').stopTime();
                }
                $('#count').text(sum);
            });
        }
    }
    // 页面加载时调用动画效果函数
    animation();
    // 为页面注册滚动事件
    $(window).scroll(function () {
        // 如果页面已经出现，则跳出函数
        if ($('#animate1').css('opacity') != '0') {
            return;
        }
        animation();
    });
    // 页面加载时调用计数函数
    interval();
    // 为页面注册滚动事件
    $(window).scroll(function () {
        // 如果计时器已经设置或已经结束，则跳出函数
        if ($('#count').text() != '0') {
            return;
        }
        interval();
    });
    // 封装sidebar动画效果
    function sidebar() {
        if ($('.right_box').offset().top <= $('body,html').scrollTop()) {
            $('.sidebar').fadeIn();
        } else {
            $('.sidebar').fadeOut();
        }
    }
    // 页面加载时调用sidebar动画效果函数
    sidebar();
    // 为页面注册滚动事件
    $(window).scroll(function () {
        sidebar();
    });
    // 为藏品盒子设置鼠标移入事件
    $('.collect .right_box>div').mouseenter(function (e) {
        // 思路：
        // 1. 先将整个盒子对角线连接分为四份
        // 2. 首先判断鼠标进入的坐标在“左上--右下”（a）对角线的上面还是下面
        // 3. 继续判断坐标位置是在“右上--左下”(b)对角线的上面还是下面
        // 4. 1. 如果坐标在a上b上，即鼠标位置到盒子左边的距离大于到上边的距离，
        //       且鼠标位置到盒子右边的距离大于到上边的距离，那么鼠标在该盒子上方的区域 
        //    2. 如果坐标在a上b下，即鼠标位置到盒子左边的距离大于到上边的距离，
        //       且鼠标位置到盒子右边的距离小于到上边的距离，那么鼠标在该盒子右方的区域
        //    3. 如果坐标在a下b下，即鼠标位置到盒子左边的距离小于到上边的距离，
        //       且鼠标位置到盒子右边的距离小于到上边的距离，那么鼠标在该盒子下方的区域
        //    4. 如果坐标在a下b上，即鼠标位置到盒子左边的距离小于到上边的距离，
        //       且鼠标位置到盒子右边的距离大于到上边的距离，那么鼠标在该盒子下方的区域

        // 鼠标到盒子左边的距离
        var x_left = e.pageX - $(this).offset().left;
        // 鼠标到盒子右边的距离
        var x_right = $(this).offset().left + $(this).width() - e.pageX;
        // 鼠标到盒子上边的距离
        var y = e.pageY - $(this).offset().top;
        // 清除现有样式
        $(this).find('.mask').prop('style', '');
        // 上方区域
        if (x_left > 0.83 * y && x_right > 0.83 * y) {
            $(this).find('.mask').css({
                'top': '-464px',
                'right': '0'
            });
            $(this).find('.mask').stop().animate({
                top: 0
            });
            // 右方区域
        } else if (x_left > 0.83 * y && x_right < 0.83 * y) {
            $(this).find('.mask').css({
                'top': '0',
                'right': '-386px'
            });
            $(this).find('.mask').stop().animate({
                right: 0
            });
            // 左方区域
        } else if (x_left < 0.83 * y && x_right > 0.83 * y) {
            $(this).find('.mask').css({
                'top': '0',
                'right': '386px'
            });
            $(this).find('.mask').stop().animate({
                right: 0
            });
            // 下方区域
        } else if (x_left < 0.83 * y && x_right < 0.83 * y) {
            $(this).find('.mask').css({
                'top': '464px',
                'right': '0'
            });
            $(this).find('.mask').stop().animate({
                top: 0
            });
        }
    });

    // 为藏品盒子设置鼠标移出事件
    $('.collect .right_box>div').mouseleave(function (e) {
        // 鼠标到盒子左边的距离
        var x_left = e.pageX - $(this).offset().left;
        // 鼠标到盒子右边的距离
        var x_right = $(this).offset().left + $(this).width() - e.pageX;
        // 鼠标到盒子上边的距离
        var y = e.pageY - $(this).offset().top;
        // 上方区域
        if (x_left > 0.83 * y && x_right > 0.83 * y) {
            $(this).find('.mask').stop().animate({
                top: -464
            });
            // 右方区域
        } else if (x_left > 0.83 * y && x_right < 0.83 * y) {
            $(this).find('.mask').stop().animate({
                right: -386
            });
            // 左方区域
        } else if (x_left < 0.83 * y && x_right > 0.83 * y) {
            $(this).find('.mask').stop().animate({
                right: 386
            });
            // 下方区域
        } else if (x_left < 0.83 * y && x_right < 0.83 * y) {
            $(this).find('.mask').stop().animate({
                top: 464
            });
        }

    });

    // 为list标签添加鼠标移入事件
    $('.list .public').mouseenter(function (e) {
        // 鼠标到盒子左边的距离
        var x_left = e.pageX - $(this).offset().left;
        // 鼠标到盒子右边的距离
        var x_right = $(this).offset().left + $(this).width() - e.pageX;
        // 鼠标到盒子上边的距离
        var y = e.pageY - $(this).offset().top;
        // 上方区域
        if (x_left > 1.12 * y && x_right > 1.12 * y) {
            $(this).find('.mask').css({
                'top': '-280px',
                'right': '0'
            });
            $(this).find('.mask').stop().animate({
                top: 0
            });
            // 右方区域
        } else if (x_left > 1.12 * y && x_right < 1.12 * y) {
            $(this).find('.mask').css({
                'top': '0',
                'right': '-314.41px'
            });
            $(this).find('.mask').stop().animate({
                right: 0
            });
            // 左方区域
        } else if (x_left < 1.12 * y && x_right > 1.12 * y) {
            $(this).find('.mask').css({
                'top': '0',
                'right': '314.41px'
            });
            $(this).find('.mask').stop().animate({
                right: 0
            });
            // 下方区域
        } else if (x_left < 1.12 * y && x_right < 1.12 * y) {
            $(this).find('.mask').css({
                'top': '280px',
                'right': '0'
            });
            $(this).find('.mask').stop().animate({
                top: 0
            });
        }
    });

    // 为list标签添加鼠标移出事件
    $('.list .public').mouseleave(function (e) {
        // 鼠标到盒子左边的距离
        var x_left = e.pageX - $(this).offset().left;
        // 鼠标到盒子右边的距离
        var x_right = $(this).offset().left + $(this).width() - e.pageX;
        // 鼠标到盒子上边的距离
        var y = e.pageY - $(this).offset().top;
        // 上方区域
        if (x_left > 1.12 * y && x_right > 1.12 * y) {
            $(this).find('.mask').stop().animate({
                top: -280
            });
            // 右方区域
        } else if (x_left > 1.12 * y && x_right < 1.12 * y) {
            $(this).find('.mask').stop().animate({
                right: -314.41
            });
            // 左方区域
        } else if (x_left < 1.12 * y && x_right > 1.12 * y) {
            $(this).find('.mask').stop().animate({
                right: 314.41
            });
            // 下方区域
        } else if (x_left < 1.12 * y && x_right < 1.12 * y) {
            $(this).find('.mask').stop().animate({
                top: 280
            });
        }

    });

    // 为sidebar返回顶部按钮注册点击事件
    $('#sidebar_top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);

    });

    // 为sidebar关闭按钮注册点击事件
    $('#sidebar_close').on('click', function () {
        if ($('.sidebar ul').css('height') == '0px') {
            $('.sidebar ul').animate({
                height: 252
            });
            $(this).prop('style', '');
            $(this).text('');
        } else {
            $('.sidebar ul').animate({
                height: 0
            });
            $(this).css('background', 'url("./img/sidebar_bg.png") no-repeat');
            $(this).text('导');
        }
    });
    // 换肤效果
    // 春天
    $('#spring').click(function () {
        $('.right_box1 .box1').css('background', 'url("./img/right_box1_bg1_spring.jpg")');
        $('.right_box1 .box2').css('background', 'url("./img/right_box1_bg2_spring.jpg")');
        $('.right_box1 .box3').css('background', 'url("./img/right_box1_bg3_spring.jpg")');
        $('.right_box2').css('background', 'url("./img/right_box2_bg_spring.jpg")');
        $('.left_box .box2 .left_b').css('background', 'url("./img/right_box1_bg3_spring.jpg")');
        $('.collect .left_box').css('background', 'url("./img/collect_bg_spring.jpg")');
        $('.collect .left_box .btn').css('background', 'url("./img/collect_btn_spring.png") no-repeat center');
        $('.activity .left_box').css('background', 'url("./img/activity_bg_spring.jpg")');
        $('.list .blank1 .img').children('img').prop('src', './img/list_blank1_bg1_spring.jpg')
        $('.list .blank2 .img').children('img').prop('src', './img/list_blank2_bg1_spring.jpg')
        $('.list .blank3 .img').children('img').prop('src', './img/list_blank3_bg1_spring.jpg')
        $('.list .blank4 .img').children('img').prop('src', './img/list_blank2_bg1_spring.jpg')
        $('.list .blank5 .img').children('img').prop('src', './img/list_blank3_bg1_spring.jpg')
        $('.list .mask').css('background', 'url("./img/right_box1_bg2_spring.jpg")');
        $('.sidebar .skin a').text('春');
    });
    // 夏天
    $('#summer').click(function () {
        $('.right_box1 .box1').css('background', 'url("./img/right_box1_bg1_summer.jpg")');
        $('.right_box1 .box2').css('background', 'url("./img/right_box1_bg2_summer.jpg")');
        $('.right_box1 .box3').css('background', 'url("./img/right_box1_bg3_summer.jpg")');
        $('.right_box2').css('background', 'url("./img/right_box2_bg_summer.jpg")');
        $('.left_box .box2 .left_b').css('background', 'url("./img/right_box1_bg3_summer.jpg")');
        $('.collect .left_box').css('background', 'url("./img/collect_bg_summer.jpg")');
        $('.collect .left_box .btn').css('background', 'url("./img/collect_btn_summer.png") no-repeat center');
        $('.activity .left_box').css('background', 'url("./img/activity_bg_summer.jpg")');
        $('.list .blank1 .img').children('img').prop('src', './img/list_blank1_bg1_summer.jpg')
        $('.list .blank2 .img').children('img').prop('src', './img/list_blank2_bg1_summer.jpg')
        $('.list .blank3 .img').children('img').prop('src', './img/list_blank3_bg1_summer.jpg')
        $('.list .blank4 .img').children('img').prop('src', './img/list_blank2_bg1_summer.jpg')
        $('.list .blank5 .img').children('img').prop('src', './img/list_blank3_bg1_summer.jpg')
        $('.list .mask').css('background', 'url("./img/right_box1_bg2_summer.jpg")');
        $('.sidebar .skin a').text('夏');
    });

    // 秋天
    $('#autumn').click(function () {
        $('.right_box1 .box1').css('background', 'url("./img/right_box1_bg1_autumn.jpg")');
        $('.right_box1 .box2').css('background', 'url("./img/right_box1_bg2_autumn.jpg")');
        $('.right_box1 .box3').css('background', 'url("./img/right_box1_bg3_autumn.jpg")');
        $('.right_box2').css('background', 'url("./img/right_box2_bg_autumn.jpg")');
        $('.left_box .box2 .left_b').css('background', 'url("./img/right_box1_bg2_autumn.jpg")');
        $('.collect .left_box').css('background', 'url("./img/collect_bg_autumn.jpg")');
        $('.collect .left_box .btn').css('background', 'url("./img/collect_btn_autumn.png") no-repeat center');
        $('.activity .left_box').css('background', 'url("./img/activity_bg_autumn.jpg")');
        $('.list .blank1 .img').children('img').prop('src', './img/list_blank1_bg1_summer.jpg')
        $('.list .blank2 .img').children('img').prop('src', './img/list_blank2_bg1_spring.jpg')
        $('.list .blank3 .img').children('img').prop('src', './img/list_blank3_bg1_summer.jpg')
        $('.list .blank4 .img').children('img').prop('src', './img/list_blank2_bg1_spring.jpg')
        $('.list .blank5 .img').children('img').prop('src', './img/list_blank3_bg1_summer.jpg')
        $('.list .mask').css('background', 'url("./img/right_box1_bg1_autumn.jpg")');
        $('.sidebar .skin a').text('秋');
    });

    // 冬天
    $('#winter').click(function () {
        $('.right_box1 .box1').css('background', 'url("./img/right_box1_bg1_winter.jpg")');
        $('.right_box1 .box2').css('background', 'url("./img/right_box1_bg2_winter.jpg")');
        $('.right_box1 .box3').css('background', 'url("./img/right_box1_bg3_winter.jpg")');
        $('.right_box2').css('background', 'url("./img/right_box2_bg_winter.jpg")');
        $('.left_box .box2 .left_b').css('background', 'url("./img/right_box1_bg2_winter.jpg")');
        $('.collect .left_box').css('background', 'url("./img/collect_bg_winter.jpg")');
        $('.collect .left_box .btn').css('background', 'url("./img/collect_btn_winter.png") no-repeat center');
        $('.activity .left_box').css('background', 'url("./img/activity_bg_winter.jpg")');
        $('.list .blank1 .img').children('img').prop('src', './img/list_blank1_bg1_winter.jpg')
        $('.list .blank2 .img').children('img').prop('src', './img/list_blank2_bg1_winter.jpg')
        $('.list .blank3 .img').children('img').prop('src', './img/list_blank3_bg1_winter.jpg')
        $('.list .blank4 .img').children('img').prop('src', './img/list_blank2_bg1_winter.jpg')
        $('.list .blank5 .img').children('img').prop('src', './img/list_blank3_bg1_winter.jpg')
        $('.list .mask').css('background', 'url("./img/right_box1_bg3_winter.jpg")');
        $('.sidebar .skin a').text('冬');
    });

    // 常规
    $('#normal').click(function () {
        $('.right_box1 .box1').css('background', '');
        $('.right_box1 .box2').css('background', '');
        $('.right_box1 .box3').css('background', '');
        $('.right_box2').css('background', '');
        $('.left_box .box2 .left_b').css('background', '');
        $('.collect .left_box').css('background', '');
        $('.collect .left_box .btn').css('background', '');
        $('.activity .left_box').css('background', '');
        $('.list .blank1 .img').children('img').prop('src', './img/list_blank1_bg1.jpg')
        $('.list .blank2 .img').children('img').prop('src', './img/list_blank2_bg1.jpg')
        $('.list .blank3 .img').children('img').prop('src', './img/list_blank3_bg1.jpg')
        $('.list .blank4 .img').children('img').prop('src', './img/list_blank2_bg1.jpg')
        $('.list .blank5 .img').children('img').prop('src', './img/list_blank3_bg1.jpg')
        $('.list .mask').css('background', '');
        $('.sidebar .skin a').text('常');
    });
});