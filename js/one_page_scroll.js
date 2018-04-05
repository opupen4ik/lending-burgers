// (function () {
//
//   var display = $('.maincontent');
//   var sections = $('.section');
//   var inScroll = false;
//
//   /**
//   * Скролл (транзишн досекции)
//   * @param {integer} sectionEq
//   */
//
//   var performTransition = function (sectionEq) {
//
//     if (inScroll) return;
//     inScroll = true;
//
//     var position = (sectionEq * -100) + '%';
//
//     sections.eq(sectionEq).addClass('active')
//       .siblings().removeClass('active');
//
//     display.css({
//       'transform' : 'translate(0,'+ position +')'
//     });
//
//     setTimeout(function(){
//       inScroll = false;
//
//       $('switch-list__item').eq(sectionEq).addClass('switch-active')
//         .siblings().removeClass('switch-active');
//     }, 1300);
//
//   };
//
//
//
//   $('.wrapper').on('wheel', function (e) {
//     var activeSection = sections.filter('.active');
//     var nextSection = activeSection.next();
//     var prevSection = activeSection.prev();
//
//
//     if (e.originalEvent.deltaY > 0 && nextSection.length) {
//       // скролим вниз
//       performTransition(nextSection.index());
//     };
//
//     if (e.originalEvent.deltaY < 0 && prevSection.length) {
//       // скролим вверх
//       performTransition(prevSection.index());
//     }
//   });
//
//   $('[data-section-target]').on('click', function (e) {
//     e.preventDefault();
//
//     var href = parseInt($(this).attr('href'));
//
//     performTransition(href);
//
//   });
//
// }());

$(function(){

  var sections = $('.section');
  var display = $('.maincontent');
  var inScroll = false;

  var scrollToSection = function (sectionEq) {

    var position = 0;

    if (!inScroll) {
      inScroll = true;

      position = (sections.eq(sectionEq).index() * -100) + '%';
      sections.eq(sectionEq).addClass('active')
        .siblings().removeClass('active');
      display.css({
        'transform' : 'translate3d(0,' + position + ', 0)'
      });

      setTimeout(function () {
        inScroll = false;
        $('.switch-list__item').eq(sectionEq).addClass('active')
          .siblings().removeClass('active');
      }, 1300)
    }
  }

  $('.wrapper').on('wheel', function (e) {

    var deltaY = e.originalEvent.deltaY;
    var activeSection = sections.filter('.active');
    var nextSection = activeSection.next();
    var prevSection = activeSection.prev();


    if (deltaY > 0) { //скролим вниз
      if (nextSection.length) {
        scrollToSection(nextSection.index());
      }
    }
    if (deltaY < 0) { //скролим вверх
      if (prevSection.length) {
        scrollToSection(prevSection.index());
      }
    }
  });

  $(document).on('keydown', function (e) {
    var activeSection = sections.filter('.active');
    var nextSection = activeSection.next();
    var prevSection = activeSection.prev();


    if (e.keyCode == 40) { //листаем вниз
      if (nextSection.length) {
        scrollToSection(nextSection.index());
      }
    }
    if (e.keyCode == 38) { //листаем вверх
      if (prevSection.length) {
        scrollToSection(prevSection.index());
      }
    }
  });

  $('.arrow').on('click', function (e) {
    e.preventDefault();
    scrollToSection(1);
  });

  $('.switch-list__link, .nav__link, .order-link, .burgers-slider__buy').on('click', function (e) {
    e.preventDefault();
    var href = parseInt($(this).attr('href'));
    scrollToSection(href);
  });
});
