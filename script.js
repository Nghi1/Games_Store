$(function(){
    $(".dropdown-item").addClass("text-white text-center")
    $(".tab-img").addClass("rounded-4")
    $("#global").hover(function(){
        $("#global-list").addClass("show")
      }, function(){
        $("#global-list").removeClass("show")
      });
})