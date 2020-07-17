$(document).ready(function () {
   $('.row__burger').click(function (event) {
      $('.row__burger, .menu').toggleClass('active');
      $('body').toggleClass('lock');
   })

})


/* $('.menu').click(function (event) {
   $('.row__burger,.menu').removeClass('active');
   $('body').removeClass('lock');
}) */

