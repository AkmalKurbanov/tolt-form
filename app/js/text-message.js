$(document).ready(function () {
  $(".text-message-mobile").each(function () {
    let $this = $(this);
    let $text = $this.find(".text-message-mobile__content");
    let fullText = $text.text();
    let truncatedText =
      fullText.slice(0, 40) + (fullText.length > 40 ? "..." : "");

    // Изначально показываем сокращенный текст, если он длиннее 40 символов
    if (fullText.length > 40) {
      $text.text(truncatedText);
      $this.data("isTruncated", true); // Сохраняем состояние сокращения текста
    } else {
      $this.data("isTruncated", false);
    }

    // Обработчик клика для переключения текста
    $this.on("click", function () {
      let isTruncated = $this.data("isTruncated");
      $(this).toggleClass('open');
      if (isTruncated) {
        $text.text(fullText);
        $this.data("isTruncated", false);
      } else {
        $text.text(truncatedText);
        $this.data("isTruncated", true);
      }
    });
  });
});
