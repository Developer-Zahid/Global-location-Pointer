function calculateLocationPositions(){
  let parentOffset = $('.globe-wrapper').offset()
  $('.location-box').each(function(index, item){
    let eachOffset = $(this).offset();
    // $(this).css({
    //   'top': $(`#location-id-${$(this).data('location-id')}`).get(0).getBoundingClientRect().top,
    //   'left': $(`#location-id-${$(this).data('location-id')}`).get(0).getBoundingClientRect().left
    // })
    $(this).css({
      'top': $(`#location-id-${$(this).data('location-id')}`).offset().top - parentOffset.top,
      'left': $(`#location-id-${$(this).data('location-id')}`).offset().left - parentOffset.left
    })
  })
}
calculateLocationPositions()
$(window).on('resize', function(){
  calculateLocationPositions()
});