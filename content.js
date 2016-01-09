function applyLinks() {
    var link = '<a class="ytx" style="display: inline; background-color: red; color: blue;" href="#">YTX</a>'
    $('a[href*="watch"]').each(function() {
        $(this).parent().append(link);
        $(this).parent().find('.ytx').click(function() {
            var videoUrl = $(this).siblings('a').attr('href');
            chrome.extension.sendRequest(videUrl);
        });
    });
}

function removeLinks(){
    $('.ytx').remove();
}

// onload
$(function() {
    applyLinks();
    chrome.extension.sendRequest('connect');
});

// onscroll
$(document).scroll(function(){
    removeLinks();
    applyLinks();
});
