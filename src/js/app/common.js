define(["lib/jquery", "lib/waypoints", "lib/lexispoler"], function() {
  $(function() {
    alert("libox - успешно установлен");
    points();
    spoler();
  });

  function points() {
    $(".js-point").waypoint({
      handler: function(w) {
        console.log(w);
      },
      offset: "10%"
    });
  }

  function spoler() {
    $(".lexi-btn").lexispoler({
      mode: "fade"
    });
  }
})