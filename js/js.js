document.addEventListener("DOMContentLoaded", function() { 

/* ===== NavBar section ===== */

    /* Navbar section
    - Expand dropdown-menu on mobile screens by toggling Bootstrap 'dropdown-menu' class
    - Remove dropdown arrow on mobile screens by toggling Bootstrap 'dropdown-toggle' class 
    */
    var navbarToggle = document.querySelector(".navbar-main .navbar-toggler");
    var dropdownMenu = document.querySelector(".navbar-main .nav.navbar-nav .dropdown-menu");
    var arrow = document.querySelector(".navbar-main .nav.navbar-nav .dropdown-toggle");
    
    function DropdownMobile() {
        if (window.matchMedia("screen and (max-width: 767px)").matches) {
            navbarToggle.addEventListener("click", function(event) {
                dropdownMenu.classList.toggle("dropdown-menu");
                arrow.classList.toggle("dropdown-toggle");
            });
        };
     };  
    DropdownMobile()     

    /*
    - Display animated gif on hover on bigger screens by changing src path kept in data attributes
    - Display static jpg on small screens by changing src path kept in data attributes
    */ 
    var boxIMG = document.querySelectorAll(".boxes .box-wrap img")

    function gifAnimate() {
        if (window.matchMedia("screen and (min-width: 768px)").matches) {
            for (var i=0; i<boxIMG.length; i++) {
                boxIMG[i].addEventListener("mouseover", function(event) {
                    if (this.hasAttribute('data-anime') === true) {
                        this.setAttribute('src', this.dataset.anime);
                    };
                });
                boxIMG[i].addEventListener("mouseout", function(event) {
                    if (this.hasAttribute('data-static') === true) {
                        this.setAttribute('src', this.dataset.static);
                    };
                });        
            };
        };
     };  
    gifAnimate()    

    /* Boxes section
    - remove opacity on mouseover, change font color
    - add opacity on mouseout, change font color
    */
    var boxWrap = document.querySelectorAll(".boxes .box-wrap")

    function BoxesOpacity() {
        // if (window.matchMedia("screen and (min-width: 768px)").matches) {
            for (var i=0; i<boxWrap.length; i++) {
                boxWrap[i].addEventListener("mouseover", function(event) {
                    this.firstElementChild.firstElementChild.classList.remove("opacity");
                    this.firstElementChild.firstElementChild.nextElementSibling.classList.remove("box-font-anime");
                });
                boxWrap[i].addEventListener("mouseout", function(event) {
                    this.firstElementChild.firstElementChild.classList.add("opacity");
                    this.firstElementChild.firstElementChild.nextElementSibling.classList.add("box-font-anime");                    
                });
            };
        // };
     };  
    BoxesOpacity()   

});
