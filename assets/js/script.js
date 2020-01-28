$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('src') 
  var title = button.data('title')
  var price = button.data('price')
  $('.alert').hide()
  // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  
  var modal = $(this)
  modal.find('.modal-title').text(title)
  modal.find('.modal-price').text(price)
  // modal.find('[src=""]').val(recipient)
  // $('[src]').val(recipient)
  // console.log('test:'+modal.find('img').attr());
  // modal.find('.modal-body img').val(recipient)
  // const products = document.querySelector('.card-img-top');
  // console.log('product:'+products.dataset.src);

  var img = $('#modal-img')
  img.attr('src', recipient);

})

$('#send-button').click(function(){
  $('.alert').show();
})

$('.alert').on('closed.bs.alert', function(){
  $('alert').show();
})

