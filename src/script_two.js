
$(document).ready( function() {



  function calculateBMR() {

    /*alert("Load Successfully");*/
    
    var he = $('#height').val();
    var we = $('#weight').val();
    var ag = $('#age').val();
    var ge = $('input:checked').val();
    var bmr;

    
      // If no data is enter this alert pops up.
      if (he == '' || we == '' || ag == '') {
      alert('Enter all data!');
      //The metric system BMR formula
    } else { 
      //Male BMR formula
      if (ge == 'male') bmr = 88.362 + (13.397 * we) + (4.799 * he) - (5.677 * ag) ;
      //Female BMR formula
      else bmr = 447.593 + (9.247 * we) + (3.098 * he) - (4.330 * ag);
      //The result plus the string of kcal.
      $('#bmr').html(Math.floor(bmr) + ' kcal');

    }
  }


  $("#btn").click(calculateBMR)

  $('#refresh').click(function() {

    document.location.reload(true);
    
});

//CONTINUE, SOLVE


 $("#menu").hide();

$("#bars").click(function(){
  $("#menu").toggle(100);
});


});


