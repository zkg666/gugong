// document.querySelector('.map_content img').onmousedown = function(e){
//   var mouse_X = e.clientX - this.offsetLeft;
//   var mouse_y = e.clientY - this.offsetTop;
//   document.querySelector('.map_content').onmousemove = function(e) {
//       var x =  e.clientX - mouse_X;
//       var y = e.clientY - mouse_y;

//       document.querySelector('.map_content img').style.left = x +'px';
//       document.querySelector('.map_content img').style.left = y +'px';
//   }
// }
// document.querySelector('.map_content img').onmouseup = function() {
// document.querySelector('.map_content').onmousemove = null;

// }

//中心饕餮盒子
var b = document.querySelector('.w_box');
document.querySelector('#tao').onmousemove = function (e) {
  //获取鼠标当前的位置 < 元素距离页面左侧的位置+元素宽度的一半 图标朝左边
  n = e.clientX < b.offsetLeft + b.offsetWidth / 2;
  if (n) {
    this.className = 'tao_left';
    n = false;
  } else {
    //否则图标朝右边
    this.className = 'tao_right';
    n = true;
  }

  e.stopPropagation();
}

//设置中间饕餮区域

//设置一个定时器，当鼠标进入盒子的时候，定时器开启。
//定时器的功能是让元素旋转。
//思路：大盒子旋转多少度，里面的每一个小图片反方向旋转即可
var n = 0;
var imgs = document.querySelectorAll('.zhouwei img')
var timeID = null;

document.querySelector('.zhouwei').onmouseenter = function () {
  timeID = setInterval(function () {
    n += 0.5;
    document.querySelector('.zhouwei').style.transform = 'rotate(' + n + 'deg)';
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.transform = 'rotate(' + (-n) + 'deg)';
      console.log(n);
    }
  }, 30)
}

document.querySelector('.zhouwei').onmouseleave = function () {
  clearInterval(timeID);
}








// 微博动画效果
var weis = document.querySelectorAll('.wei img');

var weitus = document.querySelectorAll('.wei .weitu');

for (var i = 0; i < weis.length; i++) {
  weis[i].onmouseenter = function () {
    this.classList.add('pdong');
    for (var j = 0; j < weitus.length; j++) {
      weitus[j].classList.add('tudong');
    }
  }
  weis[i].onmouseleave = function () {
    this.classList.remove('pdong');
    for (var j = 0; j < weitus.length; j++) {
      weitus[j].classList.remove('tudong');
    }
  }
}





//    左侧三个小动画效果
// 鼠标悬浮a标签，图片出现动画效果
$('.donghua_items ul li a').on('mouseenter', function () {
  $(this).find('img').stop().animate({
    left: '-10px',
    top: '-10px'
  })
})
$('.donghua_items ul li a').on('mouseleave', function () {
  $(this).find('img').stop().animate({
    left: '-15px',
    top: 0
  })
})




//侧边小导航事件
var tips = document.querySelector('.tips');
var top1 = document.querySelector('.top');
$(window).scroll(function () {
  var t = $('html').scrollTop();
  if (t >= 300) {
    top1.style.display = 'block';
  } else {
    top1.style.display = 'none';
  }
})
$('.top').click(function () {
  $('html').animate({
    scrollTop: 0
  }, 1000)
})
var erweima=document.querySelector('.erweima');
var center=document.querySelector('.center');
    center.onclick=function(){
    erweima.classList.toggle('active1');
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






//中央3d轮播图效果
var radius = 240;
var autoRotate = true;
var rotateSpeed = -60;
var imgWidth = 120;
var imgHeight = 170;

var bgMusicURL = '';
var bgMusicControls = true;

// ===================== start =======================
setTimeout(init, 100);

var obox = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid];

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;

  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

var sX, sY, nX, nY, desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
<audio src="${bgMusicURL}" ${bgMusicControls ? 'controls' : ''} autoplay loop>    
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
}

// if (mobilecheck()) {
//   // ==================== Touch Events ====================
//   document.ontouchstart = function(e) {
//     clearInterval(obox.timer);
//     e = e || window.event;
//     var sX = e.touches[0].clientX,
//         sY = e.touches[0].clientY;

//     this.ontouchmove = function(e) {
//       e = e || window.event;
//       var nX = e.touches[0].clientX,
//           nY = e.touches[0].clientY;
//       desX = nX - sX;
//       desY = nY - sY;
//       tX += desX * 0.1;
//       tY += desY * 0.1;
//       applyTranform(obox);
//       sX = nX;
//       sY = nY;
//     }

//     this.ontouchend = function(e) {
//       this.ontouchmove = this.ontouchend = null;
//       obox.timer = setInterval(function() {
//         desX *= 0.95;
//         desY *= 0.95;
//         tX += desX * 0.1;
//         tY += desY * 0.1;
//         applyTranform(obox);
//         playSpin(false);
//         if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//           clearInterval(obox.timer);
//           playSpin(true);
//         }
//       }, 17);
//     }

//     // return false;
//   }
// } else {
// ==================== Mouse Events ====================
document.onmousedown = function (e) {
  clearInterval(obox.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  this.onmousemove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.3;
    tY += desY * 0.3;
    applyTranform(obox);
    sX = nX;
    sY = nY;
  }

  this.onmouseup = function (e) {
    this.onmousemove = this.onmouseup = null;
    obox.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(obox);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(obox.timer);
        playSpin(true);
      }
    }, 13);
  }

  return false;
}
document.onmousewheel = function (e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};
// }


// 覆盖盒子
// var bg = document.querySelector('.bg_box');
// var cover_box = document.querySelector('.cover_target'); 
// var close = document.querySelector('.close'); 
// var im = document.querySelector('.ya img'); 
// var map_content = document.querySelector('#map'); 

// map_content.onclick = function(){
//     // location.href = ''
//     cover_box.style.display = 'block';
//     im.classList.add('actor');
//     this.className = 'map2'

// }
// close.onclick = function(){
//     cover_box.style.display = 'none';
// }




$('#map').click(function () {
  $(this).css({
    height: 500,
    paddingTop: 150
  }, 1000)

  $('.cover_target').show();
  $('.cover_target').find('img').removeClass('actors'); 
  $('.cover_target').find('img').addClass('actor');

});

$('.close').click(function () {
     $('.cover_target').find('img').removeClass('actor'); 
     $('.cover_target').find('img').addClass('actors');
     $('.cover_target').fadeOut();
     $('#map').css({
       height: 375,
       paddingTop: 50
     });

});


