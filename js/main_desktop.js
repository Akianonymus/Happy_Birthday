/*!
 * Start Bootstrap - Custom Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll')
        .bind('click', function (event) {
            var $anchor = $(this);
            $('html, body')
                .stop()
                .animate({
                    scrollTop: $($anchor.attr('href'))
                        .offset()
                        .top
                }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
});

// Highlight the top nav as scrolling occurs
$('body')
    .scrollspy({
        target: '.navbar-fixed-top'
    })

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a')
    .click(function () {
        $('.navbar-toggle:visible')
            .click();
    });

// For scroll reveal - can be used with starting tags and ids
window.sr = ScrollReveal();

sr.reveal('h2', {
    viewFactor: 0.2,
    duration: 1500,
    origin: 'top',
    distance: '0px',
    reset: true,
    rotate: {
        x: 400,
        y: 300,
        z: 0
    }
})

sr.reveal('p', {
    viewFactor: 0.2,
    duration: 1500,
    origin: 'left',
    distance: '0px',
    reset: true,
    rotate: {
        x: 0,
        y: 400,
        z: 0
    }
})

sr.reveal('#test1, #test2', {
    viewFactor: 0.2,
    duration: 1500,
    origin: 'left',
    distance: '0px',
    reset: true,
    rotate: {
        x: 0,
        y: 400,
        z: 0
    }
})

sr.reveal('i', {
    viewFactor: 0.2,
    duration: 1000,
    origin: 'top',
    distance: '0px',
    reset: true,
    rotate: {
        x: 500,
        y: 400,
        z: 0
    }
})

sr.reveal('#hbd', {
    viewFactor: 0.2,
    duration: 2500,
    origin: 'top',
    distance: '4000px',
    reset: false,
    rotate: {
        x: 0,
        y: 400,
        z: 100
    }
})

sr.reveal('#hbd1', {
    viewFactor: 0.4,
    duration: 3000,
    origin: 'bottom',
    distance: '1000px',
    reset: false,
    rotate: {
        x: 0,
        y: 400,
        z: 100
    }
})

sr.reveal('h4', {
    viewFactor: 0.2,
    duration: 1500,
    origin: 'right',
    distance: '0px',
    reset: true,
    rotate: {
        x: 0,
        y: 400,
        z: 0
    }
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{
//   location.href = 'index.html';
}
else
{
// do nothing as this is desktop js
}
