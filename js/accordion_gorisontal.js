$(document).ready(function () {
  $('.menu-accordion__trigger').on('click', function(e){
    e.preventDefault();

    var item = $(this).closest('.menu-accordion__item');
    var container = item.closest('.menu-accordion');
    var items = container.find('.menu-accordion__item');
    var activeItem = items.filter('.active');
    var content = item.find('.menu-accordion__content');
    var activeContent = activeItem.find('.menu-accordion__content');


    if (!item.hasClass('active')){
      items.removeClass('active');
      item.addClass('active');
      activeContent.animate({
        'width' : '0px'
      });
      content.animate({
        'width' : '550px'
      });
    } else {
      item.removeClass('active');
      activeContent.animate({
        'width' : '550px'
      });
      content.animate({
        'width' : '0px'
      });
    }
  });

  $(document).on('click', function (e) {
    var $this = $(e.target);

    if (!$this.closest('.menu-accordion').length) {
      $('.menu-accordion__item').removeClass('active');
      $('.menu-accordion__content').animate({
        'width' : '0px'
      });
    }
  });
});
