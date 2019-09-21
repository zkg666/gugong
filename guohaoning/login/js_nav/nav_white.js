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
        });