//这是一个用来创建文本描述的函数
function createDescribe(describeId,textTitle,paragraph) {
    var describer = $('<ul class="describe" id="'+describeId+'"></ul>');
    //describeId对应新加描述盒子的id
    var textTitle = $('<li class="textTitle"><span class="hl"></span><h1>'+textTitle+'</h1><span class="hr"></span></li>');
    //textTitle 代表描述标题
    var p = $('<li><p>'+paragraph+'</p></li>');
    //paragraph 代表描述段落
    describer.append(textTitle,p);
    return describer;
};
// 用来创建按钮标签
function createButton (n) {
    //n代表想创建的小按钮的个数
    var btn_all = $('<div class = "btn_top"></div>');
    for ( var i = 0 ; i < n ; i++) {
        var single_btn = $('<a href = "javascript:;"></a>');
        btn_all.append(single_btn);
    } 
    return btn_all;
}
function createLink (m){
     //m代表想创建的长条按钮的个数
    var link_all = $('<div class = "btn_bom"></div>');
    for ( var i = 0 ; i < m ; i++) {
        var single_link = $('<a href = "javascript:;"></a>');
        link_all.append(single_link);
    } 
    return link_all;
}

//封装轮播效果
function getCarousel (classes,n,time){
    // 此处classes参数对应的是按钮的类名,n对应的是按钮个数，time对应间隔时间
    $(classes).each(function(i,elm){
        // 遍历按钮a标签
        if(i == 0){
            // 第一个按钮最后按
            setTimeout(function(){
                setInterval(function(){
                    $(elm).click();
                },time*n);
            },time*(n-1));
        }else{
            setTimeout(function(){
                setInterval(function(){
                    $(elm).click();
                },time*n);
            },time*(i-1));
        }
    });
}
