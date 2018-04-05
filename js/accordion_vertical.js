//team accordion

// $(document).ready(function () {
//   $('.team-accordion__trigger').on('click', function(e){
//     e.preventDefault();
//
//     var $this = $(this);
//     var item = $this.closest('.team-accordion__item');
//     var contentBlock = item.find('.team-accordion__content');
//     var reqHeight = contentBlock.outerHeight(true);
//     var wrapperContentBlock = item.find('.team-accordion__content-wrapper');
//     var otherItems = item.siblings();
//     var otherItemsContent = otherItems.find('.team-accordion__content-wrapper');
//
//
//     if (item.hasClass('active')){
//       item.remove('active');
//       wrapperContentBlock.css('height', 0);
//     }
//     if (!item.hasClass('active')){
//       item.addClass('active');
//       wrapperContentBlock.css('height', reqHeight);
//       otherItemsContent.css('height', 0);
//       otherItems.remove('.active');
//     }
//   });
// });





$(document).ready(function () {
  $('.team-accordion__trigger').on('click', function(e){
    e.preventDefault();

    var $this = $(this);
    var item = $this.closest('.team-accordion__item');
    var container = $this.closest('.team-accordion');
    var items = container.find('.team-accordion__item');
    var content = item.find('.team-accordion__content');
    var otherContent = container.find('.team-accordion__content');


    if (!item.hasClass('active')){
      items.removeClass('active');
      item.addClass('active');
      otherContent.slideUp();
      content.slideDown();
    } else {
      item.removeClass('active');
      content.slideUp();
    }

  });
});
