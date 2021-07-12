// 슬라이드 변경
var slideList = document.querySelectorAll('.slick-dots li');

var bgColor = [
    '#f48543',
    '#04a04e',
    '#f3736b',
    '#436bb8',
    '#d41a4e',
    '#3895c0',
    '#5356a2',
    '#6f4bb1',
    '#a7865c'
]
$(function() {
    $('.slick-dots li').click(function(){
        var idx = $(this).index();
        console.log(idx);

    });
    
    for(var i = 0; i < slideList.length; i++) {
        $('.slick-active').parents('.brand_wrap').css({
                'background': bgColor[i]
            });
    }
});
