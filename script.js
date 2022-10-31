$(function(){
    $(".dropdown-item").addClass("text-white text-center")
    $(".tab-img").addClass("rounded-4")
    $("#global").hover(function(){
        $("#global-list").addClass("show")
      }, function(){
        $("#global-list").removeClass("show")
      });
      $("#spotlight").hover(function(){
        $("#spotlight span").addClass("tag-high")
      }, function(){
        $("#spotlight span").removeClass("tag-high")
      });
})