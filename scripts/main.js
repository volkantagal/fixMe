(function ($) {
  "use strict";

  var defaultOptions = {
    until: 'body'
  };

  $.fn.fixMe = function (options) {
    options = options ? options : defaultOptions;
    var $contentElement = this;
    $.init($contentElement, options);
  };

  $.init = function ($contentElement, options) {
    $.setEvent($contentElement, options);
  };

  $.setEvent = function ($contentElement, options) {
    var windowTopScroll = $(window).scrollTop();
    var windowTop = 0;
    var windowHeight = $(window).height();
    var contentTop = $contentElement.offset().top
    var direction = 'down';
    var paddingTop = 10;
    var $untilElement = $(options.until);

    $(window).on('scroll', function () {
      windowTopScroll = $(window).scrollTop();
      windowHeight = $(window).height();

      direction = windowTopScroll > windowTop ? 'down' : 'up';

      if ($(window).scrollTop() < contentTop) {
        $contentElement.removeAttr('style').removeClass('active');
        return false;
      } else if (windowTopScroll + windowHeight >= $untilElement.offset().top + $untilElement.outerHeight()) {
        $contentElement.removeClass('active');
        return false;
      }

      if ($(window).height() > $contentElement.outerHeight()) {
          $contentElement.addClass('fix').css({ 'width': '224px', 'position': 'absolute', 'top': windowTopScroll + paddingTop + 'px', 'bottom': 'initial' });
      } else if ($(window).scrollTop() + $(window).height() >= $contentElement.offset().top + $contentElement.outerHeight() && direction === 'down') {
          $contentElement.addClass('fix').css({ 'width': '224px', 'position': 'absolute', 'top': windowTopScroll + windowHeight - $contentElement.outerHeight() - 10});
      } else if ($(window).scrollTop() < $contentElement.offset().top && direction === 'up') {
          $contentElement.addClass('fix').css({ 'width': '224px', 'position': 'absolute', 'top': windowTopScroll + paddingTop + 'px', 'bottom': 'initial' });
      }

      windowTop = $(window).scrollTop();
    });
  };
})(jQuery);