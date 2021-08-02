$(function(){
    // 제품 분류 탭
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

    if (input) {
        /* ajax 코드 실행 및 검색했을때 결과 */
        $.ajax({
            url:'ajax/item.json',
            dataType:'json',
            success: function(data) {
                var searchId = []; 
                if(data.length > 0) {
                    for(var i in data) {
                        var name = data[i].name;
                        var id = data[i].id;

                        if (name.indexOf(input) > -1) {
                            searchId.push(id);
                        }
                    }

                    $(".product_item").children().hide();
                    for (var i in searchId) {
                        $("#" + searchId[i]).show();
                    }
                }
            }
        });
    }
}); 