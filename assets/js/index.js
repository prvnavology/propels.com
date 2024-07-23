// Header JS Start

$(document).ready(function () {
  $(".menu-icon").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".close-icon").click(function () {
    $("body").removeClass("menuToggle");
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
      $("header").addClass("fixed-header");
      $("header").addClass("visible-title");
    } else {
      $("header").removeClass("fixed-header");
      $("header").removeClass("visible-title");
    }
  });
});

// Header JS End

// Counter JS Start
let count = document.querySelectorAll(".count");
let arr = Array.from(count);
arr.map(function (item) {
  let startnumber = 0;
  function counterup() {
    startnumber++;
    item.innerHTML = startnumber;
    if (startnumber == item.dataset.number) {
      clearInterval(stop);
    }
  }
  let stop = setInterval(function () {
    counterup();
  }, 5);
});
// Counter JS End

// Slick Slider JS Start
$(document).ready(function(){
    $(".banner-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });
});


// Slick Slider JS End

// //Cookies JS Start
function SetCookie(cookieName, cookieValue, nDays) {
  "use strict";
  var today = new Date();
  var expire = new Date();
  if (nDays == null || nDays == 0) nDays = 1;
  expire.setTime(today.getTime() + 3600000 * 24 * nDays);
  document.cookie =
    cookieName +
    "=" +
    escape(cookieValue) +
    ";expires=" +
    expire.toGMTString() +
    "; path=/";
}
function ReadCookie(cookieName) {
  "use strict";
  var theCookie = " " + document.cookie;
  var ind = theCookie.indexOf(" " + cookieName + "=");
  if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
  if (ind == -1 || cookieName == "") return "";
  var ind1 = theCookie.indexOf(";", ind + 1);
  if (ind1 == -1) ind1 = theCookie.length;
  return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
}
function DeleteCookie(cookieName) {
  "use strict";
  var today = new Date();
  var expire = new Date() - 30;
  expire.setTime(today.getTime() - 3600000 * 24 * 90);
  document.cookie =
    cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
}
function AcceptCookies() {
  SetCookie("sgCookies", true, 30);
  jQuery("#cookie-bar").hide();
}
$(document).ready(function (e) {
  var toTop = $(
    "<div id='cookie-bar'><div id='contentcookie'><p>We use cookies and similar technologies to recognize your repeat visits and preferences, to measure the effectiveness of campaigns, and improve our websites. For settings and more information about cookies, view our <a href='#'>Cookie Policy</a>. By clicking “I accept” on this banner or using our site, you consent to the use of cookies.</p><button id='Cookie' tabindex=1 onclick='AcceptCookies();'>accept </button><div class='clear'></div></div></div>"
  ).appendTo("body");
  if (!ReadCookie("sgCookies")) {
    //If the cookie has not been set
    jQuery("#cookie-bar").show();
  } else {
    jQuery("#cookie-bar").hide();
  }
});
// //Cookies JS Start
