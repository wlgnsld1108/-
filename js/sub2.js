// 제품 분류 탭
jQuery(function($){
	$(".product_tap > ul > li > a").on("mouseover focus", function(){
    $(this).parent().addClass("tap_on").siblings().removeClass('tap_on');
	});
    $('.product_tap > ul > li > a:last-child').unbind('mouseover focus').css({
        'background': '#e9e9e9',
        'color': '#000'
    });
}); 