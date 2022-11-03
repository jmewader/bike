$(document).ready(function () {
  let tabItem = $(".tab");

  tabItem.on("click", function (e) {
    $(".tab.active").removeClass("active");
    $(this).addClass("active");

    $(".tabs__content.actived").removeClass("actived");
    $(".tabs__content[data-num=" + $(this).index() + "]").addClass("actived");
  });
});
