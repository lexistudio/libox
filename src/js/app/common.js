define(["lib/jquery", "lib/waypoints"], function() {
  $(function() {
    alert("libox - успешно установлен");
    points();
  });

  function points() {
    $(".js-point").waypoint({
      handler: function(w) {
        console.log(w);
      },
      offset: "10%"
    });
  }
})