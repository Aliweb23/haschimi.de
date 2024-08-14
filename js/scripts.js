    $(document).ready(function() {
        // Toggle the hamburger menu
        $('#menu').click(function() {
            $(this).toggleClass('fa-bars fa-times'); // Wechsel zwischen fa-bars und fa-times
            $('#header').toggleClass('toggle'); // Öffnen und Schließen der Navbar
        });
    });

    // Entfernt die Toggle-Klasse beim Scrollen oder Laden der Seite
    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times').addClass('fa-bars'); // Setzt das Hamburger-Icon auf fa-bars zurück
        $('#header').removeClass('toggle'); // Schließt die Navbar beim Scrollen
        if ($(window).scrollTop() > 0) {
            $('.top').show(); // Zeigt das "top"-Element, wenn gescrollt wird
        } else {
            $('.top').hide(); // Versteckt das "top"-Element, wenn nicht gescrollt wird
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
        e.preventDefault(); // Verhindert das Standardverhalten des Links
        window.open($(this).attr('href'), '_blank'); // Öffnet den Link in einem neuen Tab
    });