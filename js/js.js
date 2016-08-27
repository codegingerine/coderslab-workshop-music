document.addEventListener("DOMContentLoaded", function() { 

/* ===== NavBar section ===== */

    var navbarToggle = document.querySelector(".navbar-main .navbar-toggler");
    var dropdownMenu = document.querySelector(".navbar-main .nav.navbar-nav .dropdown-menu");
    var arrow = document.querySelector(".navbar-main .nav.navbar-nav .dropdown-toggle");
    
    /*
    - Expand dropdown-menu on mobile screens by toggling Bootstrap 'dropdown-menu' class
    - Remove dropdown arrow on mobile screens by toggling Bootstrap 'dropdown-toggle' class 
    */
    function DropdownMobile() {
        if (window.matchMedia("screen and (max-width: 767px)").matches) {
            navbarToggle.addEventListener("click", function(event) {
                dropdownMenu.classList.toggle("dropdown-menu");
                arrow.classList.toggle("dropdown-toggle");
            });
        };
     };  
    DropdownMobile()     

});
