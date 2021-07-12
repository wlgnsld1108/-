// a href="#"클릭 이벤트 무시
$(function() {
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });
});

// 패밀리사이트
function onFamilySite(url) {
    if(url) {
        window.open(url);
    }
}