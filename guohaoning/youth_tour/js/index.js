// <!-- 顶部导航栏js部分 -->
var btn = document.querySelector('.nav ul li:nth-child(7) a');
var search = document.querySelector('.sousuokuang');
var flag = true;
(function () {
    btn.onclick = function () {
        if (flag) {
            search.style.display = 'block';
            flag = false;
        } else {
            search.style.display = 'none';
            flag = true;
        }
    }
})();

{
    /* 导航啦的下拉列表 */ }
var bottom_list0 = document.querySelector('.bottom_list0');
var bottom_list1 = document.querySelector('.bottom_list1');
var li1 = document.querySelector('.three');
var li2 = document.querySelector('.four'); {
    /* //获取下拉菜单的li元素 */ }
var bottom_li = document.querySelectorAll('.bottom_list li'); {
    /* // 鼠标进入显示 */ }
li1.onmouseenter = function () {
    bottom_list0.style.display = 'block';
    for (var i = 0; i < bottom_li.length; i++) {
        bottom_li[i].onmouseenter = function () {
            this.className = 'active';
            this.children[0].style.color = 'red';
        }
        bottom_li[i].onmouseleave = function () {
            this.className = '';
            this.children[0].style.color = '';
        }
    }
}
//鼠标离开隐藏
li1.onmouseleave = function () {
    bottom_list0.style.display = 'none';
}
// 鼠标进入显示
li2.onmouseenter = function () {
    bottom_list1.style.display = 'block';
    for (var i = 0; i < bottom_li.length; i++) {
        bottom_li[i].onmouseenter = function () {
            this.className = 'active';
            this.children[0].style.color = 'red';
        }
        bottom_li[i].onmouseleave = function () {
            this.className = '';
            this.children[0].style.color = '';
        }
    }
}
//鼠标离开隐藏
li2.onmouseleave = function () {
    bottom_list1.style.display = 'none';
}



// jq区域
//右侧盒子效果
window.onscroll = function () {
    var num = $("html").scrollTop();
    if (num >= 500) {
        $("#lis").stop().fadeIn();
    } else {
        $("#lis").stop().fadeOut();
    }
    $("#lis").click(function () {
        $("html").stop().animate({
            scrollTop: 0
        });
    });
};

// jq切换效果区域

$(".bgi2 li").click(function () {
    $(".w").children('div').hide();
    $(".bgi2 li").prop("class", "");
    $(".bgi2 li").find("a").prop("class", "");
    var arr = $(this).attr("data-n");
    $(this).prop("class", "bg_selected");
    $("#" + arr).show();
    $(this).find("a").prop("class", arr);
});

$(".bgi2 li:first-child a").prop("class","n1");





// 轮播图

var ul = document.querySelector(".bb ul");
var array = document.querySelectorAll(".uls li");
for (var i = 0; i < array.length; i++) {
    array[i].onclick = function () {
        var num = this.getAttribute('num');
        animation(ul, 0, -num * 1000, 60, 20);
    }
}