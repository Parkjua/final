var count = 0;
var frames = [
  "W",
  "WE",
  "WEL",
  "WELC",
  "WELCO",
  "WELCOM",
  "WELCOME ",
  "WELCOME !\n",
  "WELCOME ! \nO",
  "WELCOME !\n OT",
  "WELCOME !\n OTT",
  "WELCOME !\n OTTI",
  "WELCOME !\n OTTIN",
  "WELCOME !\n OTTING",
  "WELCOME !\n OTTING P",
  "WELCOME !\n OTTING PL",
  "WELCOME !\n OTTING PLA",
  "WELCOME !\n OTTING PLAT",
  "WELCOME !\n OTTING PLATF",
  "WELCOME !\n OTTING PLATFO",
  "WELCOME !\n OTTING PLATFOR",
  "WELCOME !\n OTTING PLATFORM",
];
var totalCount = frames.length;
var num = 0;
setInterval(function () {
  if (count == totalCount) {
    if (num < 20) {
      num++;
      if (num < 5) {
        //document.getElementById("text2").style.visibility="visible";
        document.getElementById("text2").style.color = "white";
      } else if (num < 10) {
        //document.getElementById("text2").style.visibility="hidden";
        document.getElementById("text2").style.color = "rgba(255,255,255,0.5)";
      } else if (num < 15) {
        //document.getElementById("text2").style.visibility="visible";
        document.getElementById("text2").style.color = "white";
      } else if (num < 20) {
        //document.getElementById("text2").style.visibility="hidden";
        document.getElementById("text2").style.color = "rgba(255,255,255,0.5)";
      }
    } else {
      num = 0;
      count = 0;
    }
  } else {
    document.getElementById("text").innerText = frames[count % totalCount];
    count++;
  }
}, 100);
