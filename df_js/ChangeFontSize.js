

function ChangeFontSize(ch_size)
{
    
	var docs = document.getElementById('FontSizeArea');	
	$("#fontSizeS").parent().addClass("font_size_btn");
	$("#fontSizeM").parent().addClass("font_size_btn");
	$("#fontSizeL").parent().addClass("font_size_btn");
	var get_size;
	if(docs){
		var FontArray = ["90","100","110"];
		var FontButton = ["fontSizeS","fontSizeM","fontSizeL"];
		var currSize = FontArray[1];
		var currLineHeight = null;
		get_size=FontArray[1];
		if(ch_size==-1){	
			ch_size=1;
			if(getCookie("FontSize")) {
				get_size = getCookie("FontSize");
				ch_size = getCookie("FontSizeButton");}
			else{
				setCookie("FontSize", get_size);setCookie("FontSizeButton", ch_size);}
		}else
		{
			get_size=FontArray[ch_size];
			setCookie("FontSize",get_size);
			setCookie("FontSizeButton",ch_size);
		}
		currSize = parseInt(get_size);currLineHeight = parseInt((currSize/10) * 2.4);	docs.style.fontSize = currSize + '%';
		
	
	
		$("#fontSizeS").parent().removeClass("font_size_btn-");
		$("#fontSizeM").parent().removeClass("font_size_btn-");
		$("#fontSizeL").parent().removeClass("font_size_btn-");
	
		$("#"+FontButton[ch_size]).parent().addClass("font_size_btn-");
	}	
	}
	
	
function setCookie(ck_name,value,d){
	if (d){
		var d = new Date();
		d.setTime(date.getTime() + (d * 84600000));
		var date_str = "; expires=" + d.toGMTString();
	} else {
			var date_str = "";
	}
	document.cookie = ck_name + "=" + value + date_str + "; path=/";
}

function getCookie ( cookie_name ){
	  var Fsize = document.cookie.match ( cookie_name + '=(.*?)(;|$)' ); return Fsize?unescape ( Fsize[1]):null;
}
