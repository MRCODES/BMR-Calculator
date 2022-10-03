
$(document).ready( function() {



  function calculateIt() {

    /*alert("Load Successfully");*/
    
    var he = $('#height').val();
    var we = $('#weight').val();
    var ag = $('#age').val();
    var ge = $('input:checked').val();
    var bmr;

    
    if (he == '' || we == '' || ag == '') {


      alert('Enter all data!');


    } else {


      if (ge == 'male') bmr = 9.99 * we + 6.25 * he - 4.92 * ag + 5;
      else bmr = 9.99 * we + 6.25 * he - 4.92 * ag - 161;

      $('#bmr').html(Math.floor(bmr) + ' kcal');

    }
  }


  $("#btn").click(calculateIt)

  $('#refresh').click(function() {

    document.location.reload(true);
    
});


});