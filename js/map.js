// yandex-map

$(function() {
  ymaps.ready(init);
  var myMap;

  function init(){
      myMap = new ymaps.Map("map", {
          center: [55.76988978055432,37.57605962701408],
          zoom: 14,
          controls: []
      });

      var coords = [
        [55.76610606894365,37.559244499999984],
        [55.77866906897595,37.58796399999999],
        [55.76562956897228,37.57694149999988]
      ],
      myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-20, -57], //экспериментальным путем выставить, чтобы точно указывала на адрес
        draggable: false
    });

    for (var i = 0; i < coords.length; i++) {
      myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
  }
});
