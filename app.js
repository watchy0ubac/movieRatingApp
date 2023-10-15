$("#submit-movie").on("click", function (e) {
  let title = $(".title").val();
  let rating = $(".rating").val();
  $("ul").append(
    `<li>${title} rated: ${rating}<button class='delete-btn'>Remove</button></li>`
  );
});
$("ul").on("click", "button", function (e) {
  $(this).parent().remove();
});
