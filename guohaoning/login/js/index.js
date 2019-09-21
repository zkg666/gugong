$(function () {
    // 获取本地存储的数据并转化为对象
    var obj = localStorage.getItem('infor');
    obj = JSON.parse(obj);
    // 获取对象中存储的用户名、手机号和密码
    var uname = obj.uname;
    var pwd = obj.pwd;
    var phone = obj.phone;
    var email = obj.email;
    // 为用户名注册焦点事件
    $('.box5 input').focusin(function () {
        $(this).val('');
        $('.box10').fadeOut();
    })
    // 为用户名注册失去焦点事件
    $('.box5 input').focusout(function () {
        // 判断用户名输入是否符合规范
        if ($(this).val() == "" || $(this).val() == "请输入您的账号") {
            $(this).addClass("errorInput");
            $(this).next().css("display", "block").html("账号不能为空！");
            $(this).val("请输入您的账号");
            return;
        } else {
            $(this).addClass("correctInput");
            $(this).removeClass("errorInput");
            $(this).next().empty();
        }
    });
    // 为密码输入框注册焦点事件
    $('.box6 input').focusin(function () {
        $('.box10').fadeOut();
        $(this).val('');
        $(this).prop('type', 'password');
    });
    // 为密码输入框注册失去焦点事件
    $('.box6 input').focusout(function () {
        if ($(this).val() == '') {
            $(this).prop('type', 'text');
            $(this).val('密码');
        }
        // 判断密码输入是否符合规范
        if ($(this).val() == "" || $(this).val() == "密码") {
            $(this).addClass("errorInput");
            $(this).next().css({
                display: 'block',
                left: -95
            }).html("密码不能为空！");
        } else {
            $(this).addClass("correctInput");
            $(this).removeClass("errorInput");
            $(this).next().empty();
        }
    });

    // 为验证码输入框注册焦点事件
    $('.box7 input').focusin(function () {
        $('.box10').fadeOut();
        $(this).val('');
    });

    // 为验证码输入框注册失去焦点事件
    $('.box7 input').focusout(function () {
        // 判断验证码输入是否正确
        if ($(this).val() == "") {
            $(this).addClass("errorInput");
            $(this).next().css({
                display: 'block',
                left: -120
            }).html("验证码不能为空！");
            $(this).val('验证码');
            return;
        } else if ($(this).val() != '0962') {
            $(this).addClass("errorInput");
            $(this).next().css({
                display: 'block',
                left: -120
            }).html("验证码输入错误！");
        } else {
            $(this).removeClass("errorInput");
            $(this).next().empty();
            $(this).addClass("correctInput");
        }

    });

    // 为登录按钮注册点击事件
    $('.box8').click(function () {
        // 判断用户名、密码、验证码输入是否符合规范
        if ($('.box5 input').hasClass('correctInput') && $('.box6 input').hasClass('correctInput') && $('.box7 input').hasClass('correctInput')) {
            // 判断用户名或手机号或密码是否存在
            if ($('.box5 input').val() == uname || $('.box5 input').val() == phone || $('.box5 input').val() == email) {
                // 判断密码是否正确
                if ($(".box6 input").val() == pwd) {
                    location.href = "../../duanjian/index/index.html";
                } else {
                    $('.box10').fadeIn();
                }
            } else {
                $('.box10').fadeIn();
            }


        }
    });

    $('#gogogo').click(function () {
        location.href = "../register/index.html";
    });
});