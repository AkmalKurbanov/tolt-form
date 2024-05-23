import intlTelInput from "intl-tel-input";

document.querySelectorAll(".phone-js").forEach((el) => {
  PhoneDisplay(el);
});

function PhoneDisplay(input) {
  var iti = intlTelInput(input, {
    hiddenInput: "full_phone",
    nationalMode: true,

    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
      fetch("https://ipapi.co/json")
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          success(data.country_code);
        })
        .catch(function () {
          failure();
        });
    },
    
    preferredCountries: [
      "kg",
      "kz",
      "uz",
      "tj",
      "ru",
      "at",
      "be",
      "bg",
      "hu",
      "de",
      "gr",
      "dk",
      "ie",
      "es",
      "it",
      "cy",
      "lv",
      "lt",
      "lu",
      "mt",
      "nl",
      "pl",
      "pt",
      "ro",
      "sk",
      "si",
      "fi",
      "fr",
      "hr",
      "cz",
      "se",
      "ee",
    ],
  });

  const handleChange = () => {
    let text;
    if (input.value) {
      text = iti.isValidNumber();
      if (text) {
        $(input).parents(".input").addClass("success");
        $(input).parents(".input").removeClass("error");
        $(input).attr("value", iti.getNumber());
        $(input).val(iti.getNumber());

        $(".called-js.active .input-js").parents(".question__item").find('.callback .btn').removeClass("disabled");
        
        setTimeout(function () {
          $(input).parents(".input").removeClass("success");
        }, 2000);
      } else {
        $(input).parents(".input").addClass("error");
        $(input).parents(".input").removeClass("success");
        $(input).attr("value", iti.getNumber());
        $(".called-js.active .input-js").parents(".question__item").find('.callback .btn').addClass("disabled");
      }
    } else if (input.value == "") {
      $(input).parents(".input").removeClass("success");
      $(input).parents(".input").removeClass("error");
      $(".called-js.active .input-js").parents(".question__item").find('.callback .btn').addClass("disabled");
    } else {
      text = "Пожалуйста, введите действительный номер.";
    }
  };

  // listen to "keyup", but also "change" to update when the user selects a country
  // input.addEventListener('change', handleChange);
  input.addEventListener("keyup", handleChange);
}

$(".iti__country").on('click', function() {
  $(".phone-js").val("");
  $(".phone-js").next().val("");
});


