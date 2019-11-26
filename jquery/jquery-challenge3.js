$(document).ready(function(){
  $("#ch3form").click(function(e){
    if (!$('input[name=standing]:checked').length){
      alert("You must pick a standing!");
      return false;
    }
    if (!$('input[name=fruit]:checked').length){
      alert("You must pick a fruit!");
      return false;
    }
    return true;
  })
})
