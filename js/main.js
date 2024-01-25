$(".open").click(() => {
  $(".menuBar").animate({ left: "0" }, 100);
  $(".open,.home-title").animate(
    { marginLeft: $(".menuBar").innerWidth() },
    100
  );
});
$(".fa-xmark").click(() => {
  $(".menuBar").animate({ left: "-100%" }, 100);
  $(".open,.home-title").animate({ marginLeft: 0 }, 100);
});

$(".contant .title").click((e) => {
  $(".inner").not($(e.target).next()).slideUp(300);
  $(e.target).next().slideToggle(300);
});

let countDownDate = new Date("Jan 31, 2024 15:37:25").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $(".day").text(`${days} D`);
  $(".hour").text(`${hours} h`);
  $(".min").text(`${minutes} m`);
  $(".sec").text(`${seconds} s`);
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".timeOut .contant .container").innerHTML =
      "Party Now";
  }
}, 1000);

let maxLength = 100;
$("textarea").keyup((e) => {
  let length = $(e.target).val().length;
  let countLength = maxLength - length;
  $(".countLength").text(countLength);
  if (countLength <= 0) {
    $(".countLength").text("your available character finished");
  }
});
