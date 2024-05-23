$(".btn-start-js").on("click", function () {
  $(this).parents(".main").addClass("start");
  $(".main__hero .aos-init").removeClass("aos-animate");
  $(".main .aos-init, .question__item:first .aos-init").removeClass(
    "aos-animate"
  );

  setTimeout(function () {
    $(".main").addClass("hide");
    $(".question").addClass("show");
    $(".question__item:first").addClass("active");
    $(".question__item:first .aos-init").addClass("aos-animate");
  }, 1500);
});

$(".label-js").on("click", function () {
  let $question = $(this).parents(".question__item");
  let $active = $question.next(".question__item");
  
  $(this).addClass("active");
  $(".label-js").not(this).removeClass("active");
  $question.find(".disabled-js").removeClass("disabled");
  $question.find(".disabled-js").addClass("is-blicked");


  $question.removeClass("active");
  $active.find(".aos-init").removeClass("aos-animate");

  setTimeout(function () {
    $active.addClass("active");
    $active.find(".aos-init").addClass("aos-animate");
  }, 500);

});

$(".label-square-js").on("click", function () {
  let $question = $(this).parents(".question__item");

  if ($(this).find("input").is(":checked")) {
    $(this).addClass("active");
  } else {
    $(this).removeClass("active");
  }
  if ($question.find("input").is(":checked")) {
    $question.find(".disabled-js").removeClass("disabled");
    $question.find(".disabled-js").addClass("is-blicked");
  } else {
    $question.find(".disabled-js").addClass("disabled");
    $question.find(".disabled-js").removeClass("is-blicked");
  }
});

$(".disabled-js").on("click", function () {
  let $question = $(this).parents(".question__item");
  let $active = $question.next(".question__item");

  $question.removeClass("active");
  $active.find(".aos-init").removeClass("aos-animate");

  setTimeout(function () {
    $active.addClass("active");
    $active.find(".aos-init").addClass("aos-animate");
  }, 500);
});

$(".back-js").on("click", function () {
  let $question = $(this).parents(".question__item");
  let $this = $question.prev();

  $question.removeClass("active");
  $(".aos-init").removeClass("aos-animate");
  setTimeout(function () {
    $(".aos-init").addClass("aos-animate");
    $this.addClass("active");
  }, 500);
});

$(".to-strat-js").on("click", function () {
  let $question = $(this).parents(".question__item");
  $question.removeClass("active");
  $(".main").removeClass("start hide");
  $(".main").find(".aos-init").addClass("aos-animate");
});

$(".re-election-js").on("click", function () {
  $(".callback input").val("");
});
