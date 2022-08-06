window.onscroll = function () {
  let offsetAbout = document.querySelector("#about").offsetTop;
  let numBars = document.querySelectorAll(".progress-bar");

  if (window.scrollY >= offsetAbout) {
    for (let i = 0; i < numBars.length; i++) {
      numBars[i].style.width = numBars[i].dataset.value;
    }
  }
};

$(".wheel").click(function () {
  let offsetAbout = $("#about").offset().top;
  $("html, body").animate({ scrollTop: offsetAbout }, 1000);
});

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();
  let offsetAbout = $("#about").offset().top;

  if (wScroll > offsetAbout - $(".navbar").outerHeight(true)) {
    $(".navbar").addClass("bg-white");
    $(".navbar").removeClass("bg-transparent");
    $(".navbar-brand img").attr("src", "images/logo-red.png");
    $(".navbar-light .navbar-nav .nav-link a").css("color", "white");
  } else if (wScroll < offsetAbout - $(".navbar").outerHeight(true)) {
    $(".navbar").addClass("bg-transparent");
    $(".navbar").removeClass("bg-white");
    $(".navbar-brand img").attr("src", "images/logo-white.png");
  }
});

let colorItem = $(".colors span");
colorItem.eq(0).css("backgroundColor", "#09c");
colorItem.eq(1).css("backgroundColor", "#60992D");
colorItem.eq(2).css("backgroundColor", "#D00000");
colorItem.eq(3).css("backgroundColor", "#52489C");

colorItem.click(function (e) {
  let bgColor = $(e.target).css("backgroundColor");
  $("h2").css("color", bgColor);
  $("h3").css("color", bgColor);
  $("h4").css("color", bgColor);
  $("h5").css("color", bgColor);
  $("i").css("color", bgColor);
});

$(".cogs").click(function () {
  let numWidth = $(".colors").innerWidth();
  let numLeft = $(".sidebarColors").css("left");

  if (numLeft == `${-numWidth}px`) {
    $(".sidebarColors").animate({ left: 0 }, 500);
  } else {
    $(".sidebarColors").animate({ left: -numWidth }, 500);
  }
});

$(".navbar-nav .nav-item a[href^='#']").click(function (e) {
  let sectionHref = $(e.target).attr("href");
  let sectionOffset = $(sectionHref).offset().top;
  $("html, body").animate({ scrollTop: sectionOffset }, 1000);

  $(e.target).addClass("active");
  if ($(e.target).parent().siblings().children().hasClass("active")) {
    $(e.target).parent().siblings().children().removeClass("active");
  }
});

$(document).ready(function () {
  $(".loading").fadeOut(1000);

  $(".carouselImgs").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    focusOnSelect: true,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
          autoplay: true,
          focusOnSelect: true,
          fade: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
          autoplay: true,
          focusOnSelect: true,
          fade: true,
        },
      },
    ],
  });
});

$(".to-home").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500);
});

window.addEventListener("scroll", function () {
  
  let sections = document.querySelectorAll("section");
  let navLink = document.querySelectorAll(".nav-link");
  let navbar = document.querySelector(".navbar");

  let lengthSec = sections.length;
  while (
    --lengthSec &&
    window.scrollY + navbar.offsetHeight < sections[lengthSec].offsetTop
  ) {}
  navLink.forEach((el) => {
    el.classList.remove("active");
    navLink[lengthSec].classList.add("active");
  });
});
