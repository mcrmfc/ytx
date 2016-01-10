var applyLinks = function() {
    var link = '<a class="ytx" style="display: inline; background-color: red; color: blue;" href="#">YTX</a>'
    $('a[href*="watch"]').each(function() {
        $(this).parent().append(link);
        $(this).parent().find('.ytx').click(function() {
            var videoUrl = $(this).siblings('a').attr('href');
            chrome.extension.sendRequest(videoUrl);
        });
    });
}

var removeLinks = function() {
    $('.ytx').remove();
}

var delayedExec = function(after, fn) {
    var timer;
    return function() {
        timer && clearTimeout(timer);
        timer = setTimeout(fn, after);
    };
};

var scrollStopper = delayedExec(500, function() {
    console.log('stopped it');
    removeLinks();
    applyLinks();
});

// onload
$(function() {
    applyLinks();
    chrome.extension.sendRequest('connect');
});

// onscroll
$(document).scroll(function(){
    scrollStopper();
});
