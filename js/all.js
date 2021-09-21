$(document).ready(function () {
  $('.ham').on('click', function () {
    $('body').toggleClass('menu-show');
  });
  $('.topup').on('click', function () {
    $('body').scrollTop();
  });
  $('.fa-heart').on('click', function () {
    $(this).toggleClass('fas');
  });
});