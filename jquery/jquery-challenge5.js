$(document).ready(function() {
  $(".preview").hover(function() {
    var img_source = $(this).attr('src');
    var bg_img = "background-image: url('" + img_source + "')";
    $('#image').attr("style", bg_img);
    $('#image').text($(this).attr('alt'));
  }, function() {
    $('#image').css("background-image", "none");
    $('#image').text("Hover/tab over an image below.")
  });
$(".preview").focus(function() {
    var img_source = $(this).attr('src');
    var bg_img = "background-image: url('" + img_source + "')";
    $('#image').attr("style", bg_img);
    $('#image').text($(this).attr('alt'));
  });
});
