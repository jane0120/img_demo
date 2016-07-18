/**
 * Created by jianyujingjing on 2016/7/16.
 */
/**
 * Created by jianyujingjing on 2016/7/16.
 */
$(document).ready(function () {
    var d=0;// 当前点
    var z=0;//之前点
    $("body .b1").find("img").animate({right:'160'},500,function () {
        $("body .b1").find("img").animate({right:'135'},500);
    });
    var w=$(window).width();
    $(".btn li").click(function () {
        d = $(this).index();
        $("body .box").eq(z).siblings().find("img").css("right","-5000px");
        $(this).addClass("bg").siblings().removeClass("bg");
        if (d >z) {
            // alert("right切");
            $("body .box").eq(z).animate({left:-w},800);
            $("body .box").eq(d).css({left:w},800);
            $("body .box").eq(d).animate({left:0},800,function () {
                $("body .box").eq(d).find("img").animate({right:'160'},500,function () {
                    $("body .box").eq(d).find("img").animate({right:'135'},500);
                });
            });
            z=d;
        }
        else if(d<z){
            $("body .box").eq(z).animate({left:w},800);
            $("body .box").eq(d).css({left:-w},800);
            $("body .box").eq(d).animate({left:0},800,function () {
                $("body .box").eq(d).find("img").animate({right:'160'},500,function () {
                    $("body .box").eq(d).find("img").animate({right:'135'},500);
                });
            });
            z=d;
        }
    });

});