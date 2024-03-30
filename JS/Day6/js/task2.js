$(function () {
    var fade = $('.fade');

    (function _loop(idx) {//_loop is a function that takes an index and sets the next image to be visible after 100ms
        fade.removeClass('imVisible').eq(idx).addClass('imVisible');//eq() method returns an element with a specific index
        setTimeout(function () {
            _loop((idx + 1) % fade.length);//_loop is called again with the next index and the process repeats
        }, 100);
    }(0));//_loop is called with an initial index of 0
});
