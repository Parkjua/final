$(window).ready(function () {
  draw(30, ".pie-chart1", "#523FFF");
  draw(20, ".pie-chart2", "#FF003D");
  draw(10, ".pie-chart3", "#fff");
});

function draw(max, classname, colorname) {
  var i = 1;
  var func1 = setInterval(function () {
    if (i < max) {
      color1(i, classname, colorname);
      i++;
    } else {
      clearInterval(func1);
    }
  }, 10);
}
function color1(i, classname, colorname) {
  $(classname).css({
    background:
      "conic-gradient(" + colorname + " 0% " + i + "%, #1b162a " + i + "% 0%)",
  });
}

function replay() {
  draw(110, ".pie-chart1", "#523FFF");
  draw(110, ".pie-chart2", "#FF003D");
  draw(110, ".pie-chart3", "#fff");
}
