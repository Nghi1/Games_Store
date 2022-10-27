$(function(){
    $(".dropdown-item").addClass("text-white text-center")
    $("#global").hover(function(){
        $("#global-list").addClass("show")
      }, function(){
        $("#global-list").removeClass("show")
      });
})