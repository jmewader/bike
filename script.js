$(document).ready(function () {
  var mediaQuery = window.matchMedia("(min-width: 501px)");

  if (mediaQuery.matches) {
    let tabItem = $(".tab");

    tabItem.on("click", function (e) {
      $(".tab.active").removeClass("active");
      $(this).addClass("active");

      $(".tabs__content.actived").removeClass("actived");
      $(".tabs__content[data-num=" + $(this).index() + "]").addClass("actived");
    });
  }
});

$(document).ready(function () {
  $(".accordion-item__button").click(function () {
    const parent = $(this).parent();

    if (parent.hasClass("accordion-item--active")) {
      parent.removeClass("accordion-item--active");
    } else {
      $(".accordion-item").removeClass("accordion-item--active");
      parent.addClass("accordion-item--active");
    }
  });
});
