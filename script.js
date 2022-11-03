$(document).ready(function () {
  let tabLink = $(".tab a");

  tabLink.on("click", function (e) {
    e.preventDefault();
    $(".tab").removeClass("active");
    $(this).parent().addClass("active");

    $(".tabs__content").removeClass("actived");
    let hrefs = $(this).attr("href");
    $(hrefs).addClass("actived");
  });
});
