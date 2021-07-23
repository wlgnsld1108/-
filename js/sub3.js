// 파일 첨부 줄 추가 및 제거
$(function() {
    $('.fileplus').click(function() {
        $('#filebox_wrap').clone().appendTo('#file_wrap').css('marginTop', '10px');

            $('.fileminus').click(function() {
                $('#filebox_wrap').next().remove();
            });
    });
});