
$(document).ready(function () {
	$(window).scroll(function() {		
		if($(window).scrollTop() >= 100){ //向下滾動數值大於該值時，即出現小火箭
			$('.Gotop').fadeIn(300); //淡入: 越小出現越快
		}else{    
			$('.Gotop').fadeOut(300); //淡出: 越小消失越快
		}  
	});
	$('.Gotop').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);}); //火箭停留時間: 越小消失的越快
	$('.Gotop2').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);}); //火箭停留時間: 越小消失的越快
   //MENU ICON
    $('#menu_bth .b').click(function () {
    	 $(".menu2").slideToggle(500);
        if ($('').css("") == "") {
        $(".b1").toggleClass("b1_on");
        $(".b2").toggleClass("b2_on");
        $(".b3").toggleClass("b3_on");
        } 
        else  {
        $(".b1").toggleClass("b1_on");
        $(".b2").toggleClass("b2_on");
        $(".b3").toggleClass("b3_on");
        } 
	});

	 
	 
    $(".btn_close").click(function(){
        $(".btn_close").hide();
        $(".btn_open").show();
		 $("#fat_footer ul").slideUp("slow");
    });
    $(".btn_open").click(function(){
        $(".btn_open").hide();
        $(".btn_close").show();
		 $("#fat_footer ul").slideDown("slow");
    });	 
	 
	 
	 
	 
	 
 	//lightbox
    // delegate calls to data-toggle="lightbox"
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            onShown: function() {
                if (window.console) {
                    return console.log('Checking our the events huh?');
                }
            }
        });
    });
        
});
