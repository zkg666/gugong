$(function () {
    var user = {};
    //  完成注册的点击效果
    $('.w-2').hover(function () {
        $('path').stop().animate({
            strokeDashoffset: -980
        }, 500);
    }, function () {
        $('path').stop().animate({
            strokeDashoffset: 0
        }, 500);
    });

    // 用户名判断
    $('.input-1 input').focusin(function () {
        $(this).next().find('i').html("用户名可包含大写、小写英文字母，数字，长度为2至10位");
    });
    $('.input-1 input').focusout(function () {
        reg = /^[A-Za-z0-9]{2,10}$/;
        if ($(this).val() == "") {
            $(this).removeClass("correctInput");
            $(this).addClass("errorInput");
            $(this).next().find('i').html("用户名不能为空！");
        } else if (!reg.test($('.input-1 input').val())) {
            $(this).removeClass("correctInput");
            $(this).addClass("errorInput");
            $(this).next().find('i').html("用户名不符合规范！");
        } else {
            $(this).addClass("correctInput");
            $(this).removeClass("errorInput");
            $(this).next().find('i').empty();
            user.uname = $(this).val();
        }
    });

    // 密码判断
    $('.input-2 input').focusin(function () {
        $(this).next().find('i').html("密码可包含大写、小写英文字母，数字，长度为6至16位");
    });
    $('.input-2 input').focusout(function () {
        reg = /^[A-Za-z0-9]{6,16}$/;
        if ($(this).val() == "") {
            $(this).removeClass("correctInput");
            $(this).addClass("errorInput");
            $(this).next().find('i').html("密码不能为空！");
        } else if (!reg.test($('.input-2 input').val())) {
            $(this).removeClass("correctInput");
            $(this).addClass("errorInput");
            $(this).next().find('i').html("密码不符合规范！");
        } else {
            $(this).addClass("correctInput");
            $(this).removeClass("errorInput");
            $(this).next().find('i').empty();
            user.pwd = $(this).val();
        }
    });

    // 密码确认判断
    $('.input-3 input').focusout(function () {
        if ($(this).val() == $('.input-2 input').val() && $('.input-2 input').hasClass('correctInput')) {
            $(this).addClass('correctInput');
            $(this).next().html('');
            $(this).removeClass('errorInput');
        } else {
            $(this).next().html($('<i>两次输入的密码不一致</i>'));
            $(this).addClass('errorInput');
            $(this).removeClass('correctInput');
        }
    });

    // 手机号判断
    $('.input-4 input').focusout(function () {
        phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if ($(this).val() == "") {
            $(this).removeClass("correctInput");
            $(this).addClass("errorInput");
            $(this).next().html($("<i>手机号码不能为空!</i>"));
            return;
        } else if (!phoneReg.test($(this).val())) {
            $(this).removeClass("correctInput");
            $(this).addClass("errorInput");
            $(this).next().html($("<i>请输入正确的手机号码!</i>"));
        } else {
            $(this).removeClass("errorInput");
            $(this).addClass("correctInput");
            $(this).next().empty();
            user.phone = $(this).val();
        }
    });

    // 邮箱判断
    $('.input-5 input').focusout(function () {
        emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.com)+/;
        if ($(this).val() == "") {
            $(this).removeClass("correctInput");
            $(this).addClass("errorInput");
            $(this).next().html($("<i>邮箱地址不能为空！</i>"));
        } else if (!emailReg.test($('.input-5 input').val())) {
            $(this).removeClass("correctInput");
            $(this).addClass("errorInput");
            $(this).next().html($("<i>邮箱不符合规范!</i>"));
        } else {
            $(this).addClass("correctInput");
            $(this).removeClass("errorInput");
            $(this).next().empty();
            user.email = $(this).val();
        }
    });

    // 确认邮箱判断

    $('.input-6 input').focusout(function () {
        if ($(this).val() == $('.input-5 input').val() && $('.input-5 input').hasClass('correctInput')) {
            $(this).addClass('correctInput');
            $(this).next().html('');
            $(this).removeClass('errorInput');
        } else {
            $(this).next().html($('<i>两次输入的邮箱地址不一致</i>'));
            $(this).addClass('errorInput');
            $(this).removeClass('correctInput');
        }
    });

    // 完成注册判断
    $('.w-2').click(function () {
        $('input').blur();
        if ($('.input-1 input').hasClass('correctInput') && $('.input-2 input').hasClass('correctInput') && $('.input-3 input').hasClass('correctInput') && $('.input-4 input').hasClass('correctInput') && $('.input-5 input').hasClass('correctInput') && $('.input-6 input').hasClass('correctInput') && $('.n2').prop('checked') == true && $('.n3').prop('checked') == true) {
            localStorage.setItem('infor',JSON.stringify(user));
            $('.tips').fadeIn();
            window.setTimeout(function () {
                location.href = "../login/index.html";
            },2000);

        }
    });
    $('#gogogo').click(function () {
        location.href = "../login/index.html";
    });
});