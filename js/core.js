$(document).ready(function(){
    customSelect(".flagSelect ul");
    customSelect(".languageSelect ul");
    // customSelect(".flagSelect.foot ul");
    // customSelect(".languageSelect.foot ul");
    gnbControl("header .wrap nav > ul > li","#gnbPanel");
    slide("#slideBar","horizontal",true,false,true);
    $(".fitvidsBox").fitVids();
    clickEvent("#productInfoAccordion li");
    clickEvent("footer > div:first-child > div:nth-child(2)");
    clickEvent("[class^='checkOut'] aside div");
    panelControl(".btn_open");
    respSlider(".respSlider01",false);
    respSlider(".respSlider02",false);
    
}); 
function panelControl(btn){  
    var panelName = null;
    $(btn).click(function(){
        panelName = "#" + $(this).attr("data-Panel");
        $(panelName).toggleClass("active");
    });
    $(".btn_close").click(function(){
        $(panelName).removeClass("active");
    });
    $(window).scroll(function(){
        $(panelName).removeClass('active');  
    });
}
function customSelect(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    });
    $(target + " li").click(function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
};
function slide(target,modVal,infVal,conVal,autoVal){
    $(target).bxSlider({
        mode: modVal,
        infiniteLoop:infVal,
        pager: conVal,          
        auto: autoVal,
    });
}
function clickEvent(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}
function respSlider(target,conVal){
    if (window.matchMedia("(max-width: 1279px)").matches) {
        $(target).bxSlider({
            pager: conVal,
            touchEnabled: false
        });   
    }
}
function gnbControl(target, panel){
    var currentMenu = null;
    $(".btn_mui").click(function(){
        $('header .wrap nav').toggleClass('active');
    });   
    $(".btn_mui").on("swipe",function(){
        $('header .wrap nav').toggleClass('active');
    });
    $(target).click(function(){
        currentMenu = "."+$(this).attr('data-gnbName');
        $(panel).addClass('active');
        $(panel).children('*:not(div)').removeClass('active');
        $(currentMenu).addClass('active');
    });
    if (window.matchMedia("(max-width: 767px)").matches) {   
        $('.btn_close').click(function(){
            $(panel).removeClass('active');  
        });
    }
    if (window.matchMedia("(min-width: 768px)").matches) {        
        $(window).scroll(function(){
            $(panel).removeClass('active');  
        });
    }
}

