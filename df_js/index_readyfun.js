$(document).ready(function(e) {
    //RWD第一層選單
    $(".sub_menu").click(function() {
        return xmenu_obj($(this));
    });
    $(".sub_menu2").click(function() {
        return xmenu_obj($(this));
    });

    $(".sub_menu3").click(function() {
        return xmenu_obj($(this));
    });

    $(".sub_menu4").click(function() {
        return xmenu_obj($(this));
    });

    //左側選單縮放
    function xmenu_obj(objA) {
        var _this = objA;

        if (_this.next("ul").length > 0) {
            if (_this.next().is(":visible")) {
                _this.next().slideUp("fast");
            } else {
                _this.next().slideDown("fast");
            }
            return false;
        }

    }

});

$(document).ready(function(e) {
    //第一層選單
    $(".menu01").click(function() {
        var _this = $(this);

        if (_this.next("ul").length > 0) {
            if (_this.next().is(":visible")) {
                _this.next().hide("fast");
            } else {
                _this.next().show("fast");
            }
            return false;
        }
    });
    //第一層選單
    $(".menu01 a").click(function() {
        var _this = $(this);
        if (_this.next("ul").length > 0) {
            return false;
        }
    });
    //第二層
    $(".submenu li a").click(function() {
        var _this = $(this);
        if (_this.next("ul").length > 0) {
            if (_this.next().is(":visible")) {
                _this.next().hide("fast");
            } else {
                _this.next().show("fast");
            }
            return false;
        }
    });

    //字型大小
    ChangeFontSize(-1);
    $("#fontSizeS").click(function(e) {
        ChangeFontSize(0)
    });
    $("#fontSizeM").click(function(e) {
        ChangeFontSize(1)
    });
    $("#fontSizeL").click(function(e) {
        ChangeFontSize(2)
    });

});

//Gotop    

$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) { //向下滾動數值大於該值時，即出現小火箭
            $("#main_menu").addClass("menu_active");
        } else {
            $("#main_menu").removeClass("menu_active");
        }
    });
});

$(document).ready(function() {
    var owl = $('.home_img');
    owl.owlCarousel({
        //rewind: true,//播完拉回第一張開始撥
        loop: true, //循環播放
        autoplay: true, //自動撥放
        nav: true, //左右箭頭
        dots: true, //小圓點
        items: 1, //數量
    })
})

$(document).ready(function() {
    var owl = $('.photo');
    owl.owlCarousel({
        //rewind: true,//播完拉回第一張開始撥
        loop: true, //循環播放
        autoplay: true, //自動撥放
        nav: false, //左右箭頭
        dots: false, //小圓點
        items: 1, //數量
        navigation: true,
    })
})

$(document).ready(function() {
    var owl = $('.responsive');
    owl.owlCarousel({
        loop: true, //循環播放
        autoplay: true, //自動撥放
        nav: true, //左右箭頭
        dots: false, //小圓點
        margin: 10,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 5,
            },
            1000: {
                items: 5,
            }
        }
    })
})

$(document).ready(function() {
    var owl = $('.responsive_list3');
    owl.owlCarousel({
        loop: true, //循環播放
        autoplay: true, //自動撥放
        nav: true, //左右箭頭
        dots: true, //小圓點
        margin: 10,
        autoplayTimeout: 20,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
})

$(document).ready(function() {
    var owl = $('.responsive_list2');
    owl.owlCarousel({
        center: true,
        loop: true, //循環播放
        autoplay: true, //自動撥放
        nav: true, //左右箭頭
        dots: false, //小圓點
        margin: 35,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    })
})

$(document).ready(function() {
    var owl = $('.responsive_list');
    owl.owlCarousel({
        loop: true, //循環播放
        autoplay: false, //自動撥放
        nav: true, //左右箭頭
        dots: false, //小圓點
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 5,
            }
        }
    })
})

$(document).ready(function() {
    $(".owl-prev").attr("title", "上一則");
    $(".owl-next").attr("title", "下一則");
    $(".owl-prev").attr("tabindex", "0");
    $(".owl-next").attr("tabindex", "0");
	 $(".owl-carousel").attr("tabindex", "0");


//focus輪播圖 停止自動撥放 從第一個跳起
    var owl = $('.owl-carousel');
    owl.owlCarousel({

        autoplayHoverPause: true,

    })



    $('.owl-carousel').on('keydown', function(e) {
        if (e.keyCode == 9);
        owl.trigger('stop.owl.autoplay');
	     $(this).find(".owl-item.cloned").hide();
		 $(this).find(".owl-item").css("float", "left");
         $(this).find(".owl-stage").css("transform", "inherit");

    })

})

//tab會下拉副選單
$(document).ready(function() {

    // initialise plugin
    var example = $('#example').superfish({
        //add options here if required
    });

    // buttons to demonstrate Superfish's public methods
    $('.destroy').on('click', function() {
        example.superfish('destroy');
    });

    $('.init').on('click', function() {
        example.superfish();
    });

    $('.open').on('click', function() {
        example.children('li:first').superfish('show');
    });

    $('.close').on('click', function() {
        example.children('li:first').superfish('hide');
    });
});

//跑馬燈
$(document).ready(function() {

    $('.div_promo').SetScroller({
        velocity: 70,
        direction: 'horizontal',
        startfrom: 'right',
        loop: 'infinite',
        movetype: 'linear',
        onmouseover: 'pause',
        onfocus: 'pause',
        onmouseout: 'play',
        onstartup: 'play',
        cursor: 'pointer'
    });
    $('.div_promo').css("height", "30px");
    $('.div_promo').css("position", "relative");
    $('.div_promo_txt').css("position", "absolute");
    $('.div_promo_txt').css("white-space", "nowrap");

});

//跑馬燈 focus停住
$(document).ready(function() {
    $(".news_marquee a").focus(function() {
        $(".div_promo_txt").stop();
    });
});

//最新消息
$(function() {
    $("#n_tab0 a").blur(function() {
        $(".news_list li:nth-child(1)").find("a:first").focus();
        $(".fb-main *").attr("tabIndex", "-1"); //換頁不會跳FB
    });
    $("#n_tab1 a").blur(function() {
        $(".news_list1 li:nth-child(1)").find("a:first").focus();
    });
    $("#n_tab2 a").blur(function() {
        $(".news_list2 li:nth-child(1)").find("a:first").focus();
    });

    $("#more1").blur(function() {

        $(".news_tt li:nth-child(2) ").addClass("news_tt-").siblings(".news_tt li").removeClass("news_tt-");
        $(".news_list1").fadeIn().siblings(".news_list").hide();
        $(".news_list1").find("a:first").focus();
        $(".fb-main *").attr("tabIndex", "0"); //解除換頁不會跳FB

    });

    $("#more2").blur(function() {
        $(".news_tt li:nth-child(3) ").addClass("news_tt-").siblings(".news_tt li").removeClass("news_tt-");
        $(".news_list2").fadeIn().siblings(".news_list").hide();
        $(".news_list2").find("a:first").focus();
    });

    $('.news_tt li').click(function(e) {
        var $tabIndex = $(this).index();
        $(this).addClass('news_tt-').siblings(".news_tt li").removeClass('news_tt-');
        $('.news_list').eq($tabIndex).fadeIn().siblings(".news_list").hide();
    });

});

//首頁右上搜尋框
$(document).ready(function() {

    $(".m_search").click(function() {
        $(".search_main").toggle();
    });

    $(".txbKeyword").attr("tabindex", "0");

    $(".txbKeyword").focus(function() {
        $(".m_search").focus();
        $(".search_main").slideDown();
    });

    $(".search_word a:last-of-type").blur(function() {
        $(".search_main").hide();
    });
});