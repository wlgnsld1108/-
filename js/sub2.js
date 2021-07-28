// 제품 분류 탭
jQuery(function($){
	$(".product_tap > ul > li > a").on("mouseover focus", function(){
    $(this).parent().addClass("tap_on").siblings().removeClass('tap_on');
	});
    $('.product_tap > ul > li > a:last-child').unbind('mouseover focus').css({
        'background': '#e9e9e9',
        'color': '#000'
    });

    // url 가져오기
    var url = location.href;

    // 쿼리스트링 파라메터 가져오기
    var urlObj = new URL(url);
    var params = urlObj.searchParams;
    var input = params.get('input');
    console.log(input);

    /* ajax 코드 실행 */
    $.ajax({
        url:'member.json',
        dataType:'ajax/item.json',
        success: function(data) {
            if(data.length > 0) {
                for(var i in data) {
                    var $name = data[i].$name;
                    var $type = data[i].$type;

                    var item = $('span:nth-child(2)').append(
                        $('#user-id').text($id),
                        $('.fir-name').text($first_name),
                        $('.las-name').text($last_name),
                        $('#user-email').text($email),
                        $('#user-email').text($email),
                        );
                }
            }
        }
    });
}); 