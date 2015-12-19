$(document).ready(main);
var connav=0;
function main(){
	$('.item a').click(anclas);
	$('.glyphicon-menu-hamburger').click(menu);
}
function anclas(e){
	e.preventDefault();
    var href = $(this).attr('href');
    var altonav=$('nav').innerHeight();
    $('html, body').animate({ scrollTop : $( href ).offset().top-altonav}, 'easeInOutExpo');
}
function menu(){
	if(connav==0){
		$('nav').animate({
		left: 0,
		},500,'easeInQuint',function() {
    		$('.item a').css({
    			left: '0',
    			
    		});
  		});
		connav=1
	}
	else{
		$('nav').animate({
		left: -300,
		},500,'easeOutQuint',function() {
    		$('.item a').css({
    			left: '-100%',
    		});
  		});
		connav=0
	}
	
}




