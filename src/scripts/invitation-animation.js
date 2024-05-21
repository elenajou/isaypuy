function playMusic() {
  document.getElementById("my_audio").play();
}

document.getElementById("msg-btn").click();
console.log("clicked");

/* Redirects the page to fridge.html on closing the confirmation modal. */
$("#abrirCarta").on("hidden.bs.modal", function () {
  $('.main-container').toggleClass("hide");

  setTimeout(() => {
    $('#flowers').toggleClass("hide");
    $('#flowers').toggleClass("addFadeup");
  }, 1000);
  setTimeout(() => {
    $('#cloud1').toggleClass("hide");
    $('#cloud1').toggleClass("addFadeup");
  }, 5000);
  setTimeout(() => {
    $('#cloud2').toggleClass("hide");
    $('#cloud2').toggleClass("addFadeup");
  }, 6000);
  setTimeout(() => {
    $('#savethedate').toggleClass("hide");
    $('#savethedate').toggleClass("addFadeup");
  }, 7000);
  setTimeout(() => {
    $('#puyisabel').toggleClass("hide");
    $('#puyisabel').toggleClass("addFadeup");
  }, 7000);
  setTimeout(() => {
    $('#enero2025').toggleClass("hide");
    $('#enero2025').toggleClass("addFadeup");
  }, 7000);
  setTimeout(() => {
    $('#sabado6pm').toggleClass("hide");
    $('#sabado6pm').toggleClass("addFadeup");
  }, 7000);
  setTimeout(() => {
    $('#cloud1').toggleClass("addFloat");
    $('#cloud2').toggleClass("addFloat");
    $('#puyisabel').toggleClass("addFloat");
  }, 10000);
});
