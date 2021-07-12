// 슬라이드 내용 변경
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

var bgImg = [
    'product1.png',
    'product2.png',
    'product3.png',
    'product4.png',
    'product5.png',
    'product6.png',
    'product7.png',
    'product8.png',
    'product9.png',
]

$(function() {
    $('.slick-dots li').on('click', function(){
        var idx = $(this).index();
        var url = "url('images/" + bgImg[idx] + "') no-repeat 90% " + bgColor[idx];

        $('.brand_wrap').css({
            'background': url
        });
    });
});    
