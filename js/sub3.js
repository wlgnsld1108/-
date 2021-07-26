// // 파일 첨부 줄 추가 및 제거
// var count = 0;
// $(document).on('click', '.fileplus', function() {
//     var len = $('.filebox').length;
    
//     if(len < 3){
//         var clone = $(this).parent().clone();
//         clone.find('input').val('');
//         $('#filebox_wrap').append(clone);
//     } else {
//         alert('최대 3개까지 첨부 가능합니다.');
//     }
// });

// $(document).on('click', '.fileminus', function(){
//     var len = $('.filebox').length;
//     if(len > 1){
//         $(this).parent().remove();
//     } else {
//         alert('최소 1개 이상 첨부해야합니다.');
//     }
// });

$(document).on("click", ".fileplus", function() {
    $('#filebox_wrap').append(
        $('<input/>').attr('type', 'file').attr('name', 'someName')
    ).append(
        $('<input/>').attr('type', 'button').attr({
            value: '+',
            class: 'fileplus'
        })
    );
});

// // 파일명 추가
// $('.upload-hidden').on('change', function(){
//     if(window.FileReader){
//         var filename = $(this)[0].files[0].name;
//     } else {
//         var filename = $(this).val().split('/').pop().split('\\').pop();
//     }
//     $(this).siblings('.upload-name').val(filename);
// });