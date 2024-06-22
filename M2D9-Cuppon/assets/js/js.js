$(document).ready(function(){
  $('[data-bs-toggle="tooltip"]').tooltip();  
  $('.carousel').carousel();

  $("#enviarCorreo").click(function(){
    alert('El correo fue enviado correctamente...');
  });

  $("h4").on( "click", function() {
  $(this).css({"color": "red"});
  });

  $(".card").click(function(){
    $(".card img").toggle(1000);
  });


  });