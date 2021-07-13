// a href="#"클릭 이벤트 무시
$(function() {
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });
});

// 헤더 스크롤시 변경
$(window).on('scroll', function() {
    var sc_top = $(this).scrollTop();

    if(sc_top > 760) {
        $('.header').css('background', 'rgba(255, 255, 255, .5)');
        $('.nav_bar img').attr('src', 'images/hamburger_b.svg');
        $('.logo img').attr('src', 'images/logo_b.png');
        $('.search img').attr('src', 'images/search_icon_b.png');
        $('.globe img').attr('src', 'images/globe_icon_b.png');
        $('#search_wrap').css('background', 'rgba(255, 255, 255, .5)');
    } else {
        $('.header').css('background', '#008944');
        $('.nav_bar img').attr('src', 'images/hamburger_w.svg');
        $('.logo img').attr('src', 'images/logo_w.png');
        $('.search img').attr('src', 'images/search_icon_w.png');
        $('.globe img').attr('src', 'images/globe_icon_w.png');        
        $('#search_wrap').css('background', '#fff');
    }
});

// 검색바
$(function() {
    $('#search_wrap').hide();

    $('.header .search').click(function() {
        $('#search_wrap').slideToggle(200);
    });
});

// 패밀리사이트
function onFamilySite(url) {
    if(url) {
        window.open(url);
    }
}