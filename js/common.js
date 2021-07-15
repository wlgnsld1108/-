// a href="#"클릭 이벤트 무시
$(function() {
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });
});

// 헤더 스크롤시 변경
$(window).on('scroll', function() {
    var sc_top = $(this).scrollTop();

    $('#bg_cover').hide();
    $('#search_wrap, .nav_menu').slideUp(200);

    if(sc_top > 760) {
        $('.header').css('background', '#fff');
        $('.menu_bar span').css('background', '#000');
        $('.logo img').attr('src', 'images/logo_b.png');
        $('.search img').attr('src', 'images/search_icon_b.png');
        $('.globe img').attr('src', 'images/globe_icon_b.png');
        $('#search_wrap').css('background', '#fff');
    } else {
        $('.header').css('background', '#008944');
        $('.menu_bar span').css('background', '#fff');
        $('.logo img').attr('src', 'images/logo_w.png');
        $('.search img').attr('src', 'images/search_icon_w.png');
        $('.globe img').attr('src', 'images/globe_icon_w.png');        
        $('#search_wrap').css('background', '#fff');
    }
});

// 네비게이션 햄버거 메뉴 클릭시
$(function() {
    $('.nav_menu').hide();
    
    $('.header .nav_bar').click(function(e) {
        
        $('.menu_bar').toggleClass('active');
        e.stopPropagation();
        $('#bg_cover').toggle();
        $('.nav_menu').slideToggle(200);
    });

    $(document).click(function(){
        $('#bg_cover').hide();
        $('.nav_menu').slideUp(200);
    });
    
    $('.header .search').click(function(){
        $('#bg_cover').hide();
        $('.nav_menu').slideUp(200);
    });
});

// 검색바
$(function() {
    $('#search_wrap').hide();
    
    $('.header .search').click(function(e) {
        e.stopPropagation();
        $('#bg_cover').toggle();
        $('#search_wrap').slideToggle(200);
    });
    
    $(document).click(function(){
        $('#bg_cover').hide();
        $('#search_wrap').slideUp(200);
    });
    
});

// 패밀리사이트
function onFamilySite(url) {
    if(url) {
        window.open(url);
    }
}