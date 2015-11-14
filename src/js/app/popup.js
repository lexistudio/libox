define(["lib/jquery", "lib/colorbox"], function() {
  $(function() {
    image();
  });

  function image() {
    $image = $(".js-img");
    if($image.length) {
      $image.colorbox({
        speed: 400,
        transition: "fade",
        fadeOut: 100,
        title: false,
        opacity: .5,
        returnFocus: true,
        preloading: true,
        imgError: "Ошибка 404, файл не найден"
      });
    }
  }
})