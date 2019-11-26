$(document).ready(function(){
  $("#submit").click(function(){
    if ($("#fullname").val()==""){
      $("#nameerrormsg").toggle();
      return false;
    }
    if ($("#streetaddr").val()==""){
      $("#addrerrormsg").toggle();
      return false;
    }
    else{
      return true;
    }
  });
});
