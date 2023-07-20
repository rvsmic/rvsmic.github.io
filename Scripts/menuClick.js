show = true;

function menuSetup() {
  document.getElementById("menuButton").addEventListener("click",clickAction);
}

function clickAction() {
  show = !show;
  if(show) {
    document.getElementById("menuContent").style.transform = "scaleY(0)";
    document.getElementById("menuContent").style.opacity = "0";
    document.getElementById("menu").className = "";
    document.getElementById("menuButton").style.background = "#eb9d1e"
  } else {
    document.getElementById("menuContent").style.transform = "scaleY(1)";
    document.getElementById("menuContent").style.opacity = "1";
    document.getElementById("menu").className = "clicked";
    document.getElementById("menuButton").style.background = "#bd8120"
  }
}