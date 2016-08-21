document.addEventListener("DOMContentLoaded", function() { 

/* ===== NavBar ===== */

    var navbarToggle = document.querySelector(".navbar-custom .navbar-toggle");
    var dropdownMenu = document.querySelector(".navbar-custom .nav.navbar-nav ul");
    var caret = document.querySelector(".navbar-custom .dropdown span");
    
    /*
    - Expand dropdown-menu on mobile screens by toggling Bootstrap 'dropdown-menu' class
    - Remove dropdown triangle on mobile screens by toggling Bootstrap 'caret' class 
    */
    function DropdownMobile() {
        if (window.matchMedia("screen and (max-width: 767px)").matches) {
            navbarToggle.addEventListener("click", function(event) {
                dropdownMenu.classList.toggle("dropdown-menu");
                caret.classList.toggle("caret");
            });
        };
     };  
    DropdownMobile()     


    /* Hide expanded dropdown-menu when window resize bigger than mobile screen*/
    /*function DropdownMobileHide () {
        if (window.matchMedia("screen and (min-width: 768px)").matches) {
            window.addEventListener ("resize", function (hide) {
                // dropdownMenu.classList.toggle("dropdown-menu");
                dropdownMenu.style.display = "none";
            });
        };
     };  
    DropdownMobileHide()*/     

});
