$(document).ready(function(){
  $('[data-bs-toggle="tooltip"]').tooltip();  
  $('.carousel').carousel();

  $("#enviarCorreo").click(function(){
    alert('El correo fue enviado correctamente...');
  });

 });