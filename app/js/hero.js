if (window.matchMedia("(max-width: 575px)").matches) {
  // main
  let mainHeaderHeight = $(".main .header").outerHeight();
  let mainFooterHeight = $(".main .footer").outerHeight();
  let mainBgHeight = $(".main .main__col:first").outerHeight();
  let mainTotalHeight = mainHeaderHeight + mainFooterHeight + mainBgHeight;
  $(".main .main__hero").css({ height: `calc(100dvh - ${mainTotalHeight}px)` });
  // main
  
} else {
  // main
  let mainHeaderHeight = $(".main .header").outerHeight();
  let mainFooterHeight = $(".main .footer").outerHeight();
  let mainTotalHeight = mainHeaderHeight + mainFooterHeight;
  $(".main .main__hero").css({ height: `calc(100dvh - ${mainTotalHeight}px)` });
  // main

}
$(".question__item").each(function (index) {
  // inner
  let innerHeaderHeight = $(this).find(".header").outerHeight();
  let innerFooterHeight = $(this).find(".footer").outerHeight();
  let innerFormTopHeight = $(this).find(".question__top").outerHeight();
  let innerTotalHeight = innerHeaderHeight + innerFooterHeight + innerFormTopHeight;
  $(this).find(".form-wrap").css({ height: `calc(100dvh - ${innerTotalHeight}px - 30px)` });
  // inner
});



