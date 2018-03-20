

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
  function xmenu_obj(objA)
  {
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
        if (_this.next("ul").length > 0) { return false; }
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
	//Print
	$("#print_content").click(function(){
		var all_w=$("#all").width();
		var left_w=$("#left").width();
		var  pr_w=(all_w-left_w)+"px";	
	   $("body").css("background-image","url('')");
	   $("#wallpaper").css("background-image","url('')");
	    $("#all").css("background-image","url('')");	
		$("#left").hide();
		$("#top").hide();
		$("#place").hide();
		$("#good").hide();
		$("#footer").hide();
		$("#all").width(pr_w);
		window.print();
		setTimeout("window.location.reload();", 3000);
		});
		
    //字型大小
	 ChangeFontSize(-1);
	 $("#fontSizeS").click(function(e){ChangeFontSize(0)});
	 $("#fontSizeM").click(function(e){ChangeFontSize(1)});
	 $("#fontSizeL").click(function(e){ChangeFontSize(2)});
     



    //分頁的go 按鈕
    $("#page_go_btn").click(function(){window.location=$("#page_num_box").val();});
	
	//點閱率+1 
    $('a[hiturl]').click(function() {
      var hiturl = $(this).attr('hiturl');
      jQuery.ajax({ url: hiturl });
      });

    });
 

    

