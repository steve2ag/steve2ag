/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// jQery for animated gifs
$(function() {
    $("#imgComputerV").hover(
        function() {
            $(this).attr("src", "./images/portfolio/camus-seg-gif.gif");
        },
        function() {
            $(this).attr("src", "./images/portfolio/camus-seg-static.PNG");
        }
    );
});

$(function() {
    $("#imgAnalytics").hover(
        function() {
            $(this).attr("src", "./images/portfolio/analytics-gif.gif");
        },
        function() {
            $(this).attr("src", "./images/portfolio/analytics-static.PNG");
        }
    );
});

$(function() {
    $("#imgMiscellaneous").hover(
        function() {
            $(this).attr("src", "./images/portfolio/sierpinski-gif.gif");
        },
        function() {
            $(this).attr("src", "./images/portfolio/sierpinski-static.gif");
        }
    );
});

$(function() {
    $("#imgCAMUS").hover(
        function() {
            $(this).attr("src", "./images/portfolio/camus-seg-gif.gif");
        },
        function() {
            $(this).attr("src", "./images/portfolio/camus-seg-static.PNG");
        }
    );
});

$(function() {
    $("#imgRX").hover(
        function() {
            $(this).attr("src", "./images/portfolio/rx-gif.gif");
        },
        function() {
            $(this).attr("src", "./images/portfolio/rx-static.PNG");
        }
    );
});

$(function() {
    $("#FER").hover(
        function() {
            $(this).attr("src", "./images/portfolio/FER-gif1.gif");
        },
        function() {
            $(this).attr("src", "./images/portfolio/Landmarks(1).jpg");
        }
    );
});
