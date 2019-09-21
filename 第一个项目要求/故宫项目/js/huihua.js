  //  导航栏
  var btn=document.querySelector('.nav ul li:nth-child(7) a');
  var search=document.querySelector('.sousuokuang');
  var flag=true;
  (function(){
    btn.onclick=function(){   
    if(flag){
        search.style.display='block';
        flag=false; 
    }else{
        search.style.display='none';
        flag=true;
    }
  }
  })();
  //导航啦的下拉列表
  var bottom_list0 = document.querySelector('.bottom_list0');
  var bottom_list1 = document.querySelector('.bottom_list1');
  var li1 = document.querySelector('.three');
  var li2 = document.querySelector('.four');
  //获取下拉菜单的li元素
  var bottom_li = document.querySelectorAll('.bottom_list li');
  // 鼠标进入显示
  li1.onmouseenter=function(){
      bottom_list0.style.display='block';
      for(var i=0;i<bottom_li.length;i++){
          bottom_li[i].onmouseenter=function(){
              this.className='active';
              this.children[0].style.color='red';          
          }
          bottom_li[i].onmouseleave=function(){
              this.className='';
              this.children[0].style.color='';   
          }
      }
  }
  //鼠标离开隐藏
  li1.onmouseleave=function(){
      bottom_list0.style.display='none';
  }
  // 鼠标进入显示
  li2.onmouseenter=function(){
      bottom_list1.style.display='block';
      for(var i=0;i<bottom_li.length;i++){
          bottom_li[i].onmouseenter=function(){
              this.className='active';
              this.children[0].style.color='red';          
          }
          bottom_li[i].onmouseleave=function(){
              this.className='';
              this.children[0].style.color='';   
          }
      }
  }
  //鼠标离开隐藏
  li2.onmouseleave=function(){
      bottom_list1.style.display='none';
  }

  var relink=document.querySelector(' .relink');
  var relink_ul=document.querySelector(' .relink ul');

  relink.onmouseenter=function(){
      relink_ul.style.display='block';
  }
  relink.onmouseleave=function(){
      relink_ul.style.display='none';
  }


