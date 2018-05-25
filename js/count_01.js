$('#quantity').keyup(function(){
  var Value = $('#quantity').val();
  $('#errmsg').empty();
  $('#errmsg').text(Value*3);
});