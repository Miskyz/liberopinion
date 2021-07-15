
$.js = function (el) {
  return $('[data-js=' + el + ']')
};

function carousel() {
$.js('timeline-carousel').slick({
  infinite: false,
  arrows: false,
  dots: false,
  autoplay: false,
  variableWidth: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});
}

carousel();
