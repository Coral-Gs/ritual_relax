/* La función anónima $(function() {}) es el equivalente a $( document ).ready(function() 
- ahora obsoleta - que se ejecutará cuando el DOM haya cargado */

$(function () {
  // Cuando hacemos clic en una miniatura
  $(".miniaturas img").on("click", function () {
    // Obtenemos la URL de la imagen de la miniatura con attr("src")
    var imageUrl = $(this).attr("src");

    // Cambiamos la imagen principal con un efecto fade
    $("#img-ppal").fadeOut(100, function () {
      $(this).attr("src", imageUrl).fadeIn(100);
    });
  });
});
