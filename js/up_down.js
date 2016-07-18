/**
 * Created by jianyujingjing on 2016/7/16.
 */
$(document).ready(function () {
    var d=0;// 当前点
    var z=0;//之前点
    $("body .b1").find("img").animate({right:'160'},500,function () {
        $("body .b1").find("img").animate({right:'135'},500);
    });
    var h=$(window).height();
    var lastTime=new Date();
    $(document).mousewheel(function (event,delte) {
        if(new Date()-lastTime>2000) {
            $("body .box").eq(z).siblings().find("img").css("right","-1000px");
            if (delte == -1) {
                //往下滚
                d++;
                if(d>2){d=0}
                $("body .box").eq(z).stop().animate({top: -h}, 800);
                $("body .box").eq(d).css({top: h});
                $("body .box").eq(d).stop().animate({top: 0}, 800, function () {
                    $("body .box").eq(d).find("img").animate({right: '160'}, 500, function () {
                        $("body .box").eq(d).find("img").animate({right: '135'}, 500);
                    });
                });
                z = d;
            }
            if (delte == 1) {
                d--;
                if(d<0){d=2}
                $("body .box").eq(z).stop().animate({top: h}, 800);
                $("body .box").eq(d).css({top: -h});
                $("body .box").eq(d).stop().animate({top: 0}, 800, function () {
                    $("body .box").eq(d).find("img").animate({right: '160'}, 500, function () {
                        $("body .box").eq(d).find("img").animate({right: '135'}, 500);
                    });
                });
                z = d;
            }
            $(".btn li").eq(z).addClass("bg").siblings().removeClass("bg");
        }
    });
    $(".btn li").click(function () {
        d = $(this).index();
        $("body .box").eq(z).siblings().find("img").css("right","-1000px");
        $(this).addClass("bg").siblings().removeClass("bg");
        if (d >z) {
            // alert("往上切");
          $("body .box").eq(z).animate({top:-h},800);
          $("body .box").eq(d).css({top:h},800);
          $("body .box").eq(d).animate({top:0},800,function () {
              $("body .box").eq(d).find("img").animate({right:'160'},500,function () {
                  $("body .box").eq(d).find("img").animate({right:'135'},500);
              });
          });
          z=d;
        }
        else if(d<z){
            $("body .box").eq(z).animate({top:h},800);
            $("body .box").eq(d).css({top:-h},800);
            $("body .box").eq(d).animate({top:0},800,function () {
                $("body .box").eq(d).find("img").animate({right:'160'},500,function () {
                    $("body .box").eq(d).find("img").animate({right:'135'},500);
                });
            });
            z=d;
        }
    });

});