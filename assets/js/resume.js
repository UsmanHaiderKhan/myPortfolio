(function ($) {
  "use strict"; // Start of use strict

  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  var delay = 1000;
  $(".progress-bar").each(function (i) {
    $(this).delay(delay * i).animate({ width: $(this).attr('aria-valuenow') + '%' }, delay);

    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: delay,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now) + '%');
      }
    });
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
