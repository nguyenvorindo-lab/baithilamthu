$(document).ready(function(){
    $("#btn-submit").click(function(){
        alert("Cảm ơn bạn đã phản hồi!");
        $("textarea").val(""); // Xóa nội dung sau khi gửi
    });
});
