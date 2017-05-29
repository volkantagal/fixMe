(function ($) {
  "use strict";

  /*var defaultOptions = {
    contentWidth: 960,
    itemClass: '.categoryBanner',
    gutter: 16
  };*/

  $.fn.fixMe = function (options) {
    var $contentElement = this;
    $.init($contentElement);
  };

  $.init = function ($contentElement) {
    $.setEvent($contentElement);
  };

  $.setEvent = function ($contentElement) {
    var windowTopScroll = $(window).scrollTop();
    var windowTop = 0;
    var windowHeight = $(window).height();
    var contentTop = $contentElement.offset().top
    var direction = 'down';
    var paddingTop = 10;

    $(window).on('scroll', function () {
      windowTopScroll = $(window).scrollTop();
      windowHeight = $(window).height();

      direction = windowTopScroll > windowTop ? 'down' : 'up';

      if ($(window).scrollTop() < contentTop) {
        $contentElement.removeAttr('style');
        return false;
      }

      if ($(window).scrollTop() + $(window).height() >= contentTop + $contentElement.outerHeight() && direction === 'down') {
          $contentElement.css({ 'width': '224px', 'position': 'absolute', 'top': windowTopScroll + windowHeight - $contentElement.outerHeight() - 10});
      } else if ($(window).scrollTop() < $contentElement.offset().top && direction === 'up') {
          $contentElement.css({ 'width': '224px', 'position': 'absolute', 'top': windowTopScroll + paddingTop + 'px', 'bottom': 'initial' });
      }

      windowTop = $(window).scrollTop();
    });
  };
})(jQuery);