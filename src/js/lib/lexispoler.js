(function($){
  $.fn.lexispoler = function(options) {
    return this.each(function() {

      var settings = $.extend({
        box: ".lexi-container",
        mode: "default",
        timer: "300"
      }, options);

      $(this).on("click", function(event) {
        event.preventDefault();
        if(settings.mode == "default") $(this).next(settings.box).toggle();
        else if(settings.mode == "slide") $(this).next(settings.box).stop(true, false).slideToggle(settings.timer);
        else if(settings.mode == "fade") $(this).next(settings.box).stop(true, false).fadeToggle(settings.timer);
        else $(this).next(settings.box).toggle();
      });
    });
  };
})(jQuery);