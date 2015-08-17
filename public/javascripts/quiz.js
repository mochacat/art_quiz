$(document).ready(function(){
  var score = 0;
  $('#score').on('click', calcScore);
  
  function calcScore(event){
    var artists = {
      'artist1': $('input[name=artist1]:checked').val(),
      'artist2': $('input[name=artist2]:checked').val(),
      'artist3': $('input[name=artist3]:checked').val(),
      'artist4': $('input[name=artist4]:checked').val(),
      'artist5': $('input[name=artist5]:checked').val(),
    };
    
    $.ajax({
      type: 'POST',
      data: artists,
      url: 'answers/score',
      dataType: 'JSON'
    }).done(function(response){
        console.log(response);
        if ($('#tally_msg').length){
            $('#tally_msg').remove();
        }
        $('.form-group:last').append('<div id="tally_msg"><p>You got ' + response + ' correct!</p></div>');
    });  
  }
});
