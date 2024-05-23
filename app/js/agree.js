$(".agree-callback-js").on("click", function () {
  if ($(this).find("input").is(":checked")) {
    $(".callback__item").removeClass("disabled");
  } else {
    $(".callback__item").addClass("disabled");
  }
});

