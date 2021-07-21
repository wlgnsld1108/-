// 팝업창
$('.popup p').click(function() {
    $('.popup').hide();
});

// 슬라이드 내용 변경
var bgColor = [
    'rgba(244, 133, 67, 1)',
    'rgba(4, 160, 78, 1)',
    'rgba(243, 115, 107, 1)',
    'rgba(67, 107, 184, 1)',
    'rgba(212, 26, 78, 1)',
    'rgba(56, 149, 192, 1)',
    'rgba(83, 86, 162, 1)',
    'rgba(111, 75, 177, 1)',
    'rgba(167, 134, 92, 1)'
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
        var url = "url('images/" + bgImg[idx] + "') no-repeat 90% 80%" + bgColor[idx];

        $('.brand_bg').css({
            'background': url
        });
    });
});    
