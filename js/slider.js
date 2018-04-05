$(function () {

  var moveSlide = function (container, slideNum) {
    var items = container.find('.burgers-slider__item');
    var activeSlide = items.filter('.active');
    var reqItem = items.eq(slideNum);
    var reqIndex = reqItem.index();
    var list = container.find('.burgers-slider');
    var duration = 500;

    if (reqItem.length) {
      list.animate({
        'left' : -reqIndex * 100 + '%'
      }, duration, function () {
          activeSlide.removeClass('active');
          reqItem.addClass('active');
      });
    }
  };

  $('.burgers-slider__btn').on('click', function (e) {
    e.preventDefault();

    var $this = $(this);
    var container = $this.closest('.burgers-slider-wrap');
    var items = container.find('.burgers-slider__item');
    var activeItem = items.filter('.active');
    var nextItem = activeItem.next();
    var prevItem = activeItem.prev();

    if ($this.hasClass('burgers-slider__btn_next')) {
      // вперед
      if (nextItem.length) {
        moveSlide(container, nextItem.index());
      } else {
        moveSlide(container, items.first().index());
      }
    }

    if ($this.hasClass('burgers-slider__btn_prev')) {
      // назад
      if (prevItem.length) {
        moveSlide(container, prevItem.index());
      } else {
        moveSlide(container, items.last().index());
      }
    }
  });
});
