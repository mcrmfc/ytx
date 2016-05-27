var applyLinks = function() {
    var elems = document.querySelectorAll('a[href*="watch"]')
    for(i=0; i<elems.length; i++) {
        (function(elem) {
            var link_elem = document.createElement('a');
            link_elem.style.cssText = "display: inline; background-color: red; color: blue;";
            link_elem.className = 'ytx';
            link_elem.href = '#';
            link_elem.innerHTML = 'YTX'

            elem.parentElement.appendChild(link_elem);
            link_elem.addEventListener("click", function() {
                var videoUrl = elem.getAttribute('href');
                chrome.extension.sendRequest(videoUrl);
            });
        })(elems[i]);
    }
}

var removeLinks = function() {
    var ytxs = document.getElementsByClassName('ytx');
    while(ytxs[0]) {
        ytxs[0].parentNode.removeChild(ytxs[0]);
    }
}

var delayedExec = function(after, fn) {
    var timer;
    return function() {
        timer && clearTimeout(timer);
        timer = setTimeout(fn, after);
    };
};

var scrollStopper = delayedExec(500, function() {
    removeLinks();
    applyLinks();
});

// dom ready
document.addEventListener("DOMContentLoaded", function() {
    applyLinks();
    chrome.extension.sendRequest('connect');
});

// onscroll
document.addEventListener('scroll', scrollStopper);
