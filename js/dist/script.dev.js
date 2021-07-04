"use strict";

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var rec = header.getBoundingClientRect();
  var position = rec.top / window.innerHeight * 100 + 50;
  document.querySelectorAll(".slice").forEach(function (div) {
    div.style.height = "".concat(position, "vh"); // console.log(position)

    if (position <= 1) {
      // div.style.height = "0px";
      document.querySelector(".nameTitle").style.display = "none";
    } else if (position > 1) {
      document.querySelector(".nameTitle").style.display = "block";
    }

    if (position <= 1) {
      div.style.height = "0px";
    }
  }); // console.log(position+50)
  // ############### parallax earth ###############

  var box = document.querySelector(".parallaxEarth");
  var scrolled = box.getBoundingClientRect();
  var scrollPoss = scrolled.top * 0.5;
  var background = document.querySelectorAll(".island12, .island13");
  background.forEach(function (img) {
    img.style.top = scrollPoss + "px";
  });
  var background2 = document.querySelectorAll(".island1, .island2");
  background2.forEach(function (img) {
    img.style.top = scrollPoss * 2 + "px";
  });
  var background3 = document.querySelectorAll(".island3, .island7");
  background3.forEach(function (img) {
    img.style.top = scrollPoss * 2.5 + "px";
  });
  var background4 = document.querySelectorAll(".island4, .island8");
  background4.forEach(function (img) {
    img.style.top = scrollPoss * 3 + "px";
  });
  var background5 = document.querySelectorAll(".island5, .island9, .island10");
  background5.forEach(function (img) {
    img.style.top = scrollPoss * 3.5 + "px";
  });
  var background6 = document.querySelectorAll(".island6, .island11");
  background6.forEach(function (img) {
    img.style.top = scrollPoss * 4 + "px";
  });
  var cloud = document.querySelector(".clouds");
  cloud.style.top = scrollPoss * 0.5 + "px";
  var earth = scrolled.top; // console.log(earth);

  if (earth < -300) {
    document.querySelectorAll("#flower1, #flower2, #flower3, #flower4").forEach(function (img) {
      img.classList.remove("bounce-4");
    });
  } else if (earth < -41.85) {
    document.querySelectorAll("#flower1, #flower2, #flower3, #flower4").forEach(function (img) {
      img.classList.add("bounce-4");
    });
  } else if (earth > -300) {
    document.querySelectorAll("#flower1, #flower2, #flower3, #flower4").forEach(function (img) {
      img.classList.remove("bounce-4");
    });
  } // ############### parallax water ###############


  var parallaxWater = document.querySelector(".parallaxWater");
  var scrolledWater = parallaxWater.getBoundingClientRect();
  var water = scrolledWater.top * 0.5;
  var backwater = document.querySelector(".waterline2");
  backwater.style.top = water * 0.3 + "px";
  var backwater2 = document.querySelector(".waterline3");
  backwater2.style.top = water * 0.4 + "px"; // ############### parallax air ###############

  var mountain1 = document.querySelector(".mountain1");
  var mountain2 = document.querySelector(".mountain2");
  var mountain3 = document.querySelector(".mountain3");
  var mountain4 = document.querySelector(".mountain4");
  var parallaxAir = document.querySelector(".air");
  var scrollAir = parallaxAir.getBoundingClientRect();
  var air = scrollAir.top;
  var parallaxWord = document.querySelector(".parallaxWord");
  var word = scrollAir.top / 10;

  if (air < 0 && air > -950) {
    mountain1.style.paddingLeft = Math.abs(air * 0.4) + "px";
    mountain2.style.paddingLeft = Math.abs(air) + "px";
    mountain3.style.paddingRight = Math.abs(air * 0.2) + "px";
    mountain4.style.paddingRight = Math.abs(air) + "px";
  } else if (air <= -950) {
    air = -950;
    mountain1.style.paddingLeft = Math.abs(air * 0.4) + "px";
    mountain2.style.paddingLeft = Math.abs(air) + "px";
    mountain3.style.paddingRight = Math.abs(air * 0.2) + "px";
    mountain4.style.paddingRight = Math.abs(air) + "px";
    parallaxWord.style.bottom = Math.abs(word) - 155 + "vh";
  } // console.log(air);


  var words = document.querySelectorAll("#word1, #word2, #word3, #word4, #word5, #word6, #word7, #word8, #word9");
  var halfVh = window.innerHeight * 0.5;
  words.forEach(function (wordEl) {
    var selectWord = document.querySelector("#".concat(wordEl.id));
    var poss = selectWord.getBoundingClientRect();
    var wordTop = poss.top - 50;
    var wordBttm = poss.bottom;
    var realBttm = wordBttm - halfVh; // wordEl.style.visibility = "hidden";

    console.log(realBttm);

    if (realBttm < 200) {
      wordEl.classList.add("fade-in");
      wordEl.style.visibility = "visible";
    } else if (realBttm > 200) {
      wordEl.classList.remove("fade-in");
      wordEl.style.visibility = "hidden";
    }

    if (wordTop < 0) {
      wordEl.classList.remove("fade-in");
      wordEl.classList.add("fade-out");
      wordEl.style.visibility = "visible";
    }

    if (wordTop > 0) {
      wordEl.classList.remove("fade-out"); // wordEl.style.visibility = "hidden";
    }
  });
}, false); // ############### menu burger ###############

var burger = document.querySelector("#burger");
var burgerNav = document.querySelector(".burgerNav");
burger.addEventListener("click", function () {
  var burgerChanged = burger.className; // console.log(burgerChanged);

  if (burgerChanged === "change") {
    // console.log("bye");
    burger.classList.remove("change");
    burgerNav.classList.remove("scale-in-tr");
    burgerNav.classList.add("scale-out-tr");
  }

  if (burgerChanged === "" || !burgerChanged) {
    // console.log("click");
    burger.classList.add("change");
    burgerNav.style.display = "flex";
    burgerNav.classList.add("scale-in-tr");
    burgerNav.classList.remove("scale-out-tr");
  }
}); // ############### flower animation ###############

$(document).ready(function () {
  $("#flower1, #flower2, #flower3, #flower4").hover(function () {
    $(this).attr("src", "public/img/earth/flowerOnce.gif");
  }, function () {
    $(this).attr("src", "public/img/earth/flowerFixed.gif");
  });
}); // ############### fire carousel launcher ###############

var fire = document.querySelector(".fire");
var buttonX = document.querySelector(".buttonX");
var scene = document.querySelector(".scene");
var sceneBG = document.querySelector(".flame");
var ambers = document.querySelector(".ambers");
var amberBG = document.querySelector(".amberBG");
fire.addEventListener("click", function () {
  if (fire.style.display = "flex") {
    fire.style.display = "none";
    amberBG.style.display = "none";
    scene.style.display = "flex";
    sceneBG.style.position = "sticky";
    ambers.style.background = "linear-gradient(180deg, rgba(254,252,253,0) 5%, rgba(28,28,28,0.45) 15%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.45) 70%, rgba(254,252,253,0) 100%)";
    ambers.style.maskImage = "none";
  }
});
buttonX.addEventListener("click", function () {
  if (scene.style.display = "flex") {
    fire.style.display = "flex";
    amberBG.style.display = "flex";
    sceneBG.style.position = "sticky";
    ambers.style.background = "url(../public/img/fire/ambersFull.png)";
    ambers.style.maskImage = "linear-gradient(to bottom, transparent 10%, rgba(0, 0, 0, 0.5) 15%, #000000 30%)";
    scene.style.display = "none";
  }
}); // ############### fire carousel ###############

var carousel = document.querySelector(".carousel");
var cellCount = 6;
var selectedIndex = 0;
var cell = 1;
document.querySelector(".cell".concat(cell)).style.display = "block";

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = "translateZ(-288px) rotateY(" + angle + "deg)";
}

var prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function () {
  selectedIndex--;
  rotateCarousel();

  if (cell <= 6 && cell != 1) {
    cell--;
  } else if (cell == 1) {
    document.querySelector(".cell".concat(cell)).style.display = "none";
    cell = 6;
  } // console.log(cell);


  document.querySelector(".cell".concat(cell)).style.display = "block";
  document.querySelector(".cell".concat(cell + 1)).style.display = "none";
  document.querySelector(".cell".concat(cell - 1)).style.display = "none";
});
var nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function () {
  selectedIndex++;
  rotateCarousel();

  if (cell <= 5) {
    cell++;
  } else if (cell == 6) {
    document.querySelector(".cell".concat(cell)).style.display = "none";
    cell = 1;
  } else if (cell == 0) {
    cell = 1;
  }

  document.querySelector(".cell".concat(cell)).style.display = "block";
  document.querySelector(".cell".concat(cell - 1)).style.display = "none";
  document.querySelector(".cell".concat(cell + 1)).style.display = "none";
}); // ############### water line ###############

var indexDrop = 13;
var waterline1 = document.querySelector(".waterline1");
var waterline2 = document.querySelector(".waterline2");
var waterline3 = document.querySelector(".waterline3");
var topValue;
var imgValue;
var i = 0;

function createImageNode(width, margin) {
  var div = document.createElement("div");
  var img = document.createElement("img");
  img.src = "./public/img/water/water".concat(imgValue, ".png");
  img.style.width = "".concat(width, "vw");
  img.style.margin = "1vw ".concat(margin, "vw");
  div.style.position = "relative";
  div.style.top = "".concat(topValue, "px");
  div.classList.add("tooltip", "triangle".concat(i));
  div.appendChild(img);
  return div;
}

function createIconNode(div) {
  var icon = document.createElement("div");
  icon.style.background = "url(\"./public/img/water/icon/icon".concat(i, ".png\")");
  icon.style.position = "absolute";
  icon.style.backgroundSize = "cover";
  icon.style.backgroundPosition = "center";
  icon.classList.add("icon", "icon".concat(i));
  div.prepend(icon); // console.log(top);

  return div;
}

function createTooltipNode(div) {
  var toolTip = document.createElement("div");
  var h1 = document.createElement("h1");
  var p = document.createElement("p");
  h1.innerHTML = "toto";
  p.innerHTML = "coucou";
  toolTip.classList.add("tooltiptext", "waterInfo");
  toolTip.append(h1, p);
  div.appendChild(toolTip);
  return div;
}

function rand(top) {
  topValue = Math.floor(Math.random() * "".concat(top));
  imgValue = Math.floor(Math.random() * 3 + 1);
}

for (i = 0; i < indexDrop; i++) {
  var div = waterline1.lastChild;
  rand(60);
  waterline1.appendChild(createImageNode('', ''));

  if (div == null) {
    div = waterline1.firstChild;
    createIconNode(div);
    createTooltipNode(div);
  } else {
    div = waterline1.lastChild;
    createIconNode(div);
    createTooltipNode(div);
  }

  var toolTipText = document.querySelector(".waterInfo");
  rand(73);
  waterline2.appendChild(createImageNode(8, -1.6));

  if (i % 2 == 0) {
    rand(73);
    waterline2.appendChild(createImageNode(8, -1.6));
  }

  rand(75);
  waterline3.appendChild(createImageNode(6, -1.2));
  rand(75);
  waterline3.appendChild(createImageNode(6, -1.2));
  toolTipText.style.right = '-11vw'; // console.log(topValue);
}

waterline1.lastChild.lastChild.style.right = '-4vw';