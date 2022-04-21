//preloader
$(window).bind("load", function () {
  jQuery("#loader").fadeOut("slow");
  jQuery("#preloader").delay(0).fadeOut();
});

//scroll to top script
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});

// Accordian script

$(".hide_box").hide();

// without arrow
// $(document).on('click', '.slide_box', function(){
//  $(this).find('.hide_box').slideToggle();
//  $(this).siblings().find('.hide_box').slideUp();

// });

//with arrow
$(document).on("click", ".slide_box", function () {
  $(this).find(".hide_box").slideToggle();
  if ($(this).hasClass("active")) {
    console.log("yes");
    $(this).removeClass("active");
  } else {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  }
  $(this).siblings().find(".hide_box").slideUp();
});

//custom modal
function openModalBox() {
  let modal = $(".modal_wrap, #mask");
  $(".open-modal").on("click", function () {
    let selectImg = $(this).parent().find(".selected").attr("src");
    $(".setImg").attr("src", selectImg);
    modal.fadeIn(300);
  });
  $(".close-modal, #mask").on("click", function () {
    modal.fadeOut(800);
  });
}
openModalBox();
