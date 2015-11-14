define(["lib/jquery", "lib/iosslider"], function() {
  $(function() {
    mainSlider();
  });

  function mainSlider() {
    $slider = $(".main-slider");
    if($slider.length) {
      $slider.iosSlider({
        infiniteSlider: true,
        desktopClickDrag: false,
        snapToChildren: true,
        autoSlide: true,
        autoSlideTimer: 3000,
        autoSlideTransTimer: 1200,
        elasticPullResistance: 1.0,
        navPrevSelector: $('.m-prev'),
        navNextSelector: $('.m-next'),
        navSlideSelector: $('.m-selector .m-btn'),
        onSlideChange: slideContentChange,
        onSliderLoaded: slideContentChange,
      });
      
      function slideContentChange(args) {
        $('.m-selector .m-btn').removeClass('active');
        $('.m-selector .m-btn:eq(' + (args.currentSlideNumber - 1) + ')').addClass('active');
      }
    }
  }
})