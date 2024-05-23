$(document).on("click", ".trigger-js", function (e) {
  e.preventDefault();
  let triggerDataName = $(this).attr("data-name");

  
  $(".called-js").each(function () {
    let $this = $(this);
    let calledDataName = $(this).attr("data-name");
    
    if (calledDataName == triggerDataName) {
      $this.addClass("active");
      $(".question__item").not($this).removeClass("active");
      $(".question__item").not($this).css("transition",'none');
    } else {
      $this.removeClass("active");
    }
  });
  $(".called-js.active").find('input').attr('requireder');

    var $input = $(".called-js.active .input-tg-js");

    function checkInput() {
      var value = $input.val();
      if (typeof value === "undefined" || value.trim() === "") {
        $input.parents(".question__item").find('.callback .btn').addClass('disabled');
      } else {
        $input.parents(".question__item").find('.callback .btn').removeClass("disabled");
      }
    }

    // Проверяем инпут при загрузке страницы
    checkInput();

    // Проверяем инпут при изменении его значения
    $input.on("input", checkInput);
  

});




