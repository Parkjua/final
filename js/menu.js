document.addEventListener("DOMContentLoaded", function () {
  // console.log("ok");
  window.onscroll = function () {
    console.log(document.querySelector("html").scrollTop);
    if (document.querySelector("html").scrollTop > 100) {
      document.querySelector("header").style.top = "-80px";
    } else {
      document.querySelector("header").style.top = "0px";
    }
  };
  window.onmousemove = function (e) {
    if (e.clientY < 60) {
      document.querySelector("header").style.top = "0px";
    } else {
      document.querySelector("header").style.top = "-80px";
    }
  };
});
