(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $('#miModal').modal('hide');

  $('#aceptar').on('click', barraProgreso);
  var valor = 0;
  // Barra de progreso

  function barraProgreso() {
    $('.modal-content').hide();
    $('.modal-dialog').html('<div class="progress progress-striped active"><div class="progress-bar" role="progress-bar" aria-valuemin="0" aria-valuemax="100" style="width:0%"><span class="sr-only"></span></div></div>');

    avanzandoBarra();
  }

  function avanzandoBarra() {
    valor = valor + 10;
    $('.progress-bar').css( {'width': valor+'%'} );
    if(valor === 200) {
      $('#miModal').modal('hide');
      location.reload();
    }

    setTimeout(avanzandoBarra, 100);
  }
})();
