$(document).ready(function(){
  $("#useBilling").change(function(){
    if ($("#useBilling").is(':checked')){
      $("#home").val($("#billing").val())
      $("#home").prop('disabled',true)
    }
    else{
      $("#home").val("")
      $("#home").prop('disabled',false)
    }
  });
});
