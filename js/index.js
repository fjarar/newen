// $( "#hider" ).click(function() {
//     $( "span:last-child" ).hide( "fast", function() {
//       // Use arguments.callee so we don't need a named function
//       $( this ).prev().hide( "fast", arguments.callee );
//     });
//   });
//   $( "#shower" ).click(function() {
//     $( "span" ).show( 2000 );
//   });

// $( "#img-responsive" ).click(function() {
//     $( "#menu-header" ).toggle( "slow" );
//   });

// function toggle_visibility(id) {
//     var e = document.getElementById(id);
//     if(e.style.display == 'block')
//        e.style.display = 'none';
//     else
//        e.style.display = 'block';
//  }
$(function() {
    var menuVisible = false;
    $('#menu-responsive').click(function() {
      if (menuVisible) {
        $('#menu-header').css({'display':'none'});
        menuVisible = false;
        return;
      }
      $('#menu-header').css({'display':'inline-flex'});
      menuVisible = true;
    });
  });