    $(document).ready(function() {
        // Toggle the hamburger menu
        $('#menu').click(function() {
            $(this).toggleClass('fa-times'); 
            $('#header').toggleClass('toggle'); 
        });
    });

    // Entfernt die Toggle-Klasse beim Scrollen oder Laden der Seite
$(window).on('scroll load', function() {
    $('#menu').removeClass('fa-times');
    $('#header').removeClass('toggle');
});
    // Entfernt die Toggle-Klasse beim Scrollen oder Laden der Seite
    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times'); 
        $('header').removeClass('toggle'); 
        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide(); 
        }
    });

    // Smooth Scrolling für interne Links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // Öffnet ein neues Fenster für den CV-Download-Link
    $('.btn[href*="lebenslauf-ali-haschimi"]').on('click', function(e) {
        e.preventDefault(); 
        window.open($(this).attr('href'), '_blank'); 
    });

    // zurück nach oben
    document.getElementById('backToTopBtn').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });